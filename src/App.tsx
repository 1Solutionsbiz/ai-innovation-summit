
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MumbaiEdition from "./components/Edition/MumbaiEdition";
import BengaluruEdition from "./components/Edition/BengaluruEdition";
import GurugramEdition from "./components/Edition/GurugramEdition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/previous/mumbai-2024" element={<MumbaiEdition />} /> */}
        <Route path="/previous/bengaluru-2024" element={<BengaluruEdition />} />
        {/* <Route path="/previous/gurugram-2024" element={<GurugramEdition />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
