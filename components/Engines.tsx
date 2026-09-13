import Reveal from './Reveal';
import { DeviceIcon, CloudIcon, CheckIcon } from './icons';

export default function Engines() {
  return (
    <section className="section" id="engine">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">Your AI, your choice</span>
          <h2 className="section-h2">On-device by default. Cloud when you want speed.</h2>
          <p className="section-desc">
            Echo can think entirely on your phone, or hand off to Google Gemini for faster, richer
            answers. You decide — and you can switch any time.
          </p>
        </Reveal>

        <Reveal className="engines">
          <div className="engine solid">
            <div className="engine-icon">
              <DeviceIcon className="material-icon" />
            </div>
            <div className="engine-tag">Private · offline</div>
            <h3>On-device engine</h3>
            <p>
              A compact Qwen2.5 1.5B model runs locally. No internet, no server, no cost — your data
              never leaves the phone.
            </p>
            <ul>
              <li>
                <CheckIcon className="material-icon" /> Works completely offline
              </li>
              <li>
                <CheckIcon className="material-icon" /> Nothing transmitted, ever
              </li>
              <li>
                <CheckIcon className="material-icon" /> Free — no subscription
              </li>
            </ul>
          </div>

          <div className="engine outline">
            <div className="engine-icon">
              <CloudIcon className="material-icon" />
            </div>
            <div className="engine-tag">Optional · faster</div>
            <h3>Google Gemini engine</h3>
            <p>
              Prefer snappier, more detailed responses? Opt into the cloud engine and Echo sends only
              the relevant text to Gemini to generate your briefing.
            </p>
            <ul>
              <li>
                <CheckIcon className="material-icon" /> Faster, richer generation
              </li>
              <li>
                <CheckIcon className="material-icon" /> Off by default — you opt in
              </li>
              <li>
                <CheckIcon className="material-icon" /> Switch back anytime
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
