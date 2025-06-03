
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Globe, ExternalLink } from "lucide-react";

interface HelpResource {
  id: string;
  name: string;
  type: 'gemeente' | 'organisatie' | 'adviseur';
  description: string;
  phone?: string;
  website?: string;
  location: string;
}

const helpResources: HelpResource[] = [
  {
    id: '1',
    name: 'Schuldhulpverlening Amsterdam',
    type: 'gemeente',
    description: 'Gratis schuldhulp voor inwoners van Amsterdam. Begeleiding bij schulden en budgetproblemen.',
    phone: '020-624 1111',
    website: 'https://www.amsterdam.nl/schuldhulp',
    location: 'Amsterdam'
  },
  {
    id: '2',
    name: 'ZZP Nederland',
    type: 'organisatie',
    description: 'Belangenvereniging voor zelfstandigen. Advies over verzekeringen, belastingen en financiën.',
    phone: '0346-289 589',
    website: 'https://www.zzp-nederland.nl',
    location: 'Landelijk'
  },
  {
    id: '3',
    name: 'Nibud Budget Advies',
    type: 'organisatie',
    description: 'Gratis budgetadvies en hulpmiddelen voor het maken van een persoonlijk budget.',
    website: 'https://www.nibud.nl/consumenten/budgetadvies',
    location: 'Landelijk'
  },
  {
    id: '4',
    name: 'Schuldhulpverlening Rotterdam',
    type: 'gemeente',
    description: 'Ondersteuning bij schulden en financiële problemen voor inwoners van Rotterdam.',
    phone: '14 010',
    website: 'https://www.rotterdam.nl/schuldhulp',
    location: 'Rotterdam'
  },
  {
    id: '5',
    name: 'FNV ZZP',
    type: 'organisatie',
    description: 'Vakbond voor zelfstandigen. Advies over arbeidsomstandigheden en financiële zekerheid.',
    phone: '088-368 2000',
    website: 'https://www.fnvzzp.nl',
    location: 'Landelijk'
  }
];

const HelpPage = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredResources, setFilteredResources] = useState(helpResources);

  const handleSearch = () => {
    if (!searchLocation.trim()) {
      setFilteredResources(helpResources);
      return;
    }

    const filtered = helpResources.filter(resource => 
      resource.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      resource.location === 'Landelijk'
    );
    setFilteredResources(filtered);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'gemeente': return 'bg-blue-100 text-blue-800';
      case 'organisatie': return 'bg-green-100 text-green-800';
      case 'adviseur': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'gemeente': return 'Gemeente';
      case 'organisatie': return 'Organisatie';
      case 'adviseur': return 'Adviseur';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hulp in je buurt
            </h1>
            <p className="text-xl text-gray-600">
              Vind de juiste ondersteuning en hulpinstanties bij jou in de regio
            </p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="text-blue-600" size={24} />
                Zoek hulp in je regio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Vul je woonplaats in (bijv. Amsterdam, Rotterdam)"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1"
                />
                <Button onClick={handleSearch}>
                  Zoeken
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Tip: Laat dit veld leeg om alle landelijke organisaties te zien
              </p>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {filteredResources.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-600 mb-4">
                    Geen specifieke hulp gevonden voor "{searchLocation}".
                  </p>
                  <Button onClick={() => {
                    setSearchLocation("");
                    setFilteredResources(helpResources);
                  }}>
                    Toon alle landelijke organisaties
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {resource.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.type)}`}>
                          {getTypeName(resource.type)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin size={16} />
                        <span className="text-sm">{resource.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {resource.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="text-blue-600" size={16} />
                          <a 
                            href={`tel:${resource.phone}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {resource.phone}
                          </a>
                        </div>
                      )}
                      {resource.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="text-green-600" size={16} />
                          <a 
                            href={resource.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 flex items-center gap-1"
                          >
                            Website bezoeken
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Emergency info */}
          <Card className="mt-12 bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Acute financiële problemen?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                Als je acute financiële problemen hebt, neem dan direct contact op met:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="text-red-600" size={16} />
                  <span className="font-semibold">Schuldhulplijn: 0800-8000</span>
                  <span className="text-sm text-red-600">(gratis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-red-600" size={16} />
                  <a 
                    href="https://www.nvvk.nl/schuldhulplijn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800"
                  >
                    www.nvvk.nl/schuldhulplijn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
