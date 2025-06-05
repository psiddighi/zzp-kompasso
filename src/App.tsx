
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ScanPage from "./pages/ScanPage";
import ResultPage from "./pages/ResultPage";
import InfoPage from "./pages/InfoPage";
import HelpPage from "./pages/HelpPage";
import NotFound from "./pages/NotFound";
import LiveEventPage from "./pages/LiveEventPage";

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
              <Route path="/scan" element={<ScanPage />} />
              <Route path="/resultaat" element={<ResultPage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/hulp" element={<HelpPage />} />
              <Route path="/live-event" element={<LiveEventPage />} />
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
