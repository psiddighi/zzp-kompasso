
import { Link } from "react-router-dom";
import SolutionCard from "../components/SolutionCard";

const HomePage = () => {
  const solutions = [
    {
      title: "ZZP Kompas",
      subtitle: "Inzicht & Hulp in 5 Minuten",
      description: "Een snelle, begrijpelijke vragenlijst waarmee ZZP'ers hun financiële situatie in kaart brengen en direct persoonlijke hulp ontvangen.",
      icon: "🧭",
      link: "/kompas",
      features: [
        "Slimme zelfscan (max. 20 vragen)",
        "Dashboard met risico-score",
        "Persoonlijke adviezen op maat",
        "Hulpzoeker op basis van locatie"
      ]
    },
    {
      title: "BudgetBuddy",
      subtitle: "Interactieve Huishoudtool",
      description: "Een visuele online tool waar ZZP'ers hun inkomsten en uitgaven invoeren via drag-and-drop of snelknoppen.",
      icon: "💰",
      link: "/budgetbuddy",
      features: [
        "CSV-import van banktransacties",
        "Visuele cashflow grafieken",
        "Automatische knelpunt detectie",
        "Regionale hulp en subsidie tips"
      ]
    },
    {
      title: "StressSignaal",
      subtitle: "AI-gebaseerde Risico-alert",
      description: "Een innovatieve browsertool die ZZP'ers passief helpt door vroegtijdige signalen van financiële stress te detecteren.",
      icon: "🚨",
      link: "/stresssignaal",
      features: [
        "Slimme vragenlijst + gedragsmonitor",
        "Waarschuwingen bij risicosignalen",
        "Anonieme doorverwijzing naar hulp",
        "Mentale en financiële signaalherkenning"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Financiële Hulp voor <span className="text-yellow-300">ZZP'ers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Drie innovatieve oplossingen ontwikkeld door software developers en financiële studenten, 
            speciaal afgestemd op de unieke behoeften van ZZP'ers in financiële problemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/vergelijking"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Vergelijk Oplossingen
            </Link>
            <Link 
              to="/kompas"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Start nu met ZZP Kompas
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Het Probleem dat Wij Oplossen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              ZZP'ers hebben vaak geen buffer, geen arbeidsongeschiktheidsverzekering, en missen overzicht 
              in hun financiële situatie. Traditionele tools zijn te complex of niet afgestemd op hun specifieke behoeften.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Geen Overzicht</h3>
                <p className="text-gray-600">Inkomsten fluctueren, uitgaven zijn onduidelijk</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="text-xl font-semibold mb-2">Geen Buffer</h3>
                <p className="text-gray-600">Geen financiële vangnet bij tegenslagen</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-semibold mb-2">Onbekendheid</h3>
                <p className="text-gray-600">Weten niet waar ze hulp kunnen vinden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Onze Drie Innovatieve Oplossingen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Elk concept is realistisch uitvoerbaar en bevat vernieuwende elementen. 
              Ze combineren de unieke vaardigheden van software developers en financiële studenten.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om Impact te Maken?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bouw een laagdrempelige, praktische en anonieme tool die inzicht geeft, 
            gedrag verandert, én hulp koppelt aan echte behoeftes.
          </p>
          <Link 
            to="/vergelijking"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Vergelijk alle Oplossingen
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
