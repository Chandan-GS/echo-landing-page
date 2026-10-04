'use client';

import { useState, type CSSProperties } from 'react';
import Reveal from '../Reveal';
import { AddReactionIcon, AlarmIcon, ChevronRightIcon, GroupsIcon, NotificationsSetIcon, ReplyIcon } from '../icons';
import { AskPill, DraftBody, Reactions, RoundPill, SentLine } from './parts';

// The film's day: who is waiting, and the groups that were busy without you.
const PEOPLE = [
  {
    id: 'rohan',
    who: 'Rohan',
    app: 'WhatsApp',
    tag: 'to you',
    msg: 'Coorg on Friday? I’m driving, leaving early. You in?',
    draft: 'I’m in! Happy to split fuel. See you early 🚗',
    remind: '9:30 PM',
  },
  {
    id: 'vikram',
    who: 'Vikram',
    where: '#launch',
    app: 'Slack',
    tag: 'mentions you',
    msg: 'Can you sign off the release notes before 5?',
    draft: 'On it. You’ll have my sign-off well before 5.',
    remind: '4:40 PM',
  },
  {
    id: 'priya',
    who: 'Priya',
    app: 'WhatsApp',
    tag: 'to you',
    msg: 'Landed! Thank you for the airport tips 🙌',
    draft: 'So glad you landed safe! Anytime 😊',
    remind: '7:00 PM',
  },
];

const GROUPS = [
  { name: 'College gang', n: 11, line: 'The Coorg trip is on for Friday. Everyone pays Arjun by Monday, and Rohan asked if you’re driving with him.' },
  { name: '#launch', n: 8, line: 'Launch is still on for Tuesday. QA’s Android blocker is fixed, and Vikram needs your sign-off by 5.' },
  { name: 'Design crit', n: 5, line: 'Riya’s landing page is ready. The team prefers the second hero and wants your call by tomorrow.' },
];

type State = { mode?: 'draft' | 'react'; sent?: string; drafted?: boolean; reminding?: boolean };

export default function NeedsYou() {
  const [state, setState] = useState<Record<string, State>>({});
  const set = (id: string, s: State) => setState((all) => ({ ...all, [id]: { ...all[id], ...s } }));
  const happy = () => window.dispatchEvent(new Event('echo:happy'));

  return (
    <section className="section" id="people">
      <div className="wrap">
        <Reveal className="split head-split">
          <div>
            <p className="kicker">Who’s waiting</p>
            <h2>See who needs you, and what they asked.</h2>
          </div>
          <p className="body">
            WhatsApp, Slack, Teams, Gmail and the rest, in one place. Reply in a tap, react without
            opening the chat, or ask Echo to remind you later. Busy groups come summed up.
          </p>
        </Reveal>
        <div className="pair">
          <Reveal className="pair-item">
            <div className="stagger">
              <div className="app-head">
                <h4>Needs you</h4>
              </div>
              {PEOPLE.map((p, i) => {
                const s = state[p.id] ?? {};
                return (
                  <div className="ask-card for-you" key={p.id} style={{ '--i': i + 1 } as CSSProperties}>
                    <div className="who-row">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/icons/${p.app}.png`} alt={p.app} width={24} height={24} />
                      <span className="who">
                        <b>{p.who}</b>
                        {p.where && ` · ${p.where}`}
                      </span>
                      <em className="for-tag">{p.tag}</em>
                    </div>
                    <p className="for-msg">“{p.msg}”</p>
                    {s.sent ? (
                      <SentLine>Sent {s.sent} to {p.who}</SentLine>
                    ) : s.mode === 'draft' ? (
                      <div className="draft-in swap">
                        <DraftBody
                          text={p.draft}
                          to={p.who}
                          sent={!!s.drafted}
                          onSend={() => {
                            set(p.id, { drafted: true });
                            happy();
                          }}
                          onDismiss={() => set(p.id, { mode: undefined })}
                        />
                      </div>
                    ) : s.mode === 'react' ? (
                      <Reactions
                        onClose={() => set(p.id, { mode: undefined })}
                        onPick={(e) => {
                          set(p.id, { sent: e, mode: undefined });
                          happy();
                        }}
                      />
                    ) : (
                      <div className="pill-row pill-wrap swap">
                        <AskPill label="Reply" icon={ReplyIcon} filled onClick={() => set(p.id, { mode: 'draft' })} />
                        <RoundPill icon={AddReactionIcon} label="Reply with an emoji" onClick={() => set(p.id, { mode: 'react' })} />
                        {s.reminding ? (
                          <AskPill key="set" label={`Reminding at ${p.remind}`} icon={NotificationsSetIcon} set onClick={() => set(p.id, { reminding: false })} />
                        ) : (
                          <AskPill key="off" label={`Remind me at ${p.remind}`} icon={AlarmIcon} onClick={() => set(p.id, { reminding: true })} />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="cap"><b>Reply without opening the chat.</b><span>Try it: let Echo draft a reply, or send a heart.</span></div>
          </Reveal>
          <Reveal className="pair-item">
            <div className="stagger">
              <div className="app-head">
                <h4>Busy groups</h4>
                <span>not for you</span>
              </div>
              {GROUPS.map((g, i) => (
                <div key={g.name} className="group-row" style={{ '--i': i + 1 } as CSSProperties}>
                  <GroupsIcon className="material-icon gi" />
                  <span className="gt">
                    <b>{g.name}</b>
                    <span className="gn"> · {g.n} new</span>
                    <span className="gl">{g.line}</span>
                  </span>
                  <ChevronRightIcon className="material-icon chev" />
                </div>
              ))}
            </div>
            <div className="cap"><b>Busy groups, summed up.</b><span>What happened, and the one thing that needs you.</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
