
interface Answers {
  income_monthly?: string;
  income_stability?: string;
  fixed_costs?: string;
  emergency_fund?: string;
  disability_insurance?: boolean;
  pension_savings?: boolean;
  debt_amount?: string;
  client_dependency?: string;
  contracts_duration?: string;
  tax_reserves?: boolean;
}

interface Recommendation {
  title: string;
  description: string;
}

interface Resource {
  title: string;
  description: string;
  link?: string;
}

export const calculateRiskScore = (answers: Answers): number => {
  let score = 0;
  
  // Income stability (0-15 points)
  const incomeStability = answers.income_stability;
  if (incomeStability === 'Zeer stabiel') score += 15;
  else if (incomeStability === 'Vrij stabiel') score += 10;
  else if (incomeStability === 'Redelijk wisselend') score += 5;
  
  // Emergency fund (0-20 points)
  const emergencyFund = answers.emergency_fund;
  if (emergencyFund === '> 6 maanden') score += 20;
  else if (emergencyFund === '4-6 maanden') score += 15;
  else if (emergencyFund === '2-3 maanden') score += 10;
  else if (emergencyFund === '1 maand') score += 5;
  
  // Insurance (0-15 points)
  if (answers.disability_insurance) score += 15;
  
  // Pension savings (0-10 points)
  if (answers.pension_savings) score += 10;
  
  // Debt situation (0-15 points)
  const debt = answers.debt_amount;
  if (debt === 'Geen schulden') score += 15;
  else if (debt === '< €5.000') score += 10;
  else if (debt === '€5.000 - €15.000') score += 5;
  
  // Client dependency (0-10 points)
  const clientDep = answers.client_dependency;
  if (clientDep === '< 25%') score += 10;
  else if (clientDep === '25% - 50%') score += 7;
  else if (clientDep === '50% - 75%') score += 3;
  
  // Contract duration (0-10 points)
  const contracts = answers.contracts_duration;
  if (contracts === '> 12 maanden') score += 10;
  else if (contracts === '6-12 maanden') score += 8;
  else if (contracts === '3-6 maanden') score += 5;
  else if (contracts === '1-3 maanden') score += 2;
  
  // Tax reserves (0-5 points)
  if (answers.tax_reserves) score += 5;
  
  return Math.min(score, 100);
};

export const getRiskLevel = (score: number): string => {
  if (score >= 70) return 'Laag';
  if (score >= 40) return 'Gemiddeld';
  return 'Hoog';
};

export const generateRecommendations = (answers: Answers, score: number) => {
  const actions: Recommendation[] = [];
  const resources: Resource[] = [];
  
  // Emergency fund recommendations
  if (answers.emergency_fund === '0 maanden' || answers.emergency_fund === '1 maand') {
    actions.push({
      title: 'Bouw een noodfonds op',
      description: 'Probeer minimaal 3 maanden vaste kosten opzij te zetten voor onverwachte situaties.'
    });
  }
  
  // Insurance recommendations
  if (!answers.disability_insurance) {
    actions.push({
      title: 'Overweeg een arbeidsongeschiktheidsverzekering',
      description: 'Als ZZP\'er ben je niet verplicht verzekerd. Een AOV beschermt je inkomen bij ziekte.'
    });
    resources.push({
      title: 'Informatie over AOV verzekeringen',
      description: 'Vergelijk verschillende verzekeringen en voorwaarden.',
      link: 'https://www.verbondvanverzekeraars.nl'
    });
  }
  
  // Pension recommendations
  if (!answers.pension_savings) {
    actions.push({
      title: 'Start met pensioenopbouw',
      description: 'Als ZZP\'er bouw je niet automatisch pensioen op. Begin zo vroeg mogelijk met sparen.'
    });
  }
  
  // Client dependency
  if (answers.client_dependency === '> 75%') {
    actions.push({
      title: 'Diversifieer je klantenportefeuille',
      description: 'Je bent erg afhankelijk van één klant. Probeer meer klanten te krijgen voor stabiliteit.'
    });
  }
  
  // Tax reserves
  if (!answers.tax_reserves) {
    actions.push({
      title: 'Zet maandelijks geld opzij voor belastingen',
      description: 'Zet ongeveer 25-30% van je omzet apart voor belastingen om verrassingen te voorkomen.'
    });
  }
  
  // General resources
  resources.push({
    title: 'ZZP Nederland',
    description: 'Belangenvereniging voor zelfstandigen met tips en ondersteuning.',
    link: 'https://www.zzp-nederland.nl'
  });
  
  resources.push({
    title: 'Schuldhulpverlening gemeente',
    description: 'Gratis hulp bij financiële problemen via je gemeente.',
    link: 'https://www.rijksoverheid.nl/onderwerpen/schulden/schuldhulpverlening'
  });
  
  if (score < 40) {
    resources.push({
      title: 'Nibud ZZP budget tool',
      description: 'Hulp bij het maken van een budget speciaal voor ZZP\'ers.',
      link: 'https://www.nibud.nl'
    });
  }
  
  return { actions, resources };
};
