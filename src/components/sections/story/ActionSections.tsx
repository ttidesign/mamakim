import { RevealDiv, SectionHeader, CtaBanner } from '../../ui/index';
import { MYTHS, STANFORD_DONOR_URL } from '../../../data/content';

// ─── WhyAsking ────────────────────────────────────────────
interface WhyAskingProps { onDonorPage: () => void; }
export function WhyAsking({ onDonorPage }: WhyAskingProps) {
  const lifeItems = [
    { icon: '1', text: 'Cook for her family again' },
    { icon: '2', text: 'Regain energy & appetite' },
    { icon: '3', text: 'Hold her grandchildren' },
    { icon: '4', text: 'Leave the bedroom behind' },
    { icon: '5', text: 'Finally be cared for' },
  ];
  return (
    <section id="why" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv className="max-w-narrative mx-auto">
          <SectionHeader label="Why We're Asking" heading="A kidney transplant is her path back to life — and back to the kitchen she loves." />
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            This page exists because her family is asking on her behalf. Her children, who would give anything to help, cannot be donors themselves — each is fighting their own illness. This time, love alone isn't enough.
          </p>
          <p className="text-lg text-ink-muted leading-[1.85] mb-4 font-light">
            She doesn't dream of luxury. She dreams of sitting at her own kitchen table again. Of chopping vegetables, stirring broth, filling the house with the smells that meant safety to her children. She dreams of cooking for her grandchildren — the ones she hasn't yet had the strength to hold properly.
          </p>
          <p className="text-lg text-ink-muted leading-[1.85] mb-8 font-light">
            A functioning kidney won't just extend her life. It will give her life back — the warmth, the motion, the purpose that dialysis has taken from the woman who spent thirty years giving everything to others.
          </p>
          <div className="bg-gradient-to-br from-primary-DEFAULT/5 to-primary-fixed/20 border border-primary-DEFAULT/12 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="font-display font-bold text-2xl mb-3 text-ink-DEFAULT">What a kidney transplant means for her</h3>
            <p className="text-sm text-ink-muted max-w-md mx-auto mb-8 leading-relaxed font-light">
              Freedom from dialysis. Return to energy and appetite. The chance to cook again, move again, live again — on her own terms.
            </p>
            <div className="flex justify-center gap-6 md:gap-10 flex-wrap mb-8">
              {lifeItems.map(({icon, text }) => (
                <div key={text} className="text-center">
                  <div className="text-2xl mb-1.5">{icon}</div>
                  <p className="text-xs font-medium text-ink-muted max-w-[80px] leading-snug">{text}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">See If I Can Help →</a>
              <button onClick={onDonorPage} className="btn-peach">Learn About Donation</button>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}

// ─── QuickOverview ────────────────────────────────────────
interface OverviewProps { onDonorPage: () => void; }
export function QuickOverview({ onDonorPage }: OverviewProps) {
  const who = [
    'Age 18 or older, any background',
    'Generally good health — no active diabetes, heart disease, HIV, or hepatitis',
    'BMI under 30 for surgical safety',
    'Freely willing — no pressure or financial motive',
    'Compatible blood type or willing to participate in paired exchange',
    'Family, friend, acquaintance, or compassionate stranger — all welcome',
  ];
  const steps = [
    'Phone screening — 30-minute call, no commitment',
    'Psychosocial evaluation — ensuring the decision is fully yours',
    'Medical evaluation — blood, urine, X-ray, EKG, crossmatch test',
    'Surgical evaluation — ultrasound & CT scan of your kidneys',
  ];
  return (
    <section id="overview" className="py-20 bg-surface-low">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Quick Overview" heading="Could you be the one?" 
          subtext={<>
          You don't need to be family. You don't even need to be a perfect match. Full details are on the <span className="text-primary underline hover:text-primary-dark cursor-pointer" onClick={onDonorPage}>Donor Info Page.
            </span></>}/>
        </RevealDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {[
            { title: 'Who can be a donor', items: who, cta: <button onClick={onDonorPage} className="btn-outline text-xs mt-5">Full requirements →</button>, markerClass: 'bg-primary-fixed' },
            {
              title: 'The 4-step evaluation process', items: steps,
              cta: <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs mt-5">Start the screener →</a>,
              markerClass: 'bg-peach',
              note: "You can stop at any point, for any reason. Medical costs are covered by the recipient's insurance.",
            },
          ].map(({ title, items, cta, markerClass, note }) => (
            <RevealDiv key={title} className="bg-surface-white rounded-xl p-6 md:p-7 shadow-teal border border-border">
              <h3 className="font-semibold text-lg mb-5 text-ink-DEFAULT">{title}</h3>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted leading-snug font-light">
                    <span className={`w-[18px] h-[18px] rounded-full ${markerClass} flex-shrink-0 mt-0.5`} />
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-ink-DEFAULT">$1</strong>') }} />
                  </li>
                ))}
              </ul>
              {note && <p className="text-xs text-ink-faint mt-4 leading-relaxed font-light">{note}</p>}
              {cta}
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MythVsFact ───────────────────────────────────────────
export function MythVsFact() {
  return (
    <section id="myths" className="py-20 bg-surface-white">
      <div className="max-w-container mx-auto px-8 md:px-16">
        <RevealDiv>
          <SectionHeader label="Myth vs. Fact" heading="What's holding you back? Let's clear it up."
            subtext="Most people who could help never reach out because of common misconceptions. Here are the ones we hear most." />
        </RevealDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {MYTHS.map(({ myth, mythDetail, fact, factDetail }, i) => (
            <>
              <RevealDiv key={`myth-${i}`} delay={i * 60}
                className="rounded-xl p-5 md:p-6 bg-err-light border border-err-border">
                <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-0.5 rounded-full bg-err-DEFAULT/12 text-err-DEFAULT mb-3">Myth</span>
                <p className="text-sm font-semibold text-ink-DEFAULT mb-2 leading-snug">{myth}</p>
                <p className="text-xs text-ink-muted leading-relaxed font-light">{mythDetail}</p>
              </RevealDiv>
              <RevealDiv key={`fact-${i}`} delay={i * 60 + 40}
                className="rounded-xl p-5 md:p-6 bg-sage-soft border border-sage-border">
                <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase px-2.5 py-0.5 rounded-full bg-sage-DEFAULT/12 text-sage-DEFAULT mb-3">Fact</span>
                <p className="text-sm font-semibold text-ink-DEFAULT mb-2 leading-snug">{fact}</p>
                <p className="text-xs text-ink-muted leading-relaxed font-light">{factDetail}</p>
              </RevealDiv>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Story Final CTA ──────────────────────────────────────
interface StoryCTAProps { onDonorPage: () => void; }
export function StoryCTA({ onDonorPage }: StoryCTAProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => alert("Link copied!"));
  };
  return (
    <CtaBanner
      heading="Mama Kim spent 20+ years cooking for others."
      emphasis="Help her get back to her kitchen."
      subtext="One conversation. No obligation. The possibility of returning a life to the person who never stopped giving hers."
      buttons={[
        { label: 'Become Her Living Donor →', href: STANFORD_DONOR_URL },
        { label: 'Learn More About Donation', onClick: onDonorPage, ghost: true },
        { label: '🔗 Share Her Story', onClick: copyLink, ghost: true },
      ]}
    />
  );
}
