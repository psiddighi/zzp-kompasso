import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, MapPin, Clock, Ticket, Lightbulb, Users, Handshake, Network } from 'lucide-react';

const LiveEventPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white p-8 rounded-lg shadow-lg mb-12 text-center overflow-hidden" style={{ backgroundImage: 'url("https://via.placeholder.com/1200x400?text=Live+Event+Background")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-blue-800 opacity-75"></div>
        <div className="relative z-10 py-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">ZZP KOMPAS LIVE EVENT</h1>
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-down animation-delay-200">TILBURG 2025</h2>
          <p className="text-2xl mb-4 animate-fade-in-down animation-delay-400">Jouw weg naar financiële rust begint hier</p>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in-down animation-delay-600">Ben jij ZZP'er? Kom naar het gratis event op [datum] in Tilburg en krijg inzichten, tips én directe hulp voor jouw financiële situatie.</p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Wat kun je verwachten?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CheckCircle2 className="text-green-500 mb-4" size={48} />
            <p className="text-xl font-semibold text-center">Gratis financiële check-up ter plekke</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Lightbulb className="text-yellow-500 mb-4" size={48} />
            <p className="text-xl font-semibold text-center">Inspirerende sprekers & ervaringsverhalen</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Users className="text-purple-500 mb-4" size={48} />
            <p className="text-xl font-semibold text-center">Persoonlijk advies van professionals</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Handshake className="text-red-500 mb-4" size={48} />
            <p className="text-xl font-semibold text-center">Gemeentelijke schuldhulpverlening aanwezig</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Network className="text-blue-500 mb-4" size={48} />
            <p className="text-xl font-semibold text-center">Netwerken met andere ZZP'ers</p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="mb-12 text-center bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Evenement Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <MapPin className="text-blue-600 mb-2" size={32} />
            <span className="text-xl font-semibold text-blue-600">Locatie:</span>
            <p className="text-lg">LocHal, Tilburg</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-blue-600 mb-2" size={32} />
            <span className="text-xl font-semibold text-blue-600">Tijd:</span>
            <p className="text-lg">13:00 - 17:30</p>
          </div>
          <div className="flex flex-col items-center">
            <Ticket className="text-blue-600 mb-2" size={32} />
            <span className="text-xl font-semibold text-blue-600">Toegang:</span>
            <p className="text-lg">Gratis (wel even aanmelden)</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-12 bg-gray-100 p-8 rounded-lg shadow-inner">
        <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Investering in Jouw Toekomst</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-blue-600 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold mb-4 text-blue-700">Eerste keer</h4>
            <p className="text-5xl font-extrabold text-blue-600 mb-4">€70,-</p>
            <p className="text-gray-700 text-lg">Speciaal introductietarief voor nieuwe deelnemers. Ontdek de voordelen van ZZP Kompas!</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold mb-4 text-green-700">Tweede keer</h4>
            <p className="text-5xl font-extrabold text-green-500 mb-4">€80,-</p>
            <p className="text-gray-700 text-lg">Voor terugkerende deelnemers. Blijf groeien en netwerken met onze community.</p>
          </div>
        </div>
      </section>

      {/* Sign-up Section */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Meld je aan voor het Live Event</h3>
        <form className="max-w-lg mx-auto space-y-4">
          <Input type="text" placeholder="Naam" className="p-3 border rounded-md" />
          <Input type="email" placeholder="E-mail" className="p-3 border rounded-md" />
          <Input type="tel" placeholder="Telefoonnummer (optioneel)" className="p-3 border rounded-md" />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md text-lg">Meld je aan</Button>
        </form>
        <p className="text-center text-sm mt-4">Of meld je aan via: <a href="https://www.zzpkompas.nl/event-tiiburg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.zzpkompas.nl/event-tiiburg</a></p>
      </section>

      {/* Sponsorship Section */}
      <section className="mb-12 text-center bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Samenwerkingen & Sponsoren</h3>
        <p className="text-lg mb-4">Dit project is een samenwerking met de <strong>Gemeente Tilburg</strong>.</p>
        <p className="text-lg mb-4">Wij werken samen met betrouwbare partners die ZZP'ers ondersteunen bij hun financiële welzijn en ondernemerschap. Onze partners zijn onder andere:</p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
          <div className="flex flex-col items-center">
            {/* Kamer van Koophandel - enhanced briefcase with gradient and shadow */}
            <svg width="80" height="80" viewBox="0 0 64 64" className="mb-2">
              <defs>
                <linearGradient id="kvk-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa"/>
                  <stop offset="100%" stopColor="#2563eb"/>
                </linearGradient>
                <filter id="kvk-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#1e40af" flood-opacity="0.25"/>
                </filter>
              </defs>
              <rect x="8" y="20" width="48" height="28" rx="6" fill="url(#kvk-gradient)" filter="url(#kvk-shadow)"/>
              <rect x="16" y="28" width="32" height="12" rx="3" fill="#fff" opacity="0.7"/>
              <rect x="24" y="16" width="16" height="8" rx="2" fill="#1e40af"/>
              <rect x="28" y="12" width="8" height="8" rx="2" fill="#60a5fa"/>
            </svg>
            <p className="text-md font-semibold">Kamer van Koophandel</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Schuldhulp Nederland - enhanced helping hands with gradient and shadow */}
            <svg width="80" height="80" viewBox="0 0 64 64" className="mb-2">
              <defs>
                <radialGradient id="shn-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#bbf7d0"/>
                  <stop offset="100%" stopColor="#22c55e"/>
                </radialGradient>
                <filter id="shn-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#166534" flood-opacity="0.2"/>
                </filter>
              </defs>
              <ellipse cx="32" cy="32" rx="28" ry="24" fill="url(#shn-gradient)" filter="url(#shn-shadow)"/>
              <path d="M20 36c4 0 4-6 8-6s4 6 8 6 4-6 8-6" stroke="#fff" strokeWidth="3" fill="none"/>
              <ellipse cx="24" cy="36" rx="2" ry="3" fill="#fff"/>
              <ellipse cx="40" cy="36" rx="2" ry="3" fill="#fff"/>
            </svg>
            <p className="text-md font-semibold">Schuldhulp Nederland</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Gemeente Tilburg - enhanced cityscape with gradient and shadow */}
            <svg width="80" height="80" viewBox="0 0 64 64" className="mb-2">
              <defs>
                <linearGradient id="tilburg-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fdba74"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>
                <filter id="tilburg-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#ea580c" flood-opacity="0.2"/>
                </filter>
              </defs>
              <rect x="10" y="34" width="10" height="14" fill="url(#tilburg-gradient)" filter="url(#tilburg-shadow)"/>
              <rect x="26" y="26" width="12" height="22" fill="#f59e42"/>
              <rect x="44" y="38" width="8" height="10" fill="#ea580c"/>
              <rect x="30" y="18" width="4" height="8" fill="#fdba74"/>
              <rect x="36" y="18" width="2" height="8" fill="#fdba74"/>
              <circle cx="32" cy="44" r="3" fill="#fff" opacity="0.7"/>
            </svg>
            <p className="text-md font-semibold">Gemeente Tilburg</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Rabobank - enhanced coin and hand with gradient and shadow */}
            <svg width="80" height="80" viewBox="0 0 64 64" className="mb-2">
              <defs>
                <radialGradient id="rabo-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef9c3"/>
                  <stop offset="100%" stopColor="#facc15"/>
                </radialGradient>
                <filter id="rabo-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#fbbf24" flood-opacity="0.2"/>
                </filter>
              </defs>
              <circle cx="48" cy="20" r="10" fill="url(#rabo-gradient)" filter="url(#rabo-shadow)"/>
              <rect x="12" y="36" width="40" height="12" rx="6" fill="#fde047"/>
              <ellipse cx="32" cy="48" rx="16" ry="6" fill="#fbbf24"/>
              <rect x="28" y="44" width="8" height="8" rx="2" fill="#fffde3"/>
              <ellipse cx="48" cy="20" rx="6" ry="6" fill="#fff" opacity="0.3"/>
            </svg>
            <p className="text-md font-semibold">Rabobank</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Nibud - enhanced pie chart/info with gradient and shadow */}
            <svg width="80" height="80" viewBox="0 0 64 64" className="mb-2">
              <defs>
                <radialGradient id="nibud-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ddd6fe"/>
                  <stop offset="100%" stopColor="#a78bfa"/>
                </radialGradient>
                <filter id="nibud-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#7c3aed" flood-opacity="0.2"/>
                </filter>
              </defs>
              <circle cx="32" cy="32" r="28" fill="url(#nibud-gradient)" filter="url(#nibud-shadow)"/>
              <path d="M32 32V8A24 24 0 1 1 8 32h24z" fill="#7c3aed"/>
              <rect x="30" y="28" width="4" height="16" rx="2" fill="#fff"/>
              <circle cx="32" cy="48" r="2" fill="#fff"/>
              <ellipse cx="32" cy="32" rx="18" ry="18" fill="#fff" opacity="0.08"/>
            </svg>
            <p className="text-md font-semibold">Nibud</p>
          </div>
        </div>
        <p className="text-lg mt-6">Interesse in sponsoring? Neem contact met ons op!</p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Contact</h3>
        <p className="text-center mb-4">Heeft u vragen over het evenement of ZZP Kompas? Neem gerust contact met ons op.</p>
        <form className="max-w-lg mx-auto space-y-4">
          <Input type="text" placeholder="Uw Naam" className="p-3 border rounded-md" />
          <Input type="email" placeholder="Uw E-mail" className="p-3 border rounded-md" />
          <Textarea placeholder="Uw Bericht" className="p-3 border rounded-md min-h-[100px]" />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md text-lg">Verstuur Bericht</Button>
        </form>
        <div className="text-center mt-6">
          <p className="text-lg">ZZP Kompas</p>
          <p className="text-sm text-gray-600">Vertrouwd. Onathankelijk. Voor jou.</p>
        </div>
      </section>
    </div>
  );
};

export default LiveEventPage;