
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Shield, Users } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ZZP <span className="text-yellow-300">Kompas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Krijg in 5 minuten inzicht in je financiële situatie als ZZP'er. 
            Ontdek risico's, krijg persoonlijke tips en vind de juiste hulp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/scan"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Start je Financiële Scan
            </Link>
            <Link 
              to="/info"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Hoe werkt het?
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Als ZZP'er loop je financiële risico's
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Veel ZZP'ers hebben geen overzicht van hun financiële situatie, geen buffer voor tegenslagen, 
              en weten niet waar ze hulp kunnen vinden. Dat kan leiden tot problemen die te voorkomen zijn.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Geen Overzicht</h3>
                <p className="text-gray-600">85% van de ZZP'ers heeft geen goed beeld van hun financiële gezondheid</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-semibold mb-2">Geen Buffer</h3>
                <p className="text-gray-600">60% heeft minder dan 3 maanden reserves bij ziekte of opdrachtstop</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-semibold mb-2">Onbekendheid</h3>
                <p className="text-gray-600">Velen weten niet welke hulp en subsidies er beschikbaar zijn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Zo werkt ZZP Kompas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een eenvoudige scan die je binnen 5 minuten compleet inzicht geeft in je financiële situatie.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Snelle Scan</h3>
              <p className="text-gray-600">Beantwoord 15-20 vragen over je inkomen, uitgaven en situatie</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Risico-analyse</h3>
              <p className="text-gray-600">Ontvang een persoonlijke risico-score en financiële gezondheidscheck</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Persoonlijke Tips</h3>
              <p className="text-gray-600">Krijg concrete adviezen en actiepunten op basis van jouw situatie</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Hulp vinden</h3>
              <p className="text-gray-600">Word doorverwezen naar de juiste hulpinstanties en subsidies in jouw regio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start nu je financiële check-up
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Het kost je slechts 5 minuten en kan je veel problemen besparen. 
            Gratis, anoniem en direct resultaat.
          </p>
          <Link 
            to="/scan"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Begin met je Scan
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
