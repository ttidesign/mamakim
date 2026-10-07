import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import {ReactNode} from 'react'

// ─── SectionHeader ────────────────────────────────────────
interface SectionHeaderProps {
  label: string;
  heading: string;
  subtext?: ReactNode;
  light?: boolean;
  className?: string;
}
export function SectionHeader({ label, heading, subtext, light, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <p className={light ? 'section-label-light' : 'section-label'}>{label}</p>
      <h2 className={`font-display font-bold text-3xl md:text-4xl leading-tight mb-0 ${light ? 'text-white' : 'text-ink'}`}>
        {heading}
      </h2>
      <div className="divider-accent" />
      {subtext && (
        <p className={`text-base leading-relaxed max-w-2xl font-light ${light ? 'text-white/70' : 'text-ink-muted'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}

// ─── RevealDiv ────────────────────────────────────────────
export function RevealDiv({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── CtaBanner ────────────────────────────────────────────
interface BannerBtn { label: string; href?: string; onClick?: () => void; ghost?: boolean; }
interface CtaBannerProps { heading: string; emphasis?: string; subtext: string; buttons: BannerBtn[]; }
export function CtaBanner({ heading, emphasis, subtext, buttons }: CtaBannerProps) {
  return (
    <div className="relative py-20 text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #013d4e 0%, #006480 60%, #2d7d9a 100%)' }}>
      <div className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,white_20px,white_21px)]" />
      <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at 30% 50%, #bce9ff, transparent 60%), radial-gradient(ellipse at 80% 50%, #fed9b8, transparent 50%)' }} />
      <div className="relative z-10 max-w-container mx-auto px-8 md:px-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-3">
          {heading}{emphasis && <><br /><em className="italic">{emphasis}</em></>}
        </h2>
        <p className="text-white/70 text-base max-w-lg mx-auto mb-8 leading-relaxed font-light">{subtext}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          {buttons.map((btn, i) =>
            btn.href ? (
              <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer"
                className={btn.ghost ? 'btn-ghost-white' : 'inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-7 py-3 rounded-lg shadow-teal-md hover:-translate-y-0.5 transition-transform no-underline'}>
                {btn.label}
              </a>
            ) : (
              <button key={i} onClick={btn.onClick}
                className={btn.ghost ? 'btn-ghost-white' : 'inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-7 py-3 rounded-lg shadow-teal-md hover:-translate-y-0.5 transition-transform border-none cursor-pointer'}>
                {btn.label}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// ─── AccordionItem ────────────────────────────────────────
interface AccordionItemProps { question: string; answer: string; }
export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)}
        className="w-full bg-transparent border-none text-left py-5 flex justify-between items-center gap-4 cursor-pointer font-body">
        <span className={`text-sm font-semibold leading-snug transition-colors ${open ? 'text-primary' : 'text-ink'}`}>{question}</span>
        <span className={`w-6 h-6 rounded-full border-[1.5px] flex items-center justify-center text-base flex-shrink-0 transition-all duration-200
          ${open ? 'border-primary text-primary rotate-45' : 'border-border text-ink-muted'}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-5 text-sm text-ink-muted leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
}

// ─── EvalAccordion ────────────────────────────────────────
interface EvalStep { title: string; tag: string; body: string; }
export function EvalAccordion({ steps }: { steps: EvalStep[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step, i) => (
        <div key={i}
          className={`bg-surface-white rounded-lg border overflow-hidden shadow-teal transition-colors ${open === i ? 'border-primary/30' : 'border-border'}`}>
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full bg-transparent border-none text-left p-5 flex items-center gap-4 cursor-pointer">
            <span className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-display font-bold text-base transition-colors
              ${open === i ? 'bg-primary text-white' : 'bg-primary-fixed text-primary'}`}>{i + 1}</span>
            <span className="flex-1 text-sm font-semibold text-ink">{step.title}</span>
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-surface-low text-ink-faint hidden sm:block">{step.tag}</span>
            <span className={`text-ink-muted text-sm transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}>▾</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-64' : 'max-h-0'}`}>
            <p className="px-5 pb-5 pl-[72px] text-sm text-ink-muted leading-relaxed font-light">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
