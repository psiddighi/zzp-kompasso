
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            🧭 ZZP Kompas
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/scan" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Scan
            </Link>
            <Link to="/info" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Hoe werkt het?
            </Link>
            <Link to="/hulp" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Hulp vinden
            </Link>
            <Link to="/live-event" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Live Event
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
                to="/scan" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Scan
              </Link>
              <Link 
                to="/info" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hoe werkt het?
              </Link>
              <Link 
                to="/hulp" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hulp vinden
              </Link>
              <Link 
                to="/live-event" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Event
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
