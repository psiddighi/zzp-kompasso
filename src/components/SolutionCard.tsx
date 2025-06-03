
import { Link } from "react-router-dom";

interface SolutionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  link: string;
  features: string[];
}

const SolutionCard = ({ title, subtitle, description, icon, link, features }: SolutionCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-blue-600 font-semibold mb-4">{subtitle}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        to={link}
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
      >
        Meer informatie
      </Link>
    </div>
  );
};

export default SolutionCard;
