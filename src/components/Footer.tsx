
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🧭 ZZP Kompas</h3>
            <p className="text-gray-300">
              Krijg inzicht in je financiële situatie als ZZP'er. 
              Gratis, anoniem en binnen 5 minuten.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Snel starten</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/scan" className="hover:text-white transition-colors">Financiële Scan</a></li>
              <li><a href="/info" className="hover:text-white transition-colors">Hoe werkt het?</a></li>
              <li><a href="/hulp" className="hover:text-white transition-colors">Hulp vinden</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Privacy</h4>
            <p className="text-gray-300 text-sm">
              ZZP Kompas slaat geen persoonlijke gegevens op. 
              Alle berekeningen gebeuren lokaal in je browser.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ZZP Kompas. Een initiatief om ZZP'ers te helpen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
