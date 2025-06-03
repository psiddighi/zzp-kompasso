
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  question: string;
  type: 'multiple' | 'range' | 'boolean';
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

const questions: Question[] = [
  {
    id: 'income_monthly',
    question: 'Wat is je gemiddelde maandinkomen als ZZP\'er?',
    type: 'multiple',
    options: ['< €1.500', '€1.500 - €2.500', '€2.500 - €4.000', '€4.000 - €6.000', '> €6.000']
  },
  {
    id: 'income_stability',
    question: 'Hoe stabiel is je inkomen?',
    type: 'multiple',
    options: ['Zeer wisselend', 'Redelijk wisselend', 'Vrij stabiel', 'Zeer stabiel']
  },
  {
    id: 'fixed_costs',
    question: 'Wat zijn je totale vaste kosten per maand? (huur/hypotheek, verzekeringen, etc.)',
    type: 'multiple',
    options: ['< €800', '€800 - €1.200', '€1.200 - €1.800', '€1.800 - €2.500', '> €2.500']
  },
  {
    id: 'emergency_fund',
    question: 'Hoeveel maanden kun je je vaste kosten betalen zonder inkomen?',
    type: 'multiple',
    options: ['0 maanden', '1 maand', '2-3 maanden', '4-6 maanden', '> 6 maanden']
  },
  {
    id: 'disability_insurance',
    question: 'Heb je een arbeidsongeschiktheidsverzekering (AOV)?',
    type: 'boolean'
  },
  {
    id: 'pension_savings',
    question: 'Spaar je actief voor je pensioen?',
    type: 'boolean'
  },
  {
    id: 'debt_amount',
    question: 'Heb je schulden (excl. hypotheek)?',
    type: 'multiple',
    options: ['Geen schulden', '< €5.000', '€5.000 - €15.000', '€15.000 - €30.000', '> €30.000']
  },
  {
    id: 'client_dependency',
    question: 'Hoeveel procent van je inkomen komt van je grootste klant?',
    type: 'multiple',
    options: ['< 25%', '25% - 50%', '50% - 75%', '> 75%']
  },
  {
    id: 'contracts_duration',
    question: 'Hoe ver vooruit heb je werk/opdrachten zeker?',
    type: 'multiple',
    options: ['< 1 maand', '1-3 maanden', '3-6 maanden', '6-12 maanden', '> 12 maanden']
  },
  {
    id: 'tax_reserves',
    question: 'Zet je maandelijks geld opzij voor belastingen?',
    type: 'boolean'
  }
];

const ScanPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Scan completed, go to results
      navigate('/resultaat', { state: { answers } });
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const isAnswered = answers[question.id] !== undefined;

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Vraag {currentQuestion + 1} van {questions.length}</span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {question.type === 'multiple' && (
                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        answers[question.id] === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {question.type === 'boolean' && (
                <div className="space-y-3">
                  {['Ja', 'Nee'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option === 'Ja')}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        answers[question.id] === (option === 'Ja')
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Vorige
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className="flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? 'Resultaat bekijken' : 'Volgende'}
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
