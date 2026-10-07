import { STANFORD_DONOR_URL, STANFORD_EXPECT_URL, STANFORD_DONATION_URL } from '../../data/content';

export function Footer() {
  return (
    <footer className="bg-ink text-white/50 py-10">
      <div className="max-w-container mx-auto px-8 md:px-16 text-center space-y-2">
        <p className="text-sm leading-relaxed">Medical information drawn from the <strong className="text-white/70">Stanford Health Care Living Donor Program</strong> brochure and clinical guidelines.</p>
        <p className="text-sm">
          <a href={STANFORD_DONOR_URL} target="_blank" rel="noopener noreferrer" className="text-primary-fixed-dim/60 underline hover:text-primary-fixed-dim">Stanford Donor Portal</a>
          {' · '}
          <a href={STANFORD_EXPECT_URL} target="_blank" rel="noopener noreferrer" className="text-primary-fixed-dim/60 underline hover:text-primary-fixed-dim">What to Expect</a>
          {' · '}
          <a href={STANFORD_DONATION_URL} target="_blank" rel="noopener noreferrer" className="text-primary-fixed-dim/60 underline hover:text-primary-fixed-dim">Kidney Donation Overview</a>
        </p>
        <p className="text-sm text-white/35 pt-2">Created with love by Mama Kim's family. All donor inquiries handled with complete confidentiality.</p>
      </div>
    </footer>
  );
}
