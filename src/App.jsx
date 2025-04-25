import './App.css';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import NavbarWithDrawer from './components/NavbarWithDrawer';

function App() {

  return (
    <>
      <NavbarWithDrawer />
      <HeroSection />
      <ContactMethods />
      <ContactForm />
      <FooterSection />
    </>
  );
}

export default App;
