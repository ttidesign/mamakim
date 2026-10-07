import type { ReactNode } from 'react';

// ─────────────────────────────────────────────────────────────
//  Shared types
// ─────────────────────────────────────────────────────────────

export interface CtaButton {
  label: string;
  icon?: string;           // Tabler icon name e.g. 'ti-heart'
  href?: string;           // renders as <a> when provided
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost-white';
}

// ─────────────────────────────────────────────────────────────
//  Internal button renderer
// ─────────────────────────────────────────────────────────────

function Btn({ btn, variantOverride }: { btn: CtaButton; variantOverride?: CtaButton['variant'] }) {
  const v = variantOverride ?? btn.variant ?? 'primary';

  const base = 'inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide cursor-pointer border-none font-body no-underline transition-all duration-200 px-5 py-2.5 rounded-lg whitespace-nowrap';

  const styles: Record<NonNullable<CtaButton['variant']>, string> = {
    primary:      `${base} bg-primary text-white hover:bg-primary-mid shadow-teal`,
    outline:      `${base} bg-transparent text-primary border border-primary hover:bg-primary/5`,
    'ghost-white': `${base} text-white hover:bg-white/25` ,
  };

  const ghostInline = v === 'ghost-white' ? { background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)' } : {};

  const content = (
    <>
      {btn.icon && <i className={`ti ${btn.icon}`} aria-hidden="true" />}
      {btn.label}
    </>
  );

  if (btn.href) {
    return (
      <a href={btn.href} target="_blank" rel="noopener noreferrer" className={styles[v]} style={ghostInline}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={btn.onClick} className={styles[v]} style={ghostInline}>
      {content}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
//  Variant 1 — Banner
//  Full-width, dark gradient background. Use between major
//  page sections as a hard stop / emotional climax.
//
//  Usage:
//  <CallToAction
//    variant="banner"
//    heading="Mama Kim spent 30 years cooking for others."
//    emphasis="Help her get back to her kitchen."
//    subtext="One conversation. No obligation."
//    buttons={[
//      { label: 'Become a Living Donor →', href: STANFORD_URL, icon: 'ti-heart' },
//      { label: 'Share Her Story', onClick: copyLink, variant: 'ghost-white', icon: 'ti-share' },
//    ]}
//  />
// ─────────────────────────────────────────────────────────────

interface BannerProps {
  heading: string;
  emphasis?: string;
  subtext?: string;
  buttons?: CtaButton[];
  classes?: string;
}

function Banner({ heading, emphasis, subtext, buttons }: BannerProps) {
  return (
    <div
      className="relative py-20 text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #013d4e 0%, #006480 60%, #2d7d9a 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(ellipse at 25% 50%, #bce9ff, transparent 60%), radial-gradient(ellipse at 80% 50%, #fed9b8, transparent 55%)',
        }}
      />
      <div className="relative z-10 max-w-narrative mx-auto px-8">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-3">
          {heading}
          {emphasis && (
            <>
              <br />
              <em className="italic">{emphasis}</em>
            </>
          )}
        </h2>
        {subtext && (
          <p className="text-white/65 text-base leading-relaxed font-light mb-8 max-w-md mx-auto">
            {subtext}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex gap-2.5 justify-center flex-wrap">
            {buttons.map((btn, i) => <Btn key={i} btn={btn} />)}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Variant 2 — Inline
//  Horizontal card: text on the left, buttons on the right.
//  Use inside a narrative section to intercept the reader
//  mid-scroll without a full-page break.
//
//  Usage:
//  <CallToAction
//    variant="inline"
//    heading="You might be a match — even if you don't think so."
//    subtext="Wrong blood type? Still in the program. It starts with a 30-minute call."
//    buttons={[
//      { label: 'Start Screener', href: STANFORD_URL, icon: 'ti-arrow-right' },
//      { label: 'Learn more', onClick: () => goToDonorPage(), variant: 'outline' },
//    ]}
//  />
// ─────────────────────────────────────────────────────────────

function Inline({ heading, subtext, buttons, classes }: BannerProps) {
  return (
    <div className={classes}>
    <div className="bg-surface-primary/90 border border-border rounded-xl p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-teal">
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-bold text-xl text-ink leading-snug mb-2">{heading}</h3>
        {subtext && <p className="text-sm text-ink-muted leading-relaxed font-light max-w-md">{subtext}</p>}
      </div>
      {buttons && buttons.length > 0 && (
        <div className="flex gap-2 flex-shrink-0 flex-wrap">
          {buttons.map((btn, i) => <Btn key={i} btn={btn} />)}
        </div>
      )}
    </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Variant 3 — Cards
//  2-column grid, each card has an icon, heading, body, button.
//  Use when you have two distinct actions (donate vs. share).
//
//  Usage:
//  <CallToAction
//    variant="cards"
//    cards={[
//      { icon: 'ti-stethoscope', heading: 'See if you qualify', body: "Stanford's screener takes 5 minutes.", button: { label: 'Start →', href: STANFORD_URL } },
//      { icon: 'ti-share', heading: 'Share her story', body: 'Someone in your network might be her match.', button: { label: 'Copy link', onClick: copyLink }, accentColor: 'peach' },
//    ]}
//  />
// ─────────────────────────────────────────────────────────────

interface CardDef {
  icon: string;
  heading: string;
  body: string;
  button: CtaButton;
  accentColor?: 'teal' | 'peach' | 'sage';
}

const accentMap: Record<string, string> = {
  teal:  'bg-primary',
  peach: 'bg-peach',
  sage:  'bg-sage',
};

function Cards({ cards }: { cards: CardDef[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {cards.map(({ icon, heading, body, button, accentColor = 'teal' }, i) => (
        <div key={i} className="bg-surface-white border border-border rounded-xl p-6 relative overflow-hidden shadow-teal">
          <div className={`absolute top-0 left-0 right-0 h-[3px] ${accentMap[accentColor]}`} />
          <i className={`ti ${icon} text-2xl text-primary mb-3 block`} aria-hidden="true" />
          <h3 className="font-display font-bold text-lg text-ink mb-2">{heading}</h3>
          <p className="text-sm text-ink-muted leading-relaxed font-light mb-5">{body}</p>
          <Btn btn={button} />
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Variant 4 — Strip
//  A quiet, low-friction nudge. Light tinted background,
//  icon + one-liner text + single button. Use inline inside
//  a content-dense section where a full banner would be too
//  heavy — e.g. after explaining crossmatching.
//
//  Usage:
//  <CallToAction
//    variant="strip"
//    icon="ti-info-circle"
//    heading="Not a direct match? You can still help."
//    subtext="Paired exchange means your kidney can still get Mama Kim a transplant."
//    buttons={[{ label: 'How it works →', onClick: () => goToDonorPage() }]}
//  />
// ─────────────────────────────────────────────────────────────

interface StripProps {
  icon?: string;
  heading: string;
  subtext?: string;
  buttons?: CtaButton[];
}

function Strip({ icon = 'ti-info-circle', heading, subtext, buttons }: StripProps) {
  return (
    <div
      className="flex items-center justify-between gap-5 py-6 px-8 flex-wrap"
      style={{
        background: 'rgba(188,233,255,0.18)',
        borderTop: '1px solid rgba(0,100,128,0.12)',
        borderBottom: '1px solid rgba(0,100,128,0.12)',
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <i className={`ti ${icon} text-white text-lg`} aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{heading}</p>
          {subtext && <p className="text-xs text-ink-muted font-light mt-0.5">{subtext}</p>}
        </div>
      </div>
      {buttons && buttons.length > 0 && (
        <div className="flex gap-2 flex-shrink-0">
          {buttons.map((btn, i) => <Btn key={i} btn={btn} />)}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Variant 5 — Quote
//  A pull-quote with a CTA appended. Perfect for emotional
//  pauses after testimony or family quotes — keeps the reader
//  in the story while prompting action.
//
//  Usage:
//  <CallToAction
//    variant="quote"
//    quote='"She never once said she was tired." — Her daughter'
//    cite="— Her daughter"
//    heading="Her story deserves to be heard."
//    buttons={[
//      { label: 'Become a Donor', href: STANFORD_URL, icon: 'ti-heart' },
//      { label: 'Share', onClick: copyLink, variant: 'outline', icon: 'ti-share' },
//    ]}
//  />
// ─────────────────────────────────────────────────────────────

interface QuoteProps {
  quote: string;
  cite?: string;
  buttons?: CtaButton[];
  children?: ReactNode;
}

function Quote({ quote, cite, buttons, children }: QuoteProps) {
  return (
    <div
      className="rounded-r-xl py-7 px-8"
      style={{
        borderLeft: '4px solid #fed9b8',
        background: 'rgba(254,217,184,0.12)',
      }}
    >
      <blockquote className="font-display italic text-xl text-ink leading-relaxed mb-5">
        {quote}
      </blockquote>
      {children}
      <div className="flex items-center justify-between flex-wrap gap-3">
        {cite && <cite className="text-sm text-ink-muted not-italic font-light">{cite}</cite>}
        {buttons && buttons.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {buttons.map((btn, i) => <Btn key={i} btn={btn} />)}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  Main export — <CallToAction variant="..." ... />
// ─────────────────────────────────────────────────────────────

type CallToActionProps =
  | ({ variant: 'banner' }   & BannerProps)
  | ({ variant: 'inline' }   & BannerProps)
  | ({ variant: 'cards'  }   & { cards: CardDef[] })
  | ({ variant: 'strip'  }   & StripProps)
  | ({ variant: 'quote'  }   & QuoteProps);

export function CallToAction(props: CallToActionProps) {
  switch (props.variant) {
    case 'banner': return <Banner {...props} />;
    case 'inline': return <Inline {...props} />;
    case 'cards':  return <Cards  cards={props.cards} />;
    case 'strip':  return <Strip  {...props} />;
    case 'quote':  return <Quote  {...props} />;
  }
}
