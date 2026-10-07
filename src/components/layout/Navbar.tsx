import { STANFORD_DONOR_URL } from '../../data/content';

type Page = 'story' | 'donor';

const STORY_ANCHORS = [
  { label: 'Her Story', href: '#story-hero' },
  //{ label: 'Then & Now', href: '#then-now' },
  { label: "Why We're Asking", href: '#why' },
  { label: 'Can You Help?', href: '#overview' },
  { label: 'Myth vs. Fact', href: '#myths' },
];
const DONOR_ANCHORS = [
  { label: 'Requirements', href: '#d-who' },
  { label: 'Evaluation', href: '#d-eval' },
  { label: 'Paired Exchange', href: '#d-paired' },
  { label: 'After Donation', href: '#d-care' },
  // { label: 'Stanford', href: '#d-stanford' },
  { label: 'FAQ', href: '#d-faq' },
];

interface NavbarProps { page: Page; onPageChange: (p: Page) => void; }

export function Navbar({ page, onPageChange }: NavbarProps) {
  const anchors = page === 'story' ? STORY_ANCHORS : DONOR_ANCHORS;
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const switchPage = (p: Page) => { onPageChange(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <nav className="sticky top-0 z-50 bg-surface-DEFAULT/90 backdrop-blur-md border-b border-border h-16">
      <div className="max-w-container mx-auto px-5 md:px-16 h-full flex items-center justify-between gap-4">

        {/* Logo */}
        <button onClick={() => switchPage('story')}
          className="font-display font-bold text-primary text-lg whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex-shrink-0">
          Help Mama Kim
        </button>

        {/* Section anchors */}
        <div className="hidden lg:flex items-center overflow-hidden">
          {anchors.map(a => (
            <button key={a.href} onClick={() => scrollTo(a.href)}
              className="nav-tab whitespace-nowrap border-b-2 border-transparent">
              {a.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Page switcher */}
          <div className="sm:flex gap-1 p-1 bg-surface-low rounded-full border border-border">
            {(['story', 'donor'] as Page[]).map(p => (
              <button key={p} onClick={() => switchPage(p)}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer border-none
                  ${page === p ? 'bg-[#006480] text-white shadow-teal' : 'bg-transparent text-ink-muted hover:text-primary'}`}>
                {p === 'story' ? 'Her Story' : 'Donor Info'}
              </button>
            ))}
          </div>
          {/* CTA */}
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 hidden md:inline-flex">
            Become a Donor →
          </a>
        </div>
      </div>
    </nav>
  );
}
