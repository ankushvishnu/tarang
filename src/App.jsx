import './styles/global.css';
import COLORS from './constants/colors';

import FloatingNotes   from './components/FloatingNotes';
import Navbar          from './components/Navbar';
import Footer          from './components/Footer';

import HeroSection     from './sections/HeroSection';
import AboutSection    from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import BrandsSection   from './sections/BrandsSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection  from './sections/ContactSection';

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${COLORS.lavenderLight} 0%, ${COLORS.lavenderSoft} 50%, rgba(209,200,243,0.7) 100%)`,
      fontFamily: "system-ui, sans-serif",
      position: "relative",
      overflowX: "hidden",
    }}>
      <FloatingNotes />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BrandsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
