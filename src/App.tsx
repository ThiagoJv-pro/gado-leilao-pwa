import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CattleDetail from "./pages/CattleDetail";
import Live from "./pages/Live";
import Account from "./pages/Account";
import Payments from "./pages/Payments";
import Calendar from "./pages/Calendar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/bnout-leiloes">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cattle/:id" element={<CattleDetail />} />
          <Route path="/live" element={<Live />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payments" element={<Payments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
