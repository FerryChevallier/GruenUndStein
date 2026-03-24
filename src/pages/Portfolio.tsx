import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Portfolio() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filters = ['Alle', 'Pflanzenarbeit', 'Teiche', 'Pflasterung', 'Holzbau', 'Mauern'];

  const portfolioItems = [
    { title: 'Natursteinmauer mit Beet', category: 'Mauern', gradient: 'from-[#2D5016] to-[#1a2e0a]' },
    { title: 'Holzterrasse mit Sprudelstein', category: 'Holzbau', gradient: 'from-[#8B6914] to-[#4a380a]' },
    { title: 'Pflasterweg mit Mosaiken', category: 'Pflasterung', gradient: 'from-[#4a7a25] to-[#2D5016]' },
    { title: 'Naturteich mit Findlingen', category: 'Teiche', gradient: 'from-[#1a2e0a] to-[#0d1705]' },
    { title: 'Vorgarten mit Granit und Kies', category: 'Pflasterung', gradient: 'from-[#2D5016] to-[#8B6914]' },
    { title: 'Hängemauer Naturstein', category: 'Mauern', gradient: 'from-[#4a380a] to-[#1a2e0a]' },
    { title: 'Rosenbeet mit Lavendel', category: 'Pflanzenarbeit', gradient: 'from-[#4a7a25] to-[#8B6914]' },
    { title: 'Terrasse Anthrazit + Hangabfangung', category: 'Pflasterung', gradient: 'from-[#1a2e0a] to-[#2D5016]' },
    { title: 'Sichtschutz Holz & Granit', category: 'Holzbau', gradient: 'from-[#8B6914] to-[#2D5016]' },
    { title: 'Palisaden Anthrazit', category: 'Mauern', gradient: 'from-[#2D5016] to-[#1a2e0a]' },
    { title: 'Lavabeet in Außenanlage', category: 'Pflanzenarbeit', gradient: 'from-[#4a7a25] to-[#2D5016]' },
    { title: 'Brunnen mit Findlingen', category: 'Teiche', gradient: 'from-[#1a2e0a] to-[#0d1705]' },
  ];

  const filteredItems = activeFilter === 'Alle' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e0a] via-[#2D5016] to-[#4a7a25] z-0"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="container-custom relative z-20 text-white w-full text-center mt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Unsere Projekte
          </h1>
          <p className="font-sans font-light text-white/80 text-lg max-w-2xl mx-auto animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
            Überzeugen Sie sich selbst – Qualität, die sichtbar ist.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] md:top-[88px] z-30 bg-white border-b border-border py-4 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium rounded-[2px] transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-white border border-primary'
                    : 'bg-white text-text border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-neutral min-h-[50vh]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.title}-${index}`} 
                className="group relative aspect-[3/2] rounded-[2px] overflow-hidden cursor-pointer animate-[fadeInUp_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}></div>
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="font-serif text-2xl text-white mb-4">{item.title}</h3>
                  <button className="btn btn-secondary-white text-sm py-2 px-4 self-start">
                    Ansehen
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 font-light text-lg">Keine Projekte in dieser Kategorie gefunden.</p>
            </div>
          )}
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
