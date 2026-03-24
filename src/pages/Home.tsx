import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Leaf, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  const services = [
    {
      title: 'Pflanzenarbeit',
      desc: 'Von der Auswahl bis zur Pflege. Wir schaffen grüne Oasen, die das ganze Jahr blühen.',
      icon: <Leaf size={24} className="text-primary mb-4" />,
      link: '/leistungen/pflanzenarbeit'
    },
    {
      title: 'Teicharbeiten',
      desc: 'Naturnahe Wasserwelten mit ökologischer Verantwortung. Jeder Teich ein Unikat.',
      icon: <div className="text-primary mb-4 text-2xl">💧</div>,
      link: '/leistungen/teicharbeiten'
    },
    {
      title: 'Wegebau & Pflasterarbeiten',
      desc: 'Präzise verlegte Wege und Terrassen aus Naturstein, Pflaster oder Beton.',
      icon: <div className="text-primary mb-4 text-2xl">🧱</div>,
      link: '/leistungen/wegebau'
    },
    {
      title: 'Holzbau',
      desc: 'Pergolen, Terrassen, Sichtschutzelemente – handwerklich gefertigt für Langlebigkeit.',
      icon: <div className="text-primary mb-4 text-2xl">🪵</div>,
      link: '/leistungen/holzbau'
    },
    {
      title: 'Mauerarbeiten',
      desc: 'Hangabfangungen, Natursteinmauern, Trockenmauern – standhaft und ästhetisch.',
      icon: <div className="text-primary mb-4 text-2xl">🧱</div>,
      link: '/leistungen/mauerarbeiten'
    }
  ];

  const portfolioPreviews = [
    { title: 'Natursteinmauer mit Beet', category: 'Mauern', gradient: 'from-[#2D5016] to-[#1a2e0a]' },
    { title: 'Holzterrasse mit Sprudelstein', category: 'Holzbau', gradient: 'from-[#8B6914] to-[#4a380a]' },
    { title: 'Wegebau & Pflasterung', category: 'Pflasterung', gradient: 'from-[#4a7a25] to-[#2D5016]' },
    { title: 'Teichanlagen', category: 'Teiche', gradient: 'from-[#1a2e0a] to-[#0d1705]' },
    { title: 'Vorgarten Gestaltung', category: 'Pflanzenarbeit', gradient: 'from-[#2D5016] to-[#8B6914]' },
    { title: 'Hangabfangung', category: 'Mauern', gradient: 'from-[#4a380a] to-[#1a2e0a]' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Gradient Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e0a] via-[#2D5016] to-[#4a7a25] z-0"></div>
        <div className="absolute inset-0 bg-black/45 z-10"></div>

        <div className="container-custom relative z-20 text-white w-full">
          <div className="flex items-center gap-4 mb-6 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <div className="w-10 h-[2px] bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase">Garten- und Landschaftsbau · Melsungen</span>
          </div>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-6 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
            Ihr Traumgarten.<br />Unsere Leidenschaft.
          </h1>

          <p className="font-sans font-light text-white/80 text-lg md:text-xl max-w-[560px] mb-10 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards] opacity-0">
            Seit über 20 Jahren gestalten wir individuelle Privatgärten in Nordhessen. Planung, Gestaltung und Pflege aus einer Hand – von Meisterhand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards] opacity-0">
            <Link to="/kontakt" className="btn btn-primary">Jetzt anfragen</Link>
            <Link to="/portfolio" className="btn btn-secondary-white">Portfolio ansehen</Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium tracking-wide animate-[fadeInUp_0.6s_ease-out_0.8s_forwards] opacity-0">
            <span>20+ Jahre Erfahrung</span>
            <div className="w-[1px] h-4 bg-white/30 hidden sm:block"></div>
            <span>30 km Radius</span>
            <div className="w-[1px] h-4 bg-white/30 hidden sm:block"></div>
            <span>100+ Projekte</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-neutral py-16 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            <div className="reveal-on-scroll flex flex-col items-center text-center md:border-r border-border md:pr-8">
              <ShieldCheck size={40} className="text-primary mb-6 stroke-1" />
              <h3 className="font-sans font-medium text-xl mb-3">Meisterbetrieb</h3>
              <p className="font-sans font-light text-sm text-gray-600 max-w-xs">
                Geführt von einem Meister im Garten- und Landschaftsbau mit 20+ Jahren Erfahrung.
              </p>
            </div>
            
            <div className="reveal-on-scroll flex flex-col items-center text-center md:border-r border-border md:px-8" style={{ transitionDelay: '0.1s' }}>
              <Leaf size={40} className="text-primary mb-6 stroke-1" />
              <h3 className="font-sans font-medium text-xl mb-3">Alles aus einer Hand</h3>
              <p className="font-sans font-light text-sm text-gray-600 max-w-xs">
                Von Pflanzenarbeit bis Pflasterung – wir decken jeden Aspekt Ihres Gartens ab.
              </p>
            </div>
            
            <div className="reveal-on-scroll flex flex-col items-center text-center md:pl-8" style={{ transitionDelay: '0.2s' }}>
              <MapPin size={40} className="text-primary mb-6 stroke-1" />
              <h3 className="font-sans font-medium text-xl mb-3">Regional verwurzelt</h3>
              <p className="font-sans font-light text-sm text-gray-600 max-w-xs">
                Wir arbeiten im Umkreis von 30 km um Melsungen – für persönliche Betreuung vor Ort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Unsere Leistungen</h2>
            <p className="font-sans text-gray-600 text-lg max-w-2xl">
              Vom ersten Entwurf bis zur fertigen Anlage – Gartengestaltung in allen Facetten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white border border-border rounded-[2px] p-8 relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 reveal-on-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary transition-colors duration-300 group-hover:bg-accent"></div>
                {service.icon}
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="font-sans font-light text-gray-600 mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors mt-auto"
                >
                  Mehr erfahren <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Unsere Arbeiten</h2>
            <p className="font-sans text-accent text-lg">
              Qualität, die für sich spricht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioPreviews.map((item, index) => (
              <div 
                key={index} 
                className="group relative aspect-[4/3] rounded-[2px] overflow-hidden cursor-pointer reveal-on-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}></div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal-on-scroll">
            <Link to="/portfolio" className="btn btn-secondary-white">Zum Portfolio</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016] to-[#1a2e0a] z-0"></div>
        
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay z-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
        
        <div className="container-custom relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left reveal-on-scroll">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Bereit für Ihren neuen Garten?</h2>
              <p className="font-sans font-light text-white/80 text-lg max-w-lg mx-auto lg:mx-0">
                Wir beraten Sie kostenlos und unverbindlich. Rufen Sie uns an oder schicken Sie uns eine Nachricht.
              </p>
            </div>
            
            <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end w-full reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <a href="tel:05661920746" className="btn bg-white text-primary hover:bg-neutral w-full sm:w-auto">
                📞 05661 920746
              </a>
              <Link to="/kontakt" className="btn btn-secondary-white w-full sm:w-auto">
                Kontaktformular <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
