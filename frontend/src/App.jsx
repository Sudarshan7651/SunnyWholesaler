import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import WhatsAppIcon from './components/common/WhatsAppIcon';
import { businessInfo } from './data/siteContent';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-content">
        <HomePage />
      </main>

      <Footer />
      <a className="mobile-whatsapp-bar" href={businessInfo.whatsapp} target="_blank" rel="noreferrer">
        <WhatsAppIcon /> Chat on WhatsApp
      </a>
    </div>
  );
}

export default App;
