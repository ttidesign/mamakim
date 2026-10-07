import { useState } from 'react';
import { RevealDiv, SectionHeader, EvalAccordion, AccordionItem, CtaBanner } from '../../ui/index';
import { DONOR_CRITERIA, EVAL_STEPS, CARE_TIMELINE, STANFORD_STATS, STANFORD_INNOVATIONS, FAQ_ITEMS, STANFORD_DONOR_URL, STANFORD_EXPECT_URL } from '../../../data/content';
import testimonial1 from "../../../assets/testimonial1.jpg";
import testimonial2 from "../../../assets/testimonial2.jpg";
import testimonial3 from "../../../assets/testimonial3.jpg";

// ─── DonorHero ────────────────────────────────────────────
export function DonorHero() {
  return (
    <div className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #013d4e 0%, #006480 100%)' }}>
      <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at 20% 50%, #bce9ff, transparent 60%)' }} />
      <div className="relative z-10 max-w-container mx-auto px-8 md:px-16">
        <span className="inline-flex items-center gap-1 bg-primary-fixed/20 text-primary-fixed text-xs font-semibold tracking-[0.15em] uppercase rounded-full px-3 py-1 mb-6">
          Living Donor Information
        </span>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
          Everything you need to know about<br className="hidden md:block" /> becoming a living kidney donor.
        </h1>
        <p className="text-white/70 text-base max-w-2xl leading-relaxed mb-8 font-light">
          Drawn from Stanford Health Care's Living Donor Program. All information reflects real clinical protocols — no pressure, no obligation, just clarity.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Start Stanford's Screener →</a>
          <a href={STANFORD_EXPECT_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-white">What to Expect at Stanford</a>
        </div>
      </div>
    </div>
  );
}

// ─── WhoCanDonate ─────────────────────────────────────────
export function WhoCanDonate() {
  return (
    <section id="d-who" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Who Can Be a Donor" heading="Requirements for living kidney donation"
            subtext="You don't need to be family. Close friends, acquaintances, or altruistic strangers are all welcome. What matters is your health and your willingness to give freely." />
        </RevealDiv>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
          {DONOR_CRITERIA.map(({title, desc }, i) => (
            <RevealDiv key={i} delay={i * 50}
              className="flex gap-3 items-start bg-surface-white rounded-xl p-4 md:p-5 border border-border shadow-teal">
              {/* <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0 text-sm"></div> */}
              <div>
                <p className="text-sm font-semibold text-[#006480] mb-1">{title}</p>
                <p className="text-xs text-ink-muted leading-snug font-light">{desc}</p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Crossmatch ───────────────────────────────────────────
export function Crossmatch() {
  return (
    <section id="d-crossmatch" className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Crossmatching" heading="What is crossmatch testing — and why does it matter?"
            subtext="One of the most critical compatibility tests in transplantation — a blood test that determines whether your cells and the recipient's immune system are compatible before surgery." />
        </RevealDiv>
        <RevealDiv className="bg-surface-white rounded-xl p-6 md:p-8 border border-border shadow-teal mt-2">
          <h3 className="font-display font-semibold text-xl mb-3 text-ink">How it works</h3>
          <p className="text-sm text-ink-muted leading-relaxed mb-6 font-light max-w-2xl">
            A small sample of your cells is mixed with Mama Kim's blood serum in a lab. The result tells the transplant team whether her immune system would mount a reaction against your kidney.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg p-5 bg-sage-soft border border-sage-border">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-sage mb-2">✓ Negative Crossmatch — Good</p>
              <p className="text-sm text-sage-DEFAULT/80 leading-relaxed font-light">No immune reaction detected. Mama Kim's body is unlikely to reject your kidney. This is the result needed to proceed with transplant surgery.</p>
            </div>
            <div className="rounded-lg p-5 bg-err-light border border-err-border">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-err mb-2">✗ Positive Crossmatch</p>
              <p className="text-sm text-err-DEFAULT/70 leading-relaxed font-light">A reaction was detected. Direct transplant may not be safe — but this does <em>not</em> mean you can't help. Paired exchange or donor chains can still make a transplant possible.</p>
            </div>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed font-light bg-primary-fixed/15 rounded-lg p-4">
            <strong className="font-semibold text-primary-DEFAULT">Advanced options:</strong> Stanford also offers desensitization (IVIG infusions for sensitized patients) and ABO-incompatible transplant protocols (plasmapheresis) — expanding options for patients who would otherwise have none.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── EvaluationProcess ────────────────────────────────────
export function EvaluationProcess() {
  return (
    <section id="d-eval" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="The Evaluation Process" heading="Four steps — guided every step of the way."
            subtext="The process typically takes a few months. You can stop at any point, for any reason, with zero obligation. Stanford assigns you your own coordinator and an Independent Donor Advocate who represents only you." />
        </RevealDiv>
        <RevealDiv className="mt-2">
          <EvalAccordion steps={EVAL_STEPS} />
        </RevealDiv>
        <RevealDiv className="mt-5 p-5 rounded-xl bg-primary-fixed/15 border border-primary/15">
          <p className="text-sm text-ink leading-relaxed font-light">
            <strong className="font-semibold">Your Independent Donor Advocate (IDA)</strong> is assigned from the moment you contact the program. Their sole job is to represent your interests — not the recipient's — all the way through post-donation follow-up.
          </p>
        </RevealDiv>
        <RevealDiv className="mt-6 text-center">
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Start Donor Screener →</a>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── PairedExchange ───────────────────────────────────────
export function PairedExchange() {
  const cards = [
    {
      icon: '🔄', accent: 'bg-peach', title: 'Paired Kidney Exchange',
      text: "If you want to donate to Mama Kim but aren't compatible, you're paired with another incompatible donor-recipient pair. Your kidney goes to their recipient — and their donor's kidney goes to Mama Kim. Two people get transplants instead of zero.",
    },
    {
      icon: '⛓️', accent: 'bg-sage-light', title: 'Donor Chain Transplants',
      text: "A chain is started by a non-directed (altruistic) donor — someone who donates without a specific recipient. This triggers a sequence of compatible transplants across multiple pairs. One generous act can ripple through many lives.",
    },
  ];

  return (
    <section id="d-paired" className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Even If You're Not a Match" heading="Paired exchange & donor chains — your kidney can still help."
            subtext="Not a direct match? This is not the end. Stanford's program offers two powerful alternatives that have helped thousands of people who would otherwise have no compatible donor." />
        </RevealDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {cards.map(({ icon, accent, title, text }, i) => (
            <RevealDiv key={i} delay={i * 80}
              className="bg-surface-white rounded-xl p-6 md:p-7 border border-border shadow-teal relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 ${accent}`} />
              {/* <div className="text-3xl mb-4">{icon}</div> */}
              <h3 className="font-display font-semibold text-xl mb-3 text-ink">{title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light mb-3">{text}</p>
            </RevealDiv>
          ))}
        </div>
        <RevealDiv delay={160} className="bg-surface-white rounded-xl p-6 md:p-7 border border-border shadow-teal mt-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary-fixed" />
          {/* <div className="text-3xl mb-4"><span role='img' aria-label='heart'>💛
            </span></div> */}
          <h3 className="font-display font-semibold text-xl mb-3 text-ink">Non-Directed (Altruistic) Donation</h3>
          <p className="text-sm text-ink-muted leading-relaxed font-light mb-5">
            You don't need a personal connection to Mama Kim. Non-directed donors offer a kidney simply because someone needs one. Stanford can match your kidney to start a chain that ultimately benefits Mama Kim or someone equally in need. This is one of the most powerful acts of generosity in modern medicine — one person's willingness creating a cascade of life.
          </p>
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Register as a Donor →</a>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────
const PHOTO_SLOTS = [
  { image: testimonial1, label: '-Christine, Kidney Donor', caption: 'Even though being a match is an odds-defying result, at no  time did anyone on the staff put any pressure on me to donate. In fact, I was respectfully reminded that I had the choice to change my mind at any time.' },
  { image: testimonial2, label: '-Josephine, Kidney Donor', caption: 'I feel so positive about this experience even though I was not able to donate directly to a loved one. In some ways it’s better because this way I was able to help multiple people.' },
  { image: testimonial3, label: '-Fred, Kidney Recipient', caption: 'The whole team did a great job, from the lowest level  to the highest. God bless every person at Stanford.' },
];
export function Testimonials() {
  return (
    <section className="py-20 bg-surface-white">
          <div className="max-w-container mx-auto px-8 md:px-16">
            <RevealDiv>
              <SectionHeader label='Giving the "Gift Of Life"' heading="Donors & Recipient on Kidney Transplant " />
              <p className="text-base text-ink-muted leading-relaxed font-light max-w-2xl mb-8">
              Donating a kidney is a completely voluntary decision. It is your right to withdraw from this process at any time.
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
            <div className="mt-5">
            <a className="btn-primary" target="_blaNk" rel="noopener noreferrer" href='https://stanfordhealthcare.org/content/dam/SHC/clinics/kidney-transplant-program/docs/kidney-donor-interior-v11.pdf'> View & Download Stanford's Guide to Become a Living Donor </a>
            </div>
          </div>
        </section>
  );
}
// ─── AfterDonation ────────────────────────────────────────
export function AfterDonation() {
  const dotColor: Record<string, string> = {
    primary: 'bg-primary',
    peach:   'bg-peach',
    sage:    'bg-sage',
  };

  return (
    <section id="d-care" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="After You Donate" heading="What happens after you give the gift of life?"
            subtext="Most donors return to full, healthy lives within 4–6 weeks. Stanford treats donors as heroes — and backs that up with comprehensive, long-term care." />
        </RevealDiv>
        <RevealDiv className="mt-4 relative">
          <div className="absolute left-[17px] top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, #006480, #fed9b8, #3f6355)' }} />
          <div className="flex flex-col">
            {CARE_TIMELINE.map(({ dot, when, title, desc }, i) => (
              <div key={i} className="flex gap-5 py-5">
                <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold relative z-10 ${dotColor[dot]}`}>
                  {i + 1}
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-primary mb-1">{when}</p>
                  <p className="text-sm font-semibold text-ink mb-1.5">{title}</p>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealDiv>
        <RevealDiv className="mt-4 p-5 md:p-6 rounded-xl bg-sage-soft border border-sage-border">
          <p className="text-sm text-ink leading-relaxed font-light">
            <strong className="font-semibold text-ink">Who covers the costs?</strong> In most cases, the transplant recipient's health insurance covers all donor-related medical costs — evaluation, surgery, and all follow-up care. Stanford's financial coordinators verify coverage before any step is taken. Donors are responsible for non-medical costs such as transportation and time off work.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
// ─── StanfordExpertise ────────────────────────────────────
export function StanfordExpertise() {
  return (
    <section id="d-stanford" className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Stanford Expertise" heading="First in California. A leader nationally."
            subtext="Stanford performed the first kidney transplant in California in 1960. Today, it's one of the few US centers offering pioneering procedures that make transplant possible for patients who would otherwise have no options." />
        </RevealDiv>
        <RevealDiv className="mt-4 rounded-2xl overflow-hidden"
          >
            <div style={{ background: 'linear-gradient(135deg, #013d4e 0%, #006480 100%)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Stats */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-fixed/60 mb-6">Outcomes — exceeding national benchmarks</p>
              <div className="space-y-5">
                {STANFORD_STATS.map(({ value, label }, i) => (
                  <div key={i} className={`${i < STANFORD_STATS.length - 1 ? 'pb-5 border-b border-white/10' : ''}`}>
                    <p className="font-display font-bold text-3xl text-primary-fixed/90 leading-none mb-1">{value}</p>
                    <p className="text-sm text-white/55 leading-snug font-light">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Innovations */}
            <div className="p-8 md:p-10">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-primary-fixed/60 mb-6">Innovative approaches</p>
              <div className="space-y-5">
                {STANFORD_INNOVATIONS.map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-peach/70 flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-semibold text-white/90 mb-1">{title}</p>
                      <p className="text-xs text-white/45 leading-relaxed font-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap mt-8">
                <a href={STANFORD_EXPECT_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold text-xs px-5 py-2.5 rounded-lg hover:-translate-y-0.5 transition-transform no-underline">
                  What to Expect at Stanford →
                </a>
                <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-white text-xs py-2.5 px-5">
                  Start Donor Screener →
                </a>
              </div>
            </div>
          </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── FAQSection ───────────────────────────────────────────
export function FAQSection() {
  return (
    <section id="d-faq" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="More Questions Answered" heading="Things people often want to know." />
        </RevealDiv>
        <RevealDiv className="mt-2 border-t border-border max-w-3xl">
          {FAQ_ITEMS.map(({ q, a }, i) => <AccordionItem key={i} question={q} answer={a} />)}
        </RevealDiv>
        <RevealDiv className="mt-8 text-center">
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            I'm Ready to Find Out If I Can Help →
          </a>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── ContactRegister ──────────────────────────────────────
export function ContactRegister() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };
  const bloodTypes = ['O+ (universal donor)', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  const connections = ['Family member', 'Friend', 'Colleague or acquaintance', 'Community member / no prior connection'];

  return (
    <section id="d-contact" className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Register Your Interest" heading="The first step is just a conversation." />
        </RevealDiv>
        <div className="max-w-3xl mt-2">
          {/* Left info */}
          <RevealDiv>
            <p className="text-sm text-ink-muted leading-relaxed font-light mb-4">There is no obligation and no pressure. Fill out the screener form and a coordinator will reach out privately to walk you through next steps — at your pace, on your terms.</p>
            <p className="text-sm text-ink-muted leading-relaxed font-light mb-6">Your information is kept completely separate from Mama Kim's family. You'll have your own coordinator, social worker, and Independent Donor Advocate from day one.</p>
            <div className="bg-surface-white rounded-xl p-5 border border-border mb-4">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-ink-faint mb-2">Direct Contact — Stanford Living Donor Program</p>
              <a href='tel:+16504988382' className="text-base font-semibold text-ink">📞 650-498-8382</a>
              <p className="text-xs text-ink-faint my-1 ">Monday-Friday, business hours</p>
            </div>
            <div className="bg-surface-white rounded-xl p-5 border border-border mb-4">
              <p className="text-xs font-bold tracking-[0.1em] uppercase text-ink-faint mb-2">KathLeen Taylor - Kim Nguyen's Transplant Nurse Coordinator</p>
              <a href='tel:+16507212783' className="text-base font-semibold text-ink">📞 650-721-2783</a>
              <p className="text-xs text-ink-faint mt-1">Monday-Friday, business hours</p>
            </div>
            <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mb-4">
              To Screener Form On Stanford Donor Portal →
            </a>
            <div className="bg-peach-light border border-peach-border rounded-xl p-4">
              <p className="text-xs text-ink-muted leading-relaxed font-light">
                <strong className="font-semibold text-secondary-600">Our promise:</strong> Your information is private and confidential. It will never be shared with Mama Kim's family. You can withdraw at any time, for any reason, with no follow-up pressure.
              </p>
            </div>
          </RevealDiv>

          {/* Right form */}
          {/* <RevealDiv delay={100} className="bg-surface-white rounded-2xl p-7 border border-border shadow-teal-md">
            <h3 className="font-display font-semibold text-xl mb-6 text-ink-DEFAULT">Express your interest</h3>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div><label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1.5">First name</label>
                <input type="text" placeholder="First name" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-ink-DEFAULT bg-surface-DEFAULT focus:outline-none focus:border-primary-DEFAULT focus:ring-1 focus:ring-primary-DEFAULT transition-colors" /></div>
              <div><label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1.5">Last name</label>
                <input type="text" placeholder="Last name" className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-ink-DEFAULT bg-surface-DEFAULT focus:outline-none focus:border-primary-DEFAULT focus:ring-1 focus:ring-primary-DEFAULT transition-colors" /></div>
            </div>
            {[
              { label: 'Email address', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone (optional)', type: 'tel', placeholder: '(   )   -    ' },
            ].map(({ label, type, placeholder }) => (
              <div key={label} className="mb-3">
                <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1.5">{label}</label>
                <input type={type} placeholder={placeholder} className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-ink-DEFAULT bg-surface-DEFAULT focus:outline-none focus:border-primary-DEFAULT focus:ring-1 focus:ring-primary-DEFAULT transition-colors" />
              </div>
            ))}
            {[
              { label: 'Blood type (if known)', opts: bloodTypes, def: "Not sure — that's okay" },
              { label: 'Your connection to Mama Kim', opts: connections, def: 'Prefer not to say' },
            ].map(({ label, opts, def }) => (
              <div key={label} className="mb-3">
                <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1.5">{label}</label>
                <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-ink-DEFAULT bg-surface-DEFAULT focus:outline-none focus:border-primary-DEFAULT focus:ring-1 focus:ring-primary-DEFAULT transition-colors">
                  <option value="">{def}</option>
                  {opts.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div className="mb-5">
              <label className="block text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1.5">Any questions or notes</label>
              <textarea placeholder="Questions, concerns, or anything that would help us support you…" rows={3}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-ink-DEFAULT bg-surface-DEFAULT focus:outline-none focus:border-primary-DEFAULT focus:ring-1 focus:ring-primary-DEFAULT transition-colors resize-y" />
            </div>
            <button onClick={handleSubmit}
              className={`btn-primary w-full justify-center ${submitted ? 'bg-sage-DEFAULT hover:bg-sage-DEFAULT' : ''}`}>
              {submitted ? '✓ Submitted — we\'ll be in touch' : 'Submit My Interest →'}
            </button>
            <p className="text-xs text-ink-faint text-center mt-3">🔒 Confidential · We respond within 24 hours</p>
          </RevealDiv> */}
          
          {/* quote: '"I feel so positive about this experience even though I was not able to donate directly to a loved one. In some ways it\'s better — I was able to help multiple people." — Josephine, kidney donor', */}
        </div>
      </div>
    </section>
  );
}

// ─── Donor Final CTA ──────────────────────────────────────
export function DonorCTA() {
  return (
    <CtaBanner
      heading="Mama Kim spent 20+ years cooking for others."
      subtext="One conversation. No obligation. The possibility of returning a life to the person who never stopped giving hers."
      buttons={[
        { label: 'Become Her Living Donor →', href: STANFORD_DONOR_URL },
        { label: 'What to Expect at Stanford', href: STANFORD_EXPECT_URL, ghost: true },
      ]}
    />
  );
}
