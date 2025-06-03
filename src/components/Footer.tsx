
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ZZP Oplossingen</h3>
            <p className="text-gray-300">
              Innovatieve financiële tools speciaal ontwikkeld voor ZZP'ers in Nederland.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Oplossingen</h4>
            <ul className="space-y-2 text-gray-300">
              <li>ZZP Kompas - Inzicht & Hulp</li>
              <li>BudgetBuddy - Huishoudtool</li>
              <li>StressSignaal - AI Risico-alert</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">
              Ontwikkeld door een team van software developers en financiële studenten.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ZZP Oplossingen. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
