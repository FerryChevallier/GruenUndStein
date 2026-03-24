import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

export default function About() {
  useScrollReveal();
  useCounterAnimation();

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e0a] via-[#2D5016] to-[#4a7a25] z-0"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="container-custom relative z-20 text-white w-full text-center mt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Über uns
          </h1>
          <div className="font-sans font-light text-white/80 text-sm tracking-wider uppercase animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Über uns</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full reveal-on-scroll">
              <div className="aspect-[2/3] w-full bg-gradient-to-br from-[#2D5016] to-[#4a7a25] rounded-[2px] shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Placeholder for team/founder photo */}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <span className="text-accent text-xs font-bold uppercase tracking-wider mb-4 block">Unser Unternehmen</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Das Team von Grün und Stein</h2>
              
              <div className="space-y-6 font-sans text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  Seit über 20 Jahren sind wir Ihr erfahrener Partner für die Planung, Gestaltung und Pflege hochwertiger Privatgärten in Nordhessen. Unser Betrieb wird von einem Meister im Garten- und Landschaftsbau geführt – mit Leidenschaft für Pflanzen, Stein und die Menschen hinter jedem Gartenprojekt.
                </p>
                <p>
                  Als mittelgroßer Fachbetrieb mit Standort in Melsungen (OT Röhrenfurth) bedienen wir Kunden in einem Radius von 30 km – persönlich, verlässlich und mit dem Anspruch, jede Vision in die Realität umzusetzen.
                </p>
              </div>
              
              <Link to="/leistungen" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors mt-10">
                Unsere Leistungen entdecken <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral py-20 border-y border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-12 text-center reveal-on-scroll">
            <div>
              <div className="flex items-baseline justify-center mb-2">
                <span className="font-serif text-6xl text-primary font-bold" data-counter="20">0</span>
                <span className="font-serif text-4xl text-primary font-bold ml-1">+</span>
              </div>
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-gray-600">Jahre Erfahrung</span>
            </div>
            
            <div className="w-[1px] h-20 bg-border hidden md:block"></div>
            
            <div>
              <div className="flex items-baseline justify-center mb-2">
                <span className="font-serif text-6xl text-primary font-bold" data-counter="30">0</span>
                <span className="font-serif text-4xl text-primary font-bold ml-2">km</span>
              </div>
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-gray-600">Einzugsgebiet</span>
            </div>
            
            <div className="w-[1px] h-20 bg-border hidden md:block"></div>
            
            <div>
              <div className="flex items-baseline justify-center mb-2">
                <span className="font-serif text-6xl text-primary font-bold" data-counter="100">0</span>
                <span className="font-serif text-4xl text-primary font-bold ml-1">+</span>
              </div>
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-gray-600">Projekte</span>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-[760px] mx-auto text-center reveal-on-scroll">
            <span className="text-accent text-xs font-bold uppercase tracking-wider mb-4 block">Seit über 20 Jahren</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Wurzeln in Nordhessen</h2>
            <p className="font-sans text-gray-600 font-light text-xl leading-relaxed">
              Gegründet von einem leidenschaftlichen Garten- und Landschaftsbau-Meister, hat sich Grün und Stein zu einem der verlässlichsten Fachbetriebe der Region entwickelt. Unsere Vision war von Anfang an klar: individuelle Privatgärten zu schaffen, die nicht nur ästhetisch begeistern, sondern auch die Persönlichkeit und Bedürfnisse unserer Kunden widerspiegeln.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal-on-scroll p-8 bg-[#EDF3E8] rounded-[2px] border-t-4 border-primary">
              <span className="font-serif text-6xl text-primary/20 font-bold block mb-4">01</span>
              <h3 className="font-serif text-2xl mb-4 text-primary">Qualität</h3>
              <p className="font-sans font-light text-gray-700 leading-relaxed">
                Von der Materialauswahl bis zur letzten Pflanzung – wir setzen auf Handwerkskunst, die überdauert.
              </p>
            </div>
            
            <div className="reveal-on-scroll p-8 bg-[#EDF3E8] rounded-[2px] border-t-4 border-primary" style={{ transitionDelay: '0.1s' }}>
              <span className="font-serif text-6xl text-primary/20 font-bold block mb-4">02</span>
              <h3 className="font-serif text-2xl mb-4 text-primary">Innovation</h3>
              <p className="font-sans font-light text-gray-700 leading-relaxed">
                Wir suchen stets nach neuen Lösungen und aktuellen Designansätzen, um Erwartungen zu übertreffen.
              </p>
            </div>
            
            <div className="reveal-on-scroll p-8 bg-[#EDF3E8] rounded-[2px] border-t-4 border-primary" style={{ transitionDelay: '0.2s' }}>
              <span className="font-serif text-6xl text-primary/20 font-bold block mb-4">03</span>
              <h3 className="font-serif text-2xl mb-4 text-primary">Kundenzufriedenheit</h3>
              <p className="font-sans font-light text-gray-700 leading-relaxed">
                Enge Zusammenarbeit und offene Kommunikation sind der Schlüssel zu jedem erfolgreichen Projekt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Area Served Section */}
      <section className="section-padding bg-neutral border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 reveal-on-scroll">
              <h2 className="font-serif text-4xl mb-6">Einzugsgebiet</h2>
              <p className="font-sans text-gray-600 font-light text-lg leading-relaxed mb-8">
                Unser Wirkungsbereich konzentriert sich auf Nordhessen – insbesondere Melsungen und einen Umkreis von 30 km. Das erlaubt uns, persönlich vor Ort zu sein und unsere Kunden individuell zu betreuen.
              </p>
              <ul className="space-y-3 font-medium text-primary">
                <li className="flex items-center gap-2"><ArrowRight size={16} className="text-accent" /> Melsungen</li>
                <li className="flex items-center gap-2"><ArrowRight size={16} className="text-accent" /> Kassel (südliches Umland)</li>
                <li className="flex items-center gap-2"><ArrowRight size={16} className="text-accent" /> Felsberg</li>
                <li className="flex items-center gap-2"><ArrowRight size={16} className="text-accent" /> Spangenberg</li>
                <li className="flex items-center gap-2"><ArrowRight size={16} className="text-accent" /> Guxhagen</li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              {/* Map Placeholder */}
              <div className="w-full aspect-[4/3] bg-[#D5E8C4] rounded-[2px] flex items-center justify-center border border-[#c2dcae]">
                <span className="font-sans text-primary font-medium">Karte wird geladen...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D5016] to-[#1a2e0a] z-0"></div>
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
