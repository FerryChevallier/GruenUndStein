import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e0a] via-[#2D5016] to-[#4a7a25] z-0"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="container-custom relative z-20 text-white w-full text-center mt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
            Kontakt aufnehmen
          </h1>
          <div className="font-sans font-light text-white/80 text-sm tracking-wider uppercase animate-[fadeInUp_0.6s_ease-out_0.2s_forwards] opacity-0">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Kontakt</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT - Contact Form */}
            <div className="lg:w-[60%] reveal-on-scroll">
              <h2 className="font-sans font-medium text-3xl mb-8">Schreiben Sie uns</h2>
              
              {isSubmitted ? (
                <div className="bg-[#EDF3E8] border-l-4 border-primary p-8 rounded-[2px]">
                  <h3 className="font-serif text-2xl text-primary mb-2">Vielen Dank!</h3>
                  <p className="font-sans text-gray-700">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input 
                        type="text" 
                        id="vorname" 
                        required
                        className="peer w-full border-b border-border bg-transparent py-2 px-0 text-text focus:border-primary focus:outline-none transition-colors"
                        onFocus={() => setFocusedField('vorname')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                      />
                      <label 
                        htmlFor="vorname" 
                        className={`absolute left-0 top-2 text-gray-500 transition-all duration-200 pointer-events-none ${
                          focusedField === 'vorname' || document.getElementById('vorname')?.matches(':valid') 
                            ? '-translate-y-6 text-xs text-primary' 
                            : ''
                        }`}
                      >
                        Vorname *
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="text" 
                        id="nachname" 
                        required
                        className="peer w-full border-b border-border bg-transparent py-2 px-0 text-text focus:border-primary focus:outline-none transition-colors"
                        onFocus={() => setFocusedField('nachname')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                      />
                      <label 
                        htmlFor="nachname" 
                        className={`absolute left-0 top-2 text-gray-500 transition-all duration-200 pointer-events-none ${
                          focusedField === 'nachname' || document.getElementById('nachname')?.matches(':valid') 
                            ? '-translate-y-6 text-xs text-primary' 
                            : ''
                        }`}
                      >
                        Nachname *
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="peer w-full border-b border-border bg-transparent py-2 px-0 text-text focus:border-primary focus:outline-none transition-colors"
                      onFocus={() => setFocusedField('email')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-0 top-2 text-gray-500 transition-all duration-200 pointer-events-none ${
                        focusedField === 'email' || document.getElementById('email')?.matches(':valid') 
                          ? '-translate-y-6 text-xs text-primary' 
                          : ''
                      }`}
                    >
                      E-Mail-Adresse *
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type="tel" 
                      id="telefon" 
                      className="peer w-full border-b border-border bg-transparent py-2 px-0 text-text focus:border-primary focus:outline-none transition-colors"
                      onFocus={() => setFocusedField('telefon')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                    <label 
                      htmlFor="telefon" 
                      className={`absolute left-0 top-2 text-gray-500 transition-all duration-200 pointer-events-none ${
                        focusedField === 'telefon' || (document.getElementById('telefon') as HTMLInputElement)?.value
                          ? '-translate-y-6 text-xs text-primary' 
                          : ''
                      }`}
                    >
                      Telefonnummer
                    </label>
                  </div>

                  <div className="relative">
                    <select 
                      id="betreff" 
                      required
                      className="peer w-full border-b border-border bg-transparent py-2 px-0 text-text focus:border-primary focus:outline-none transition-colors appearance-none"
                      onFocus={() => setFocusedField('betreff')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                    >
                      <option value="" disabled selected hidden></option>
                      <option value="Gartengestaltung">Gartengestaltung</option>
                      <option value="Teichbau">Teichbau</option>
                      <option value="Pflasterarbeiten">Pflasterarbeiten</option>
                      <option value="Holzbau">Holzbau</option>
                      <option value="Mauerarbeiten">Mauerarbeiten</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                    <label 
                      htmlFor="betreff" 
                      className={`absolute left-0 top-2 text-gray-500 transition-all duration-200 pointer-events-none ${
                        focusedField === 'betreff' || (document.getElementById('betreff') as HTMLSelectElement)?.value
                          ? '-translate-y-6 text-xs text-primary' 
                          : ''
                      }`}
                    >
                      Betreff *
                    </label>
                    <div className="absolute right-0 top-3 pointer-events-none text-gray-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="relative pt-4">
                    <textarea 
                      id="nachricht" 
                      rows={5}
                      required
                      className="peer w-full border-b border-border bg-transparent py-2 px-0 text-text focus:border-primary focus:outline-none transition-colors resize-none"
                      onFocus={() => setFocusedField('nachricht')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                    ></textarea>
                    <label 
                      htmlFor="nachricht" 
                      className={`absolute left-0 top-6 text-gray-500 transition-all duration-200 pointer-events-none ${
                        focusedField === 'nachricht' || document.getElementById('nachricht')?.matches(':valid') 
                          ? '-translate-y-8 text-xs text-primary' 
                          : ''
                      }`}
                    >
                      Ihre Nachricht *
                    </label>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="datenschutz" 
                      required
                      className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <label htmlFor="datenschutz" className="text-sm text-gray-600 font-light leading-relaxed">
                      Ich habe die <Link to="/datenschutz" className="text-primary underline hover:text-accent">Datenschutzbestimmungen</Link> gelesen und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. *
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary w-full mt-4">
                    Nachricht absenden <ArrowRight size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT - Contact Details */}
            <div className="lg:w-[40%] reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h2 className="font-serif text-3xl mb-8">So finden Sie uns</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary shrink-0 mt-1 stroke-1" />
                  <div>
                    <h4 className="font-sans font-medium text-lg mb-1">Adresse</h4>
                    <p className="text-gray-600 font-light">
                      Bachstraße 7<br />
                      34212 Melsungen (OT Röhrenfurth)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-primary shrink-0 mt-1 stroke-1" />
                  <div>
                    <h4 className="font-sans font-medium text-lg mb-1">Telefon</h4>
                    <div className="flex flex-col text-gray-600 font-light">
                      <a href="tel:05661920746" className="hover:text-primary transition-colors">05661 920746</a>
                      <a href="tel:01709065914" className="hover:text-primary transition-colors">0170 9065914</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-primary shrink-0 mt-1 stroke-1" />
                  <div>
                    <h4 className="font-sans font-medium text-lg mb-1">E-Mail</h4>
                    <a href="mailto:info@gruen-und-stein.de" className="text-gray-600 font-light hover:text-primary transition-colors">
                      info@gruen-und-stein.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EDF3E8] p-8 rounded-[2px] border-l-4 border-primary mb-10">
                <h4 className="font-serif text-xl mb-4">Öffnungszeiten</h4>
                <p className="font-sans text-gray-700 font-light mb-2">Mo – Fr: 06:00 – 18:00 Uhr</p>
                <p className="font-sans text-primary font-medium text-sm uppercase tracking-wider mt-4">
                  Termine nur nach telefonischer Absprache
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[280px] bg-[#D5E8C4] rounded-[2px] flex items-center justify-center border border-[#c2dcae]">
                <span className="font-sans text-primary font-medium">Karte wird geladen...</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="bg-neutral py-12 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-center reveal-on-scroll">
            <div>
              <span className="block font-serif text-3xl text-primary mb-1">20+</span>
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-gray-600">Jahre Erfahrung</span>
            </div>
            <div className="w-[1px] h-12 bg-border hidden md:block"></div>
            <div>
              <span className="block font-serif text-3xl text-primary mb-1">30 km</span>
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-gray-600">Radius</span>
            </div>
            <div className="w-[1px] h-12 bg-border hidden md:block"></div>
            <div>
              <span className="block font-serif text-3xl text-primary mb-1">100+</span>
              <span className="font-sans text-sm font-medium tracking-wider uppercase text-gray-600">Projekte</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
