import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Grün & Stein
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-text' : 'text-white'
                } ${location.pathname === link.path ? 'text-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="tel:05661920746"
              className={`flex items-center gap-2 font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <Phone size={20} />
              <span>05661 920746</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <nav className="flex flex-col items-center gap-8 text-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:05661920746"
              className="mt-8 flex items-center gap-2 text-primary font-medium"
            >
              <Phone size={24} />
              <span>05661 920746</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 pb-8">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-serif text-2xl font-bold text-white mb-4 block">
              Grün & Stein
            </span>
            <p className="text-gray-400 font-light max-w-xs">
              Ihr Meisterbetrieb für individuelle Gartengestaltung in Nordhessen. Qualität, die für sich spricht.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span>Bachstraße 7<br />34212 Melsungen (OT Röhrenfurth)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:05661920746" className="hover:text-white transition-colors">05661 920746</a>
                  <a href="tel:01709065914" className="hover:text-white transition-colors">0170 9065914</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <a href="mailto:info@gruen-und-stein.de" className="hover:text-white transition-colors">info@gruen-und-stein.de</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Öffnungszeiten</h4>
            <div className="bg-[#2A2A2A] p-6 rounded-[2px] border-l-4 border-primary">
              <p className="text-gray-300 font-light mb-2">Montag – Freitag</p>
              <p className="text-white font-medium text-lg mb-4">06:00 – 18:00 Uhr</p>
              <p className="text-accent text-sm font-medium uppercase tracking-wider">
                Termine nur nach telefonischer Absprache
              </p>
            </div>
          </div>
        </div>
        
        <div className="container-custom border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grün und Stein Gartengestaltung. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 hover:bg-[#1a2e0a] hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
