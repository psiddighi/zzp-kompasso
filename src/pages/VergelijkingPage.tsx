
const VergelijkingPage = () => {
  const solutions = [
    {
      name: "ZZP Kompas",
      subtitle: "Inzicht & Hulp in 5 Minuten",
      icon: "🧭",
      color: "blue",
      focus: "Preventie i.p.v. crisishulp",
      target: "ZZP'ers die hun situatie willen begrijpen",
      timeToValue: "5 minuten",
      complexity: "Laag",
      features: [
        "Slimme zelfscan (20 vragen max)",
        "Dashboard met risico-score",
        "Persoonlijke adviezen op profiel",
        "Hulpzoeker op basis van locatie",
        "Mini-coach chatbot (optioneel)"
      ],
      teamFit: {
        frontend: "✅",
        backend: "✅",
        financial: "✅✅✅",
        ai: "⚠️ beperkt",
        ux: "✅"
      },
      pros: [
        "Directe impact en resultaat",
        "Lage technische complexiteit",
        "Perfect voor financiële studenten",
        "Snelle ontwikkeling mogelijk"
      ],
      cons: [
        "Beperkte AI/ML mogelijkheden",
        "Afhankelijk van externe databronnen",
        "Vereist goede UX voor vragenlijst"
      ]
    },
    {
      name: "BudgetBuddy",
      subtitle: "Interactieve Huishoudtool",
      icon: "💰",
      color: "green",
      focus: "Gedrag & begrip, niet alleen registratie",
      target: "ZZP'ers die hun uitgaven willen beheren",
      timeToValue: "15-30 minuten",
      complexity: "Gemiddeld",
      features: [
        "CSV-import van banktransacties",
        "Visuele cashflow grafieken",
        "Automatische knelpunt detectie",
        "Tips voor vaste vs flexibele lasten",
        "Regionale hulp en subsidie koppeling"
      ],
      teamFit: {
        frontend: "✅✅",
        backend: "✅✅",
        financial: "✅✅",
        ai: "⚠️ beperkt",
        ux: "✅✅✅"
      },
      pros: [
        "Concrete, tastbare resultaten",
        "Uitstekend voor UX/design focus",
        "Veel visuele feedback mogelijk",
        "Portfolio-waardig voor developers"
      ],
      cons: [
        "Hogere technische complexiteit",
        "Banking API integratie uitdagend",
        "Concurrentie met bestaande tools"
      ]
    },
    {
      name: "StressSignaal",
      subtitle: "AI-gebaseerde Risico-alert",
      icon: "🚨",
      color: "red",
      focus: "Mentale en financiële signalen combineren",
      target: "ZZP'ers met vroege stress signalen",
      timeToValue: "Passief, continue monitoring",
      complexity: "Hoog",
      features: [
        "Slimme vragenlijst + gedragsmonitor",
        "AI-gedreven waarschuwingen",
        "Anonieme doorverwijzing naar hulp",
        "Browser extension technologie",
        "Privacy-first local processing"
      ],
      teamFit: {
        frontend: "✅",
        backend: "✅✅",
        financial: "✅",
        ai: "✅✅✅",
        ux: "✅"
      },
      pros: [
        "Innovatief en uniek concept",
        "Uitstekend voor AI experimenten",
        "Lage drempel voor gebruikers",
        "Schaalbaarheid naar partnerships"
      ],
      cons: [
        "Hoge technische complexiteit",
        "Privacy en ethische uitdagingen",
        "Browser extension ontwikkeling",
        "Langere ontwikkeltijd"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          accent: 'text-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          accent: 'text-green-600',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'red':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          accent: 'text-red-600',
          button: 'bg-red-600 hover:bg-red-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          accent: 'text-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vergelijking van Oplossingen
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alle drie concepten zijn realistisch uitvoerbaar en bevatten vernieuwende elementen. 
              Hieronder een gedetailleerde vergelijking om de beste keuze voor jullie team te maken.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">🎯 Snelle Vergelijking</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vaardigheid</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-blue-600">ZZP Kompas</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-green-600">BudgetBuddy</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-red-600">StressSignaal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Front-end developers</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Back-end/API developers</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Financiële studenten</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">AI-experimenten</td>
                    <td className="px-6 py-4 text-center text-xl">⚠️ beperkt</td>
                    <td className="px-6 py-4 text-center text-xl">⚠️ beperkt</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">UX/design focus</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅✅✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => {
              const colors = getColorClasses(solution.color);
              return (
                <div key={index} className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6`}>
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{solution.name}</h3>
                    <p className={`${colors.accent} font-semibold`}>{solution.subtitle}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Focus:</h4>
                      <p className="text-sm text-gray-600">{solution.focus}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Doelgroep:</h4>
                      <p className="text-sm text-gray-600">{solution.target}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Time to Value:</h4>
                      <p className="text-sm text-gray-600">{solution.timeToValue}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Complexiteit:</h4>
                      <p className="text-sm text-gray-600">{solution.complexity}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Voordelen:</h4>
                    <ul className="space-y-1">
                      {solution.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Uitdagingen:</h4>
                    <ul className="space-y-1">
                      {solution.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-orange-500 mr-2">⚠</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recommendation Section */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🏆 Aanbevelingen op basis van Team Sterkte</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-blue-600 mb-3">Als jullie team sterk is in:</h4>
                <p className="text-sm text-gray-600 mb-3">Financiële kennis + snelle resultaten</p>
                <div className="text-center">
                  <div className="text-2xl mb-2">🧭</div>
                  <p className="font-semibold">Kies ZZP Kompas</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-green-600 mb-3">Als jullie team sterk is in:</h4>
                <p className="text-sm text-gray-600 mb-3">UX/UI design + data visualisatie</p>
                <div className="text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <p className="font-semibold">Kies BudgetBuddy</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-red-600 mb-3">Als jullie team sterk is in:</h4>
                <p className="text-sm text-gray-600 mb-3">AI/ML + complexe backend systemen</p>
                <div className="text-center">
                  <div className="text-2xl mb-2">🚨</div>
                  <p className="font-semibold">Kies StressSignaal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">⏱️ Geschatte Ontwikkeltijd</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🧭</div>
                <h4 className="font-semibold text-blue-600">ZZP Kompas</h4>
                <p className="text-2xl font-bold text-gray-900 my-2">4-6 weken</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Week 1-2: Vragenlijst & logica</li>
                  <li>• Week 3-4: Dashboard & scoring</li>
                  <li>• Week 5-6: Hulp database & testing</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-green-600">BudgetBuddy</h4>
                <p className="text-2xl font-bold text-gray-900 my-2">6-8 weken</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Week 1-2: UI/UX & drag-drop</li>
                  <li>• Week 3-4: CSV import & processing</li>
                  <li>• Week 5-6: Visualisaties & tips</li>
                  <li>• Week 7-8: Testing & refinement</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚨</div>
                <h4 className="font-semibold text-red-600">StressSignaal</h4>
                <p className="text-2xl font-bold text-gray-900 my-2">8-12 weken</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Week 1-3: Browser extension basis</li>
                  <li>• Week 4-6: AI/ML implementatie</li>
                  <li>• Week 7-9: Privacy & security</li>
                  <li>• Week 10-12: Testing & deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Klaar om te kiezen?</h3>
            <p className="text-lg mb-6">
              Alle drie de oplossingen kunnen echt impact maken. De vraag is welke het beste past bij jullie team en ambities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kompas"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Start met ZZP Kompas
              </a>
              <a 
                href="/budgetbuddy"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Kies BudgetBuddy
              </a>
              <a 
                href="/stresssignaal"
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Ga voor StressSignaal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VergelijkingPage;
