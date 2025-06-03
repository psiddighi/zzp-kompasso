
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Shield, Users, CheckCircle, Star } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                ZZP <span className="text-yellow-400">Kompas</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Krijg in 5 minuten volledig inzicht in je financiële situatie als ZZP'er. 
                Ontdek risico's, ontvang persoonlijke tips en vind de juiste hulp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/scan"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start je Financiële Scan
                </Link>
                <Link 
                  to="/info"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Hoe werkt het?
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Volledig Anoniem</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Direct Resultaat</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Professionele ZZP'er aan het werk"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">1.2M+</div>
              <p className="text-gray-600 font-medium">ZZP'ers in Nederland</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-yellow-600 mb-2 group-hover:scale-110 transition-transform">5 min</div>
              <p className="text-gray-600 font-medium">Gemiddelde scantijd</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">85%</div>
              <p className="text-gray-600 font-medium">Vindt de scan nuttig</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Veel ZZP'ers lopen onnodig <span className="text-red-600">financiële risico's</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Onderzoek toont aan dat de meerderheid van ZZP'ers geen goed overzicht heeft van hun financiële situatie. 
                Dit kan leiden tot problemen die eenvoudig te voorkomen zijn.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="ZZP'er die zich zorgen maakt over financiën"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <div className="text-2xl">📊</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Geen Overzicht</h3>
                    <p className="text-gray-600">85% van de ZZP'ers heeft geen goed beeld van hun financiële gezondheid en toekomstbestendigheid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <div className="text-2xl">🚫</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Onvoldoende Buffer</h3>
                    <p className="text-gray-600">60% heeft minder dan 3 maanden reserves bij ziekte of plotselinge opdrachtstop</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <div className="text-2xl">❓</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Onbekend met Hulp</h3>
                    <p className="text-gray-600">Velen weten niet welke hulp, subsidies en ondersteuning er beschikbaar zijn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zo werkt ZZP Kompas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een wetenschappelijk onderbouwde methode die je binnen 5 minuten compleet inzicht geeft in je financiële situatie.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Calculator className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">1. Snelle Scan</h3>
              <p className="text-gray-600">Beantwoord 10 gerichte vragen over je inkomen, uitgaven en huidige situatie</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">2. Risico-analyse</h3>
              <p className="text-gray-600">Ontvang een persoonlijke risico-score en uitgebreide financiële gezondheidscheck</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">3. Persoonlijke Tips</h3>
              <p className="text-gray-600">Krijg concrete, uitvoerbare adviezen en actiepunten op basis van jouw specifieke situatie</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">4. Hulp vinden</h3>
              <p className="text-gray-600">Word doorverwezen naar de juiste hulpinstanties, subsidies en experts in jouw regio</p>
            </div>
          </div>

          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt="Professionele werkplek met laptop en financiële documenten"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wat zeggen andere ZZP'ers?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"Eindelijk heb ik overzicht! De scan heeft me geholpen om prioriteiten te stellen en een noodfonds op te bouwen."</p>
              <div className="font-semibold text-gray-900">Sarah, Grafisch ontwerper</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"De tips waren zeer praktisch. Ik ben nu beter verzekerd en heb een duidelijk plan voor mijn pensioen."</p>
              <div className="font-semibold text-gray-900">Mark, IT Consultant</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"Snel, gratis en heel inzichtelijk. Heeft me veel stress bespaard en mijn financiële vertrouwen vergroot."</p>
              <div className="font-semibold text-gray-900">Emma, Marketing specialist</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start nu je financiële check-up
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Het kost je slechts 5 minuten en kan je veel problemen en stress besparen. 
            Gratis, anoniem en direct een persoonlijk resultaat.
          </p>
          <Link 
            to="/scan"
            className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 inline-block transform hover:scale-105 shadow-xl"
          >
            Begin met je Scan →
          </Link>
          <div className="mt-8 text-sm text-gray-300">
            ✓ Geen registratie vereist &nbsp;&nbsp;&nbsp; ✓ 100% privacy gegarandeerd &nbsp;&nbsp;&nbsp; ✓ Direct toegankelijk
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
