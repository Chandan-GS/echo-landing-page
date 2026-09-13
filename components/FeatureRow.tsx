import type { ReactNode } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { CheckIcon } from './icons';

type FeatureRowProps = {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  points: string[];
  image: { src: string; alt: string };
  /** Reverse layout: text on the right, phone on the left. */
  reversed?: boolean;
};

export default function FeatureRow({
  eyebrow,
  title,
  body,
  points,
  image,
  reversed = false,
}: FeatureRowProps) {
  return (
    <div className={`feature ${reversed ? 'rev' : ''}`.trim()}>
      <Reveal className="f-text">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{body}</p>
        <ul className="f-list">
          {points.map((point) => (
            <li key={point}>
              <span className="tick">
                <CheckIcon />
              </span>{' '}
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="device glow">
        <div className="frame">
          <Image src={image.src} alt={image.alt} width={720} height={1560} />
        </div>
      </Reveal>
    </div>
  );
}
