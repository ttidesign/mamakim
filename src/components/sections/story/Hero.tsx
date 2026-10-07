import { STANFORD_DONOR_URL } from '../../../data/content';
import mamakim3 from "../../../assets/mamakim3.jpg"
interface HeroProps { onDonorPage: () => void; }

export function Hero({ onDonorPage }: HeroProps) {
  const share = (platform: 'facebook' | 'twitter') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Help Mama Kim — a Vietnamese immigrant mother who needs a living kidney donor to get her life back. Please share her story.");
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Link copied! Share it anywhere to spread Mama Kim's story."))
      .catch(() => alert("Copy this link: " + window.location.href));
  };

  return (
    <div id="story-hero" className="grid grid-cols-1 md:grid-cols-[55%_45%]">

      {/* ── Left: story ── */}
      <div className="flex flex-col justify-center bg-surface-white px-8 md:px-16 py-20">
        <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-primary-DEFAULT mb-5
          after:content-[''] after:w-10 after:h-px after:bg-primary-DEFAULT/40">
          A Mother's Story
        </p>
        <h1 className="font-display font-bold text-5xl md:text-[4.2rem] xl:text-7xl leading-[1.08] text-ink-DEFAULT mb-2">
          For <em className="italic text-primary-DEFAULT">Mama Kim</em>
        </h1>
        <p className="font-display italic text-xl text-ink-muted mb-10">She gave us everything, but we can only hope...</p>

        {/* Stats */}
        <div className="flex gap-10 mb-10 flex-wrap">
          {[
            { v: '8 years +', l: 'Of waiting' },
            { v: '10 hours +', l: 'Daily dialysis' },
            { v: '0%', l: 'Kidney function' },
          ].map(({ v, l }) => (
            <div key={l}>
              <span className="block font-display font-bold text-4xl text-primary-DEFAULT leading-none">{v}</span>
              <span className="block text-xs font-semibold tracking-[0.1em] uppercase text-ink-muted mt-1">{l}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap mb-5">
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Help Mama Kim →
          </a>
          <button onClick={()=> window.open("https://kidney-survey.stanfordhealthcarelivedonors.org/shc-transplant-kidney/donor-prereq-1/dialogs/landing-page.stanford?&markers=survey.ljs.language:en&?ljs=en", "_blank", "noopener")} className="btn-outline">Become Her Living Donor</button>
        </div>

        {/* Share */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-faint font-medium">Share her story:</span>
          {[
            { label: 'f', title: 'Facebook', fn: () => share('facebook') },
            { label: '𝕏', title: 'X / Twitter', fn: () => share('twitter') },
            { label: '🔗', title: 'Copy link', fn: copyLink },
          ].map(({ label, title, fn }) => (
            <button key={title} title={title} onClick={fn}
              className="w-8 h-8 rounded-full border border-border bg-surface-white text-ink-muted text-sm
                flex items-center justify-center cursor-pointer transition-all hover:border-primary-DEFAULT hover:text-primary-DEFAULT hover:bg-primary-fixed">
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Right: dark panel ── */}
      <div className='bg-surface-white'>
        <img src={mamakim3} alt="mamakimpicture" />
      </div>
      {/* <div className="relative min-h-[420px] flex flex-col justify-end p-8 md:p-12 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #013d4e 0%, #006480 45%, #2d7d9a 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 25% 30%, #bce9ff, transparent 55%), radial-gradient(circle at 80% 80%, #fed9b8, transparent 50%)' }} />
        <div className="relative z-10 flex flex-col gap-3">
          {[
            { time: 'Before — 4:30 AM · Kitchen prep', title: 'She was always the first one in', body: 'Breakfast ready before her children woke. Lunch packed. Dinner simmering. Then a full shift in a commercial kitchen.', now: false },
            { time: 'Before — All day · On her feet', title: 'She chose kitchen work because she loved to cook', body: 'Every pot lifted, every dish prepared — with joy, even when shifts ran long and her feet ached.', now: false },
            { time: 'Now — Every Day · Dialysis, 10 hours', title: 'Her kitchen is now a bedroom', body: 'Tethered to a machine for 10 hours a day. The garlic, broth, fresh herbs — a distant memory she longs to return to.', now: true },
          ].map((card, i) => (
            <div key={i}>
              {i > 0 && <div className="text-center text-white/20 py-0.5 text-sm">↓</div>}
              <div className={`rounded-xl p-4 backdrop-blur-sm border
                ${card.now ? 'bg-peach-DEFAULT/10 border-peach-border' : 'bg-white/[0.07] border-white/[0.13]'}`}>
                <p className={`text-[11px] font-semibold tracking-[0.13em] uppercase mb-1 ${card.now ? 'text-peach-DEFAULT/90' : 'text-primary-fixed/80'}`}>{card.time}</p>
                <p className="text-sm font-medium text-white/95 mb-1">{card.title}</p>
                <p className="text-xs text-white/55 leading-relaxed font-light">{card.body}</p>
              </div>
            </div>
          ))}
          <div className="border-l-2 border-peach-DEFAULT pl-4 py-2 bg-peach-DEFAULT/8 rounded-r-xl mt-1">
            <p className="font-display italic text-sm text-white/82 leading-relaxed">
              "She never once said 'I'm tired.' Not to us, not to herself. Stopping felt like failing — even when her body was begging her to rest."
            </p>
            <cite className="text-xs text-white/38 font-normal not-italic mt-1 block">— Her daughter</cite>
          </div>
        </div>
      </div> */}
    </div>
  );
}
