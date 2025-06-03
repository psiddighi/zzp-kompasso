
import { Link } from "react-router-dom";

const KompasPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🧭</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ZZP Kompas
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              Inzicht & Hulp in 5 Minuten
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Een webapp waarmee een ZZP'er via een snelle, begrijpelijke vragenlijst 
              zijn financiële situatie in kaart brengt en direct persoonlijke hulp ontvangt.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔍</span>
                  <div>
                    <h4 className="font-semibold">Slimme zelfscan</h4>
                    <p className="text-gray-600">Maximaal 20 vragen voor complete analyse</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <h4 className="font-semibold">Dashboard met risico-score</h4>
                    <p className="text-gray-600">Geïnspireerd door Nibud methodiek</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💡</span>
                  <div>
                    <h4 className="font-semibold">Persoonlijke adviezen</h4>
                    <p className="text-gray-600">Op basis van jouw specifieke profiel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧭</span>
                  <div>
                    <h4 className="font-semibold">Hulpzoeker op locatie</h4>
                    <p className="text-gray-600">Via postcode of browserlocatie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧠</span>
                  <div>
                    <h4 className="font-semibold">Mini-coach chatbot</h4>
                    <p className="text-gray-600">Voor motivatie en begeleiding (optioneel)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Focus Gebieden</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Financiële kwetsbaarheid herkennen</h4>
                  <p className="text-gray-600">Identificeer risico's zoals ontbrekende buffer of verzekeringen</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Laagdrempelig hulp aanbieden</h4>
                  <p className="text-gray-600">Direct doorverwijzen naar relevante hulpinstanties</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Preventie i.p.v. crisishulp</h4>
                  <p className="text-gray-600">Vroegtijdig ingrijpen voordat problemen escaleren</p>
                </div>
              </div>
            </div>
          </div>

          {/* Example Scenario */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📋 Voorbeeld Scenario</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Stap 1</span>
                <p className="text-gray-700">ZZP'er vult 15 vragen in over inkomsten, uitgaven en verzekeringen</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Stap 2</span>
                <p className="text-gray-700">Dashboard toont: "Risico-score: Hoog - Je hebt geen arbeidsongeschiktheidsverzekering"</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Stap 3</span>
                <p className="text-gray-700">Persoonlijk advies: "Overweeg een AOV via [specifieke aanbieder voor jouw situatie]"</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Stap 4</span>
                <p className="text-gray-700">Doorverwijzing naar lokale hulpinstanties in jouw regio</p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Technische Implementatie</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• React/Vue.js voor interactieve vragenlijst</li>
                  <li>• Charts.js voor risico-visualisatie</li>
                  <li>• Responsive design voor mobile-first</li>
                  <li>• Progressive Web App functies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Backend & Data</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• API voor hulpinstanties database</li>
                  <li>• Geolocation services</li>
                  <li>• Simpele AI/ML voor advies-matching</li>
                  <li>• Privacy-first data handling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/vergelijking"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors inline-block mr-4"
            >
              Vergelijk met andere oplossingen
            </Link>
            <Link 
              to="/budgetbuddy"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-block"
            >
              Bekijk BudgetBuddy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KompasPage;
