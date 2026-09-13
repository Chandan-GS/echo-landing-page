import Reveal from './Reveal';
import { CheckIcon } from './icons';

export default function EngineChoice() {
  return (
    <section className="sec" style={{ paddingTop: 0 }} id="engine">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Two brains, your choice</span>
          <h2>On-device by default. Cloud when you want speed.</h2>
          <p>
            Echo can think entirely on your phone with a compact local model — or, if you prefer,
            hand off to Google Gemini for faster results. You decide, and you can switch any time.
          </p>
        </Reveal>
        <div className="engines">
          <Reveal className="engine local">
            <div className="tag">Recommended · fully private</div>
            <h3>On-device engine</h3>
            <p>
              A quantized Qwen2.5 1.5B model runs locally. No internet, no server, no cost — your
              data never leaves the phone.
            </p>
            <ul>
              <li>
                <CheckIcon /> Works completely offline
              </li>
              <li>
                <CheckIcon /> Nothing transmitted, ever
              </li>
              <li>
                <CheckIcon /> Free — no subscription
              </li>
            </ul>
          </Reveal>
          <Reveal className="engine cloud">
            <div className="tag">Optional · faster</div>
            <h3>Google Gemini engine</h3>
            <p>
              Prefer snappier, richer responses? Opt into the cloud engine and Echo sends the
              relevant text to Gemini to generate your briefing.
            </p>
            <ul>
              <li>
                <CheckIcon /> Faster generation
              </li>
              <li>
                <CheckIcon /> Off by default — you opt in
              </li>
              <li>
                <CheckIcon /> Switch back anytime
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
