
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">🧭 ZZP Kompas</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Krijg inzicht in je financiële situatie als ZZP'er. 
              Gratis, anoniem en binnen 5 minuten. We helpen je 
              risico's te identificeren en de juiste stappen te zetten.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span>✓ 100% Gratis</span>
              <span>✓ Volledig Anoniem</span>
              <span>✓ Direct Resultaat</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Snel starten</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/scan" className="hover:text-yellow-400 transition-colors">Financiële Scan</a></li>
              <li><a href="/info" className="hover:text-yellow-400 transition-colors">Hoe werkt het?</a></li>
              <li><a href="/hulp" className="hover:text-yellow-400 transition-colors">Hulp vinden</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Privacy & Veiligheid</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              ZZP Kompas slaat geen persoonlijke gegevens op. 
              Alle berekeningen gebeuren lokaal in je browser. 
              Je privacy is volledig gegarandeerd.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 ZZP Kompas. Een initiatief om ZZP'ers financieel sterker te maken.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              <span>Gemaakt met ❤️ voor Nederlandse ZZP'ers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
