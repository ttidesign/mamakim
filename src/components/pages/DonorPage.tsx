import {
  DonorHero, WhoCanDonate, Crossmatch, EvaluationProcess,
  PairedExchange, AfterDonation, Testimonials, StanfordExpertise,
  FAQSection, ContactRegister, DonorCTA,
} from '../sections/donor/DonorSections';

export function DonorPage() {
  return (
    <>
      <DonorHero />
      <WhoCanDonate />
      <Crossmatch />
      <EvaluationProcess />
      <PairedExchange />
      <Testimonials />
      <AfterDonation />
      <StanfordExpertise />
      <FAQSection />
      <ContactRegister />
      <DonorCTA />
    </>
  );
}
