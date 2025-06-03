
import { useLocation, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, TrendingUp, Users, ArrowRight } from "lucide-react";
import { calculateRiskScore, generateRecommendations, getRiskLevel } from "@/lib/riskCalculator";

const ResultPage = () => {
  const location = useLocation();
  const answers = location.state?.answers || {};
  
  const riskScore = calculateRiskScore(answers);
  const riskLevel = getRiskLevel(riskScore);
  const recommendations = generateRecommendations(answers, riskScore);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Laag': return 'text-green-600';
      case 'Gemiddeld': return 'text-yellow-600';
      case 'Hoog': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case 'Laag': return 'bg-green-100';
      case 'Gemiddeld': return 'bg-yellow-100';
      case 'Hoog': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Jouw Financiële Kompas
            </h1>
            <p className="text-lg text-gray-600">
              Op basis van je antwoorden hebben we je financiële situatie geanalyseerd
            </p>
          </div>

          {/* Risk Score */}
          <Card className={`mb-8 ${getRiskBgColor(riskLevel)}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {riskLevel === 'Laag' ? (
                  <CheckCircle className="text-green-600" size={32} />
                ) : (
                  <AlertTriangle className={getRiskColor(riskLevel)} size={32} />
                )}
                <div>
                  <div className="text-2xl">Risico-niveau: <span className={getRiskColor(riskLevel)}>{riskLevel}</span></div>
                  <div className="text-sm font-normal text-gray-600">Score: {riskScore}/100</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={riskScore} className="mb-4" />
              <p className="text-gray-700">
                {riskLevel === 'Laag' && 'Je financiële situatie ziet er goed uit! Er zijn wel altijd verbeterpunten.'}
                {riskLevel === 'Gemiddeld' && 'Je financiële situatie heeft verbeterpunten. Met de juiste stappen kun je risico\'s verkleinen.'}
                {riskLevel === 'Hoog' && 'Je loopt significante financiële risico\'s. Het is belangrijk om actie te ondernemen.'}
              </p>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-blue-600" size={24} />
                  Persoonlijke Actiepunten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.actions.map((action, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{action.title}</h4>
                        <p className="text-gray-600 text-sm">{action.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-green-600" size={24} />
                  Hulp & Ondersteuning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.resources.map((resource, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold">{resource.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                      {resource.link && (
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                        >
                          Meer info <ArrowRight size={14} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Wil je meer gedetailleerd advies?
            </h3>
            <p className="text-gray-600 mb-6">
              Neem contact op met een financieel adviseur in je regio voor persoonlijk advies op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/hulp">Vind hulp in je buurt</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/scan">Doe de scan opnieuw</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
