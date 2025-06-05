"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hallo! Ik ben de ZZP Kompas assistent. Hoe kan ik je vandaag helpen?",
    isUser: false,
  },
]

const botResponses: Record<string, string[]> = {
  default: [
    "Ik kan je helpen met vragen over je financiële situatie als ZZP'er.",
    "Wil je meer weten over verzekeringen, belastingen of buffers?",
    "Je kunt ook de financiële scan starten om meer inzicht te krijgen in je situatie.",
  ],
  verzekering: [
    "Als ZZP'er is een arbeidsongeschiktheidsverzekering (AOV) belangrijk om je inkomen te beschermen bij ziekte.",
    "Er zijn verschillende soorten verzekeringen voor ZZP'ers, zoals aansprakelijkheidsverzekering en rechtsbijstandverzekering.",
    "Wist je dat sommige brancheverenigingen collectieve verzekeringen aanbieden met korting?",
  ],
  belasting: [
    "Vergeet niet om 21% btw en ongeveer 30% inkomstenbelasting apart te zetten van je inkomsten.",
    "Als ZZP'er kun je veel zakelijke kosten aftrekken, zoals je werkruimte, apparatuur en reiskosten.",
    "De zelfstandigenaftrek is in 2024 €5.030. Dit bedrag wordt de komende jaren afgebouwd.",
  ],
  buffer: [
    "Experts raden aan om minimaal 3-6 maanden aan vaste lasten als buffer te hebben.",
    "Een financiële buffer beschermt je tegen periodes zonder opdrachten of onverwachte uitgaven.",
    "Begin klein: zet elke maand een vast bedrag opzij om je buffer op te bouwen.",
  ],
  pensioen: [
    "Als ZZP'er moet je zelf je pensioen regelen. Je kunt hiervoor sparen via banksparen of beleggen.",
    "De jaarruimte geeft aan hoeveel je fiscaal voordelig kunt inleggen voor je pensioen.",
    "Overweeg om een deel van je winst te reserveren voor later via een pensioenrekening.",
  ],
  scan: [
    "De financiële scan duurt slechts 5 minuten en geeft je direct inzicht in je situatie.",
    "Na de scan krijg je persoonlijke tips en adviezen om je financiële gezondheid te verbeteren.",
    "Je kunt de scan starten door naar de 'Scan' pagina te gaan in het hoofdmenu.",
  ],
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage = generateBotResponse(input)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: botMessage,
          isUser: false,
        },
      ])
    }, 1000)
  }

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    // Check for keywords and return appropriate response
    if (lowerInput.includes("verzekering") || lowerInput.includes("aov")) {
      return getRandomResponse("verzekering")
    } else if (lowerInput.includes("belasting") || lowerInput.includes("btw") || lowerInput.includes("aftrek")) {
      return getRandomResponse("belasting")
    } else if (lowerInput.includes("buffer") || lowerInput.includes("sparen") || lowerInput.includes("reserve")) {
      return getRandomResponse("buffer")
    } else if (lowerInput.includes("pensioen") || lowerInput.includes("oudedagsreserve")) {
      return getRandomResponse("pensioen")
    } else if (lowerInput.includes("scan") || lowerInput.includes("test")) {
      return getRandomResponse("scan")
    } else {
      return getRandomResponse("default")
    }
  }

  const getRandomResponse = (category: string): string => {
    const responses = botResponses[category] || botResponses.default
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg border-blue-200">
          <CardHeader className="bg-blue-600 text-white p-4 flex flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <h3 className="font-medium">ZZP Kompas Assistent</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-blue-700"
            >
              <X size={18} />
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <div className="flex w-full gap-2">
              <Input
                placeholder="Typ je vraag..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Send size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  )
}
