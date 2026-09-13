import Image from 'next/image';

type PhoneFrameProps = {
  src: string;
  alt: string;
  glow?: boolean;
  /** When false, the frame sits at its natural width (used inside grids). */
  constrained?: boolean;
};

/**
 * A dark hardware phone frame that showcases a real dark-theme app screenshot.
 * The source JPEGs are 720×1560; we render at that intrinsic ratio.
 */
export default function PhoneFrame({ src, alt, glow = true, constrained = true }: PhoneFrameProps) {
  return (
    <div className={`device ${glow ? 'glow' : ''}`.trim()} style={constrained ? undefined : { maxWidth: 'none' }}>
      <div className="frame">
        <Image src={src} alt={alt} width={720} height={1560} priority={false} />
      </div>
    </div>
  );
}
