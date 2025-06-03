
import { Link } from "react-router-dom";

const BudgetBuddyPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">💰</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              BudgetBuddy
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-6">
              Interactieve Huishoudtool voor ZZP'ers
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Een visuele online tool waar een ZZP'er zijn inkomsten en uitgaven invoert 
              via drag-and-drop of snelknoppen, met automatische analyse en tips.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📥</span>
                  <div>
                    <h4 className="font-semibold">CSV-import banktransacties</h4>
                    <p className="text-gray-600">Automatische import van je bankgegevens</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <h4 className="font-semibold">Visuele grafieken</h4>
                    <p className="text-gray-600">Maandelijkse cashflow en uitgavenpatronen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📌</span>
                  <div>
                    <h4 className="font-semibold">Automatische tips</h4>
                    <p className="text-gray-600">"Je vaste lasten zijn 80%, probeer &lt;70%"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📘</span>
                  <div>
                    <h4 className="font-semibold">Subsidie-koppeling</h4>
                    <p className="text-gray-600">Tips voor zorgtoeslag, kwijtschelding, etc.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <h4 className="font-semibold">Regiofilter</h4>
                    <p className="text-gray-600">Lokale hulp op basis van je locatie</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Vernieuwende Aspecten</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Minder technisch</h4>
                  <p className="text-gray-600">Eenvoudiger dan boekhoudsoftware zoals Moneybird</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Gedrag & begrip focus</h4>
                  <p className="text-gray-600">Niet alleen registratie, maar ook inzicht en verandering</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Spaar-doelen en stress-meter</h4>
                  <p className="text-gray-600">Motiverende elementen voor financieel welzijn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📊 Visuele Interface Preview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-semibold mb-2">Inkomsten Tracker</h4>
                <p className="text-sm text-gray-600">Drag-and-drop invoices en projecten</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📉</div>
                <h4 className="font-semibold mb-2">Uitgaven Categorieën</h4>
                <p className="text-sm text-gray-600">Automatische categorisering van kosten</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚠️</div>
                <h4 className="font-semibold mb-2">Knelpunt Detector</h4>
                <p className="text-sm text-gray-600">Waarschuwingen bij financiële risico's</p>
              </div>
            </div>
          </div>

          {/* Use Case Example */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Praktijk Voorbeeld</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Maand 1</span>
                <p className="text-gray-700">ZZP'er import bankgegevens → BudgetBuddy toont: 85% vaste lasten</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Advies</span>
                <p className="text-gray-700">Automatische tip: "Overweeg kwijtschelding gemeentelijke belastingen"</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Maand 2</span>
                <p className="text-gray-700">Na toepassing tips → vaste lasten dalen naar 68%</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Resultaat</span>
                <p className="text-gray-700">Stress-meter kleurt groen, spaardoel wordt bereikbaar</p>
              </div>
            </div>
          </div>

          {/* Technical Requirements */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Technische Vereisten</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frontend Skills</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Drag-and-drop interfaces</li>
                  <li>• Chart.js/D3.js visualisaties</li>
                  <li>• File upload & CSV parsing</li>
                  <li>• Responsive mobile design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Backend Skills</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• API development</li>
                  <li>• Database design</li>
                  <li>• Data processing algorithms</li>
                  <li>• Security & privacy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Financiële Kennis</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Huishoudboek principes</li>
                  <li>• Nederlandse subsidies</li>
                  <li>• ZZP-specifieke kosten</li>
                  <li>• Financiële risico-analyse</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Fit */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Perfect voor jullie team</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Sterk aanbevolen vaardigheden:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅✅</span>
                    <span className="text-gray-700">Front-end developers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅✅</span>
                    <span className="text-gray-700">Back-end/API developers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅✅</span>
                    <span className="text-gray-700">Financiële studenten</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅✅✅</span>
                    <span className="text-gray-700">UX/design focus</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Extra voordelen:</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Concrete, tastbare resultaten</li>
                  <li>• Directe gebruiker feedback mogelijk</li>
                  <li>• Uitbreidbaar naar volledige fintech app</li>
                  <li>• Portfolio-waardig voor developers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/vergelijking"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors inline-block mr-4"
            >
              Vergelijk met andere oplossingen
            </Link>
            <Link 
              to="/stresssignaal"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 hover:text-white transition-colors inline-block"
            >
              Bekijk StressSignaal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetBuddyPage;
