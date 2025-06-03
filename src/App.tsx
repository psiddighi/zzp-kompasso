
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import KompasPage from "./pages/KompasPage";
import BudgetBuddyPage from "./pages/BudgetBuddyPage";
import StressSignaalPage from "./pages/StressSignaalPage";
import VergelijkingPage from "./pages/VergelijkingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/kompas" element={<KompasPage />} />
              <Route path="/budgetbuddy" element={<BudgetBuddyPage />} />
              <Route path="/stresssignaal" element={<StressSignaalPage />} />
              <Route path="/vergelijking" element={<VergelijkingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
