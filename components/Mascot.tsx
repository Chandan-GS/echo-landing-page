'use client';

import { useEffect, useRef } from 'react';

/**
 * Echo, drawn exactly as the app draws him (lib/features/echo/presentation/
 * widgets/echo_mascot.dart, idle state, no rings or glow): a pearlescent orb
 * that floats and breathes, blinks (sometimes twice), glances around, nods or
 * leans in now and then, and leans his head after his eyes.
 *
 * On the web he also watches the pointer, looks the way you scroll, and
 * smiles (^ ^) when something happens on the page: any code can call
 * `window.dispatchEvent(new Event('echo:happy'))`.
 */

const TAU = Math.PI * 2;
const EYE = '#222F27';
const BOT_SHADE = 'rgba(94,133,104,';

const smooth = (x: number) => x * x * (3 - 2 * x);

/** Deterministic "random" in [0, 1), so behaviour needs no stored schedule. */
const seeded = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/** Where Echo looks when left alone: a new spot every ~2.6s, every third back at you. */
function idleGaze(ms: number) {
  const seg = 2600;
  const idx = Math.floor(ms / seg);
  const target = (i: number) => (i % 3 === 0 ? [0, 0] : [seeded(i, 1) * 2 - 1, (seeded(i, 7) * 2 - 1) * 0.75]);
  const a = target(idx - 1);
  const b = target(idx);
  const f = (ms % seg) / seg;
  const e = f < 0.22 ? smooth(f / 0.22) : 1;
  return [a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e];
}

/** 1 open; a blink roughly every 3.4–5.4s, sometimes a quick double. */
function blink(ms: number) {
  const seg = 4400;
  const idx = Math.floor(ms / seg);
  let open = 1;
  for (const i of [idx - 1, idx]) {
    const at = i * seg + seeded(i, 11) * 2000;
    for (const off of seeded(i, 13) > 0.72 ? [0, 260] : [0]) {
      const d = (ms - (at + off)) / 170;
      if (d >= 0 && d < 1) open = Math.min(open, 1 - (d < 0.5 ? d / 0.5 : (1 - d) / 0.5) * 0.9);
    }
  }
  return open;
}

/** A small idle moment every ~5.2s: a nod, a curious lean-in, or a bob. */
function moment(ms: number): [string, number] {
  const seg = 5200;
  const idx = Math.floor(ms / seg);
  const f = (ms % seg) / seg;
  const pick = seeded(idx, 3);
  const kind = pick < 0.28 ? 'nod' : pick < 0.5 ? 'curious' : pick < 0.66 ? 'bob' : 'none';
  const strength = f < 0.55 || f > 0.82 ? 0 : Math.sin((Math.PI * (f - 0.55)) / 0.27);
  return [kind, strength];
}

export default function Mascot({ className, reach = 1.6 }: { className?: string; reach?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const start = performance.now();
    let gx = 0, gy = 0, hx = 0, hy = 0, stretch = 0, last = 0;
    let pointer: [number, number] | null = null;
    let pointerAt = -1e9;
    let scrollDir = 0;
    let scrollAt = -1e9;
    let lastScroll = window.scrollY;
    let happyAt = -1e9;
    let winkAt = -1e9;
    let raf = 0;

    const now = () => performance.now() - start;
    const onMove = (e: PointerEvent) => {
      pointer = [e.clientX, e.clientY];
      pointerAt = now();
    };
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastScroll) > 2) {
        scrollDir = y > lastScroll ? 1 : -1;
        scrollAt = now();
      }
      lastScroll = y;
    };
    const onHappy = () => {
      happyAt = now();
    };
    const onWink = () => {
      if (now() - winkAt > 440) winkAt = now();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('echo:happy', onHappy);
    window.addEventListener('echo:wink', onWink);

    const draw = () => {
      const ms = reduce ? 0 : now();
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const px = Math.max(1, Math.round(rect.width * dpr));
      if (canvas.width !== px) {
        canvas.width = px;
        canvas.height = px;
      }
      const size = canvas.width;
      const happy = ms - happyAt < 1400;

      // ── Where the eyes want to be ──────────────────────────────────────────
      let target: number[];
      if (pointer && ms - pointerAt < 2500) {
        const dx = pointer[0] - (rect.left + rect.width / 2);
        const dy = pointer[1] - (rect.top + rect.height / 2);
        const d = Math.hypot(dx, dy);
        const r = Math.min(1, d / 140);
        target = d < 1 ? [0, 0] : [(dx / d) * r, (dy / d) * r];
      } else if (ms - scrollAt < 700) {
        target = [0, 0.85 * scrollDir];
      } else if (happy) {
        target = [0, -0.15];
      } else {
        target = idleGaze(ms);
      }
      const dt = Math.min(0.05, Math.max(0, (ms - last) / 1000));
      last = ms;
      const pgx = gx, pgy = gy;
      const e = Math.min(1, dt * 16), h = Math.min(1, dt * 4.5);
      gx += (target[0] - gx) * e;
      gy += (target[1] - gy) * e;
      hx += (gx - hx) * h;
      hy += (gy - hy) * h;
      const speed = dt > 0 ? Math.hypot(gx - pgx, gy - pgy) / dt : 0;
      stretch = Math.min(0.14, speed * 0.02);

      // ── Paint, in the app's 240×240 design space, framed tight (no rings) ─
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, size, size);
      const k = size / 240;
      ctx.translate(size / 2, size / 2);
      ctx.scale(240 / 180, 240 / 180);
      ctx.translate(-size / 2, -size / 2);
      const s = (v: number) => v * k;

      const t = (ms % 2800) / 2800;
      const [kind, strength] = happy ? ['none', 0] : moment(ms);
      const bob = kind === 'bob' ? s(6) * strength : 0;
      const floatDy = s(4) * Math.sin(t * TAU) - bob;
      const breathe = 1 + 0.03 * Math.sin(t * TAU);
      const tiltDx = s(4) * reach * hx;
      const tiltDy = s(3) * reach * hy + (kind === 'nod' ? s(4.5) * strength : 0);
      let tiltRot = 0.105 * hx;
      const tiltScale = kind === 'curious' ? 1 + 0.05 * strength : 1;
      if (happy) tiltRot += 0.087 * Math.sin(ms / 240);

      const cx = s(120), cy = s(120), r = s(56);
      ctx.save();
      ctx.translate(0, floatDy);
      ctx.translate(cx, cy);
      ctx.scale(breathe, breathe);
      ctx.translate(tiltDx, tiltDy);
      ctx.rotate(tiltRot);
      ctx.scale(tiltScale, tiltScale);
      ctx.translate(-cx, -cy);

      // The glossy pearlescent sphere.
      const body = ctx.createRadialGradient(cx - 0.1 * r, cy + 0.14 * r, 0, cx - 0.1 * r, cy + 0.14 * r, 1.44 * r);
      body.addColorStop(0, '#FFFFFF');
      body.addColorStop(0.3, '#F4F9F0');
      body.addColorStop(0.6, '#D9E8DB');
      body.addColorStop(0.84, '#B4D1BA');
      body.addColorStop(1, '#9EC0A6');
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, TAU);
      ctx.fillStyle = body;
      ctx.fill();
      const shade = ctx.createRadialGradient(cx, cy + 0.6 * r, 0, cx, cy + 0.6 * r, 1.24 * r);
      shade.addColorStop(0, BOT_SHADE + '0)');
      shade.addColorStop(0.72, BOT_SHADE + '0)');
      shade.addColorStop(1, BOT_SHADE + '0.3)');
      ctx.fillStyle = shade;
      ctx.fill();

      // Specular sheen and a crisp catchlight, upper left.
      ctx.save();
      ctx.translate(cx - r * 0.32, cy - r * 0.46);
      ctx.rotate(-0.42);
      ctx.scale(1, 0.54 / 0.86);
      const spec = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.55);
      spec.addColorStop(0, 'rgba(255,255,255,0.95)');
      spec.addColorStop(0.45, 'rgba(255,255,255,0.55)');
      spec.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = spec;
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.55, 0, TAU);
      ctx.fill();
      ctx.restore();
      const catchR = r * 0.14;
      const cl = ctx.createRadialGradient(cx - r * 0.39, cy - r * 0.54, 0, cx - r * 0.39, cy - r * 0.54, catchR);
      cl.addColorStop(0, 'rgba(255,255,255,0.95)');
      cl.addColorStop(0.6, 'rgba(255,255,255,0.9)');
      cl.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = cl;
      ctx.beginPath();
      ctx.arc(cx - r * 0.39, cy - r * 0.54, catchR, 0, TAU);
      ctx.fill();

      // Eyes: they look where Echo looks, and blink, wink and smile.
      ctx.save();
      ctx.translate(s(6) * reach * gx, s(4.2) * reach * gy);
      if (happy) {
        ctx.strokeStyle = EYE;
        ctx.lineWidth = s(3.4);
        ctx.lineCap = 'round';
        for (const ex of [108, 132]) {
          ctx.beginPath();
          ctx.moveTo(s(ex - 7), s(123));
          ctx.quadraticCurveTo(s(ex), s(112), s(ex + 7), s(123));
          ctx.stroke();
        }
      } else {
        const widen = kind === 'curious' ? 1 + 0.18 * strength : 1;
        const sy = blink(ms) * widen * (1 - stretch);
        const sx = (1 + stretch * 0.7) * (1 + (widen - 1) * 0.5);
        const wf = (ms - winkAt) / 440;
        const wink = wf >= 0 && wf < 1 ? 1 - (wf < 0.5 ? wf / 0.5 : (1 - wf) / 0.5) * 0.92 : 1;
        const eye = (ex: number, extra: number) => {
          ctx.save();
          ctx.translate(s(ex), s(120));
          ctx.scale(sx, Math.max(0.02, sy * extra));
          ctx.beginPath();
          ctx.ellipse(0, 0, s(5.5), s(8.5), 0, 0, TAU);
          ctx.fillStyle = EYE;
          ctx.fill();
          ctx.restore();
          if (sy * extra > 0.5) {
            ctx.beginPath();
            ctx.arc(s(ex) + s(2) - s(1.6) * reach * gx, s(120) - s(3.6) - s(1.3) * reach * gy, s(2), 0, TAU);
            ctx.fillStyle = 'rgba(255,255,255,0.95)';
            ctx.fill();
          }
        };
        eye(108, wink);
        eye(132, 1);
      }
      ctx.restore();
      ctx.restore();

      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('echo:happy', onHappy);
      window.removeEventListener('echo:wink', onWink);
    };
  }, [reach]);

  return <canvas ref={ref} className={className} role="img" aria-label="Echo, the app's mascot" />;
}
