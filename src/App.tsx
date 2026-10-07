import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StoryPage } from './components/pages/StoryPage';
import { DonorPage } from './components/pages/DonorPage';
import './styles.css';

type Page = 'story' | 'donor';

export function App() {
  const [page, setPage] = useState<Page>('story');

  const goToPage = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface-DEFAULT font-body">
      <Navbar page={page} onPageChange={goToPage} />
      <main>
        {page === 'story'
          ? <StoryPage onDonorPage={() => goToPage('donor')} />
          : <DonorPage />
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
