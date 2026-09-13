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
  reverse?: boolean;
};

export default function FeatureRow({ eyebrow, title, body, points, image, reverse }: FeatureRowProps) {
  return (
    <div className={`frow ${reverse ? 'reverse' : ''}`.trim()}>
      <Reveal className="frow-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{body}</p>
        <ul className="frow-list">
          {points.map((p) => (
            <li key={p}>
              <span className="tick">
                <CheckIcon className="material-icon" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="frow-media">
        <div className="device glow">
          <div className="device-frame">
            <Image src={image.src} alt={image.alt} width={720} height={1560} />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
