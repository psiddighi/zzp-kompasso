
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const InfoPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hoe werkt ZZP Kompas?
            </h1>
            <p className="text-xl text-gray-600">
              Een wetenschappelijk onderbouwde methode om je financiële gezondheid te meten
            </p>
          </div>

          {/* Process */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="text-blue-600" size={24} />
                  De Scan (5 minuten)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Je beantwoordt 10 korte vragen over je financiële situatie. 
                  We vragen naar je inkomen, uitgaven, buffers en verzekeringen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm">Volledig anoniem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm">Geen registratie nodig</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm">Data wordt niet opgeslagen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-green-600" size={24} />
                  Risico-analyse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Onze algoritme berekent je financiële risico-score op basis van 
                  wetenschappelijke inzichten over ZZP-financiën.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Noodfonds</span>
                    <span className="text-sm text-gray-500">20 punten</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Verzekeringen</span>
                    <span className="text-sm text-gray-500">15 punten</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Inkomensstabiliteit</span>
                    <span className="text-sm text-gray-500">15 punten</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Overige factoren</span>
                    <span className="text-sm text-gray-500">50 punten</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results explanation */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-purple-600" size={24} />
                Wat krijg je?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Lage risico (70-100)</h4>
                  <p className="text-sm text-gray-600">
                    Je financiële situatie is sterk. Je krijgt tips om het zo te houden 
                    en eventuele kleine verbeterpunten.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-600">Gemiddeld risico (40-69)</h4>
                  <p className="text-sm text-gray-600">
                    Er zijn duidelijke verbeterpunten. Je krijgt concrete stappen 
                    om je risico's te verkleinen.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Hoog risico (0-39)</h4>
                  <p className="text-sm text-gray-600">
                    Je loopt significante risico's. Je krijgt prioritaire actiepunten 
                    en doorverwijzing naar hulp.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy section */}
          <Card className="bg-blue-50 mb-12">
            <CardHeader>
              <CardTitle>Privacy & Veiligheid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Wat we NIET doen:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Je data opslaan of verkopen</li>
                    <li>• Je contactgegevens vragen</li>
                    <li>• Spam of marketing sturen</li>
                    <li>• Data delen met derden</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wat we WEL doen:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Lokaal in je browser werken</li>
                    <li>• Anonieme resultaten tonen</li>
                    <li>• Doorverwijzen naar hulp</li>
                    <li>• Gratis advies geven</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Klaar om te beginnen?
            </h3>
            <p className="text-gray-600 mb-6">
              Het kost je slechts 5 minuten en kan veel problemen voorkomen.
            </p>
            <Link 
              to="/scan"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Start je Financiële Scan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
