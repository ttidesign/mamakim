import { Hero } from '../sections/story/Hero';
import { Journey, SilentBattle, ThenNow, Photos } from '../sections/story/NarrativeSections';
import { WhyAsking, QuickOverview, MythVsFact, StoryCTA } from '../sections/story/ActionSections';
import { CallToAction } from '../reuseable/CallToAction';
import { ContactRegister } from '../sections/donor/DonorSections';

interface StoryPageProps { onDonorPage: () => void; }

export function StoryPage({ onDonorPage }: StoryPageProps) {
  return (
    <>
      <Hero onDonorPage={onDonorPage} />
      <Journey />
      <SilentBattle />
     <div className='bg-surface-white pt-5'>
      <CallToAction
      variant="inline"
      heading="How You Can Help."
      subtext="Become her donor by filling out the screener and select Named Recipient for Kim Nguyen. Or simply by sharing her story to your group of family and friends, you help to increase the number of people who may consider kidney donation."
      classes="max-w-narrative mx-auto"
      buttons={[{ label: 'Start the screener →', onClick: () => window.open("https://www.stanfordhealthcarelivedonors.org/","_blank","noopener, noreferrer") }, {label: 'Share her story →', onClick: () => navigator.clipboard.writeText(window.location.href)}]}
      />

     </div>
      <ThenNow />
      <Photos />
      <WhyAsking onDonorPage={onDonorPage} />
      <QuickOverview onDonorPage={onDonorPage} />
      <MythVsFact />
      <ContactRegister />
      <StoryCTA onDonorPage={onDonorPage} />
    </>
  );
}
