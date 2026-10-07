import { RevealDiv, SectionHeader } from '../../ui/index';
import mamakim1 from "../../../assets/mamakim1.jpg"
import food1 from "../../../assets/food1.jpg"
import coworker1 from "../../../assets/coworker1.jpeg";
// ─── Journey ──────────────────────────────────────────────
export function Journey() {
  return (
    <section className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv className="max-w-narrative mx-auto">
          <SectionHeader label="Her Journey" heading="She crossed oceans so her children wouldn't have to struggle the way she did." />
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            She arrived in the United States in 2003, leaving Vietnam with little more than hope in her hands and love in her heart. No safety net — just a quiet, fierce promise she made to herself: <em>my children will have a better life than I did.</em>
          </p>
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            She found her place in the kitchen — not reluctantly, but joyfully. She had always loved to cook. The heat of the stove, the rhythm of prep work, the satisfaction of seeing people enjoying her dishes. Being a kitchen helper wasn't just how she earned a living. It was work that matched who she was.
          </p>
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            And so she worked. Early mornings, late nights, double shifts when she could get them. Standing for ten, twelve hours at a stretch. She missed parties and holidays, not because she didn't want to be there with her kids — but because she could earn more during those days.
          </p>
          <div className="pull-quote">
            <p>"Before leaving for work each morning, she would have breakfast ready on the table and lunch packed for us."</p>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── SilentBattle ─────────────────────────────────────────
export function SilentBattle() {
  return (
    <section className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv className="max-w-narrative mx-auto">
          <SectionHeader label="The Silent Battle" heading="For years, she carried an illness she refused to let slow her down." />
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            Chronic kidney disease doesn't announce itself loudly. It creeps in quietly — fatigue mistaken for tiredness, swelling dismissed as long days on her feet. When doctors first told her, she nodded, took her medication, and went back to work the next morning.
          </p>
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            Slowing down was never part of who she was. Her family needed her, and need didn't take sick days. So neither did she.
          </p>
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            But the body keeps count of everything we ask it to endure. The years of pushing through — the double shifts, the standing for hours, the worry she never voiced aloud — quietly took their toll. What began as a manageable condition has now reached a critical point.
          </p>
          <div className="pull-quote">
            <p>"She never once said 'I'm tired.' Not to us, not to herself. Stopping felt like failing — even when her body was begging her to rest."</p>
          </div>
          <p className="text-lg text-ink-muted leading-[1.85] font-light">
            Today, her kidneys have stopped functioning entirely. The woman who spent thirty years in motion now spends most of her days connected to a dialysis machine — her world narrowed from a bustling kitchen to a quiet bedroom.
          </p>
        </RevealDiv>
      </div>
      
    </section>
  );
}

// ─── ThenNow ──────────────────────────────────────────────
const THEN_NOW = [
  {
    beforeTitle: 'Up before dawn',
    beforeBody: "Breakfast on the table, lunches packed before the house stirred — her quiet act of love each day, before a full shift on her feet.",
    nowTitle: 'Dialysis check-up & treatment',
    nowBody: "Hours connected to a machine doing what her kidneys no longer can. Monitoring whether enough toxins were filtered overnight to make the day safe.",
    time: 'Morning',
  },
  {
    beforeTitle: 'Long hours at work',
    beforeBody: "On her feet in a commercial kitchen — every paycheck quietly divided between bills, groceries, and her children's futures.",
    nowTitle: 'Rest, limited fluids, loss of appetite',
    nowBody: "The fatigue after dialysis is profound. Fluid intake is strictly limited. The appetite that once drove her love of cooking has nearly disappeared.",
    time: 'Afternoon',
  },
  {
    beforeTitle: 'Home and cooking',
    beforeBody: 'The smell of a warm dinner filling the house — her way of saying "you are safe, you are loved, you are home."',
    nowTitle: 'Watching, waiting — 10 more hours',
    nowBody: "Monitoring her levels, watching for signs of another ER trip — then preparing for another 10-hour dialysis session. This is every day.",
    time: 'Evening',
  },
];

export function ThenNow() {
  return (
    <section id="then-now" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader
            label="A Day in Her Life"
            heading="Then & Now — the rhythms that defined her, before everything changed."
          />
        </RevealDiv>
        <div className="mt-8 rounded-xl overflow-hidden border border-border grid grid-cols-1 md:grid-cols-2"
          style={{ boxShadow: '0 2px 20px rgba(45,125,154,0.07)' }}>
          {THEN_NOW.map(({ beforeTitle, beforeBody, nowTitle, nowBody, time }, i,) => (
            <>
              <RevealDiv key={`before-${i}`} delay={i * 80}
                className={`p-7 border-b border-r-0 md:border-r border-border bg-surface-white ${i === THEN_NOW.length - 1 ? 'border-b-0 md:border-b-0' : ''}`}>
                <span className="tn-pill-before">{`Before — ${time}`}</span>
                <p className=" font-semibold text-base mb-2 text-ink">{beforeTitle}</p>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{beforeBody}</p>
              </RevealDiv>
              <RevealDiv key={`now-${i}`} delay={i * 80 + 60}
                className={`p-7 border-b border-border bg-primary-DEFAULT/[0.025] ${i === THEN_NOW.length - 1 ? 'border-b-0' : ''}`}>
                <span className="tn-pill-now">{`Now — ${time}`}</span>
                <p className="font-semibold text-base mb-2 text-ink">{nowTitle}</p>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{nowBody}</p>
              </RevealDiv>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Photos ───────────────────────────────────────────────
const PHOTO_SLOTS = [
  { image: mamakim1, label: 'Mama Kim at work', caption: 'With her favorite youtube food vlogger - Nga Sumo' },
  { image: coworker1, label: 'Her second home', caption: 'With the people she worked alongside for years' },
  { image: food1, label: 'Banh Cuon - A dish she was proud of', caption: 'One of her favorite dishes to prepare' },
];

export function Photos() {
  return (
    <section className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Mama Kim at Work" heading="A woman who found joy in every dish she made." />
          <p className="text-base text-ink-muted leading-relaxed font-light max-w-2xl mb-8">
            She didn't just work in the kitchen — she thrived there.
          </p>
        </RevealDiv>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PHOTO_SLOTS.map(({ image, label, caption }, i) => (
            <RevealDiv key={i} delay={i * 100}>
              <div className="flex flex-col items-center justify-center gap-3">
                  <img className='rounded-xl' src={image} alt="mamakimpicture1"/>
                <span className="text-xs font-medium text-ink-faint text-center px-4 leading-relaxed">{label}</span>
              </div>
              <p className="text-xs text-ink-faint italic text-center mt-2">{caption}</p>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
