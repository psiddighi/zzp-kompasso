
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ZZP Oplossingen
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/kompas" className="text-gray-700 hover:text-blue-600 transition-colors">
              ZZP Kompas
            </Link>
            <Link to="/budgetbuddy" className="text-gray-700 hover:text-blue-600 transition-colors">
              BudgetBuddy
            </Link>
            <Link to="/stresssignaal" className="text-gray-700 hover:text-blue-600 transition-colors">
              StressSignaal
            </Link>
            <Link to="/vergelijking" className="text-gray-700 hover:text-blue-600 transition-colors">
              Vergelijking
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/kompas" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ZZP Kompas
              </Link>
              <Link 
                to="/budgetbuddy" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BudgetBuddy
              </Link>
              <Link 
                to="/stresssignaal" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                StressSignaal
              </Link>
              <Link 
                to="/vergelijking" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Vergelijking
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
