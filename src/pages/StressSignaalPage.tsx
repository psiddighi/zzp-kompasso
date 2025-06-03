
import { Link } from "react-router-dom";

const StressSignaalPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🚨</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              StressSignaal
            </h1>
            <p className="text-xl text-red-600 font-semibold mb-6">
              AI-gebaseerde Risico-alert
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Een innovatieve browsertool of plug-in die ZZP'ers passief helpt door 
              vroegtijdige signalen van financiële stress te detecteren.
            </p>
          </div>

          {/* Unique Selling Points */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💡 Unieke Innovatie</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-semibold mb-2">Lage drempel</h4>
                <p className="text-sm text-gray-600">Geen account, geen KvK nodig</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧠</div>
                <h4 className="font-semibold mb-2">Holistische aanpak</h4>
                <p className="text-sm text-gray-600">Combineert mentale en financiële signalen</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold mb-2">Sociale integratie</h4>
                <p className="text-sm text-gray-600">Koppeling met gemeenten en partners</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 Core Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧠</span>
                  <div>
                    <h4 className="font-semibold">Slimme vragenlijst + gedragsmonitor</h4>
                    <p className="text-gray-600">Volledig lokale verwerking voor privacy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔔</span>
                  <div>
                    <h4 className="font-semibold">Proactieve waarschuwingen</h4>
                    <p className="text-gray-600">Signalen: onbetaalde facturen, aflopende opdrachten</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧭</span>
                  <div>
                    <h4 className="font-semibold">Anonieme doorverwijzing</h4>
                    <p className="text-gray-600">Naar hulpverleners, coaches of instanties</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">💬</span>
                  <div>
                    <h4 className="font-semibold">"Herken je jezelf?" prompts</h4>
                    <p className="text-gray-600">Ervaringsverhalen en mentale tips</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Stress Signalen</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-red-700">Financiële Indicatoren</h4>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Geen facturen betaald afgelopen maand</li>
                    <li>• Hoge vaste lasten (&gt;80% inkomen)</li>
                    <li>• Aflopende opdrachten zonder vervanging</li>
                    <li>• Langdurige betalingsachterstanden</li>
                  </ul>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-orange-700">Gedragsindicatoren</h4>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Frequent zoeken naar "schuldhulp"</li>
                    <li>• Verminderde online activiteit</li>
                    <li>• Lange periodes zonder facturering</li>
                    <li>• Herhaalde bezoeken aan verzekering sites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Technology */}
          <div className="bg-purple-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🤖 AI & Machine Learning</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Pattern Recognition</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Herkenning van financiële stress patronen</li>
                  <li>• Voorspelling van risico-escalatie</li>
                  <li>• Personalisatie van interventies</li>
                  <li>• Continue verbetering van algoritmes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-3">Privacy-First AI</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Lokale verwerking (geen cloud)</li>
                  <li>• Geanonimiseerde data analyse</li>
                  <li>• Opt-in machinelearning</li>
                  <li>• GDPR compliant design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Scenario */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🔄 Implementatie Scenario</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Week 1</span>
                <p className="text-gray-700">ZZP'er installeert Chrome extensie → korte setup (5 vragen)</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Week 3</span>
                <p className="text-gray-700">AI detecteert patroon: vaak zoeken naar "uitstel betaling" + geen nieuwe facturen</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Alert</span>
                <p className="text-gray-700">Zachte notificatie: "Herken je dit? [link naar verhaal van andere ZZP'er]"</p>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mr-4 mt-1">Actie</span>
                <p className="text-gray-700">Anonieme doorverwijzing naar gemeente schuldhulp + praktische tips</p>
              </div>
            </div>
          </div>

          {/* Technical Complexity */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Technische Complexiteit</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Browser Extension</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Chrome/Firefox API's</li>
                  <li>• Background scripts</li>
                  <li>• Content script injection</li>
                  <li>• Local storage management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">AI/ML Pipeline</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• TensorFlow.js (client-side)</li>
                  <li>• Pattern recognition models</li>
                  <li>• Natural language processing</li>
                  <li>• Behavioral analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Integration Layer</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• API's voor hulpinstanties</li>
                  <li>• Gemeente databases</li>
                  <li>• Privacy-preserving analytics</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Requirements */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">👥 Team Vereisten</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Sterk aanbevolen:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅✅</span>
                    <span className="text-gray-700">Back-end/API developers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅✅✅</span>
                    <span className="text-gray-700">AI-experimenten</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-700">Front-end developers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="text-gray-700">Financiële studenten</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-3">Uitdagingen:</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Privacy-compliant AI ontwikkeling</li>
                  <li>• Browser extension ecosysteem</li>
                  <li>• Ethische AI besluitvorming</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/vergelijking"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors inline-block mr-4"
            >
              Vergelijk met andere oplossingen
            </Link>
            <Link 
              to="/kompas"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-600 hover:text-white transition-colors inline-block"
            >
              Bekijk ZZP Kompas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StressSignaalPage;
