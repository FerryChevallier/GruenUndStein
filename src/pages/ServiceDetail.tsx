import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServiceDetail() {
  useScrollReveal();

  const features = [
    'Terrassenbau',
    'Einfahrtgestaltung',
    'Wegebau',
    'Treppenbau',
    'Randsteinarbeiten',
    'Entwässerung'
  ];

  const steps = [
    { title: 'Beratung & Planung', desc: 'Wir besprechen Ihre Wünsche und erstellen ein maßgeschneidertes Konzept.' },
    { title: 'Materialauswahl', desc: 'Gemeinsam wählen wir die passenden Steine und Materialien für Ihr Projekt.' },
    { title: 'Umsetzung', desc: 'Fachgerechte und termintreue Ausführung durch unser erfahrenes Team.' },
    { title: 'Abnahme & Übergabe', desc: 'Gemeinsame Begehung und Übergabe Ihres neuen Gartentraums.' }
  ];

  const gallery = [
    { title: 'Pflasterweg mit Mosaiken', category: 'Pflasterung', gradient: 'from-[#4a7a25] to-[#2D5016]' },
    { title: 'Vorgarten mit Granit und Kies', category: 'Pflasterung', gradient: 'from-[#2D5016] to-[#8B6914]' },
    { title: 'Terrasse Anthrazit + Hangabfangung', category: 'Pflasterung', gradient: 'from-[#1a2e0a] to-[#2D5016]' },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e0a] via-[#2D5016] to-[#4a7a25] z-0"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="container-custom relative z-20 text-white w-full text-center mt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Wegebau & Pflasterarbeiten
          </h1>
          <div className="font-sans font-light text-white/80 text-sm tracking-wider uppercase animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <Link to="/leistungen" className="hover:text-white transition-colors">Leistungen</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Wegebau</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full reveal-on-scroll">
              <span className="text-accent text-xs font-bold uppercase tracking-wider mb-4 block">Unsere Leistung</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Wege und Flächen, die bleiben.</h2>
              
              <div className="space-y-6 font-sans text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  Mit handwerklicher Präzision und hochwertigen Materialien legen wir Wege, Terrassen und Einfahrten an, die nicht nur funktional sind, sondern auch ästhetisch begeistern. Von Naturstein über Betonpflaster bis zum farbigen Mosaik – wir finden die Lösung für Ihren Garten.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#4a7a25] to-[#2D5016] rounded-[2px] shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Placeholder image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-neutral border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl">Was wir anbieten</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-[2px] border border-border shadow-sm reveal-on-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <span className="font-sans font-medium text-lg text-dark">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl">Unser Ablauf</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[2px] bg-border z-0"></div>
              
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center reveal-on-scroll"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-[#EDF3E8] rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-6">
                    <span className="font-serif text-2xl text-primary font-bold">0{index + 1}</span>
                  </div>
                  <h3 className="font-sans font-bold text-xl mb-3 text-dark">{step.title}</h3>
                  <p className="font-sans font-light text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 reveal-on-scroll">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">Projektbeispiele</h2>
              <p className="font-sans text-accent text-lg">Inspiration für Ihr Vorhaben.</p>
            </div>
            <Link to="/portfolio" className="btn btn-secondary-white mt-6 sm:mt-0">
              Alle Projekte ansehen
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
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
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-20 bg-neutral border-b border-border text-center">
        <div className="container-custom reveal-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Interesse geweckt? Sprechen Sie uns an.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:05661920746" className="btn btn-primary">
              📞 05661 920746
            </a>
            <Link to="/kontakt" className="btn btn-secondary">
              Kontaktformular <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h3 className="font-sans font-medium text-lg uppercase tracking-wider text-gray-500 mb-8 text-center">Weitere Leistungen</h3>
          
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
            {['Pflanzenarbeit', 'Teicharbeiten', 'Holzbau', 'Mauerarbeiten'].map((service, index) => (
              <Link 
                key={index}
                to={`/leistungen/${service.toLowerCase()}`}
                className="min-w-[280px] sm:min-w-[320px] bg-neutral p-6 rounded-[2px] border border-border hover:border-primary transition-colors snap-start group flex flex-col"
              >
                <h4 className="font-serif text-xl mb-4 group-hover:text-primary transition-colors">{service}</h4>
                <span className="inline-flex items-center gap-2 text-primary font-medium mt-auto text-sm">
                  Mehr erfahren <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
