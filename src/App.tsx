// src/App.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MumbaiEdition from "./components/Edition/MumbaiEdition";
import BengaluruEdition from "./components/Edition/BengaluruEdition";
import GurugramEdition from "./components/Edition/GurugramEdition";
import WatchOnDemand from "./pages/WatchOnDemand";
import ScrollManager from "./components/ScrollManager";


import DelhiEdition26 from "./pages/DelhiEdition26";
import BangaloreEdition from "./pages/BangaloreEdition";
import BengaluruEdition26 from "./pages/BengaluruEdition26";


import DelhiEdition26_1 from "./pages/DelhiEdition26_1";
import GurugramEdition26Redesign from "./pages/GurugramEdition26Redesign";
import GurugramEdition26 from "./pages/GurugramEdition26";
import GurugramEdition2026a from "./pages/GurugramEdition26_a";
import SinghaniyaTest from "./pages/SinghaniyaTest";
import Final from "./pages/Gurugram_Final";
import WatchPage from "./components/gurugram_final/WatchPage";



import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { RequireAuth } from "@/components/layout/RequireAuth";
import PartnerForm from "./pages/PartnerForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CodeOfConduct from "./pages/CodeOfConduct";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/partner-form" element={<PartnerForm />} />
        {/* Public site routes */}
        <Route path="/" element={<DelhiEdition26_1 />} />

        <Route path="/new" element={<GurugramEdition26Redesign />} />
        <Route path="/gurugram-2026" element={<GurugramEdition26 />} />
        <Route path="/new-a" element={<GurugramEdition2026a />} />
        <Route path="/agenda-registration-form" element={<SinghaniyaTest />} />
        <Route path="/final" element={<Final />} />
        <Route path="/watch" element={<WatchPage />} />

        <Route path="/previous/bangalore-2026" element={<BengaluruEdition26/>} />
        <Route path="/previous/delhi-2026" element={<DelhiEdition26 />} />
        <Route path="/previous/bangalore-2025" element={<BangaloreEdition/>} />
        <Route path="/previous/mumbai-2024" element={<MumbaiEdition />} />
        <Route path="/previous/bangalore-2024" element={<BengaluruEdition />} />
        <Route path="/previous/delhi-ncr-2024" element={<GurugramEdition />} />
        <Route path="/watch-on-demand" element={<WatchOnDemand />} />
        <Route path="/previous/mumbai-2025" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />


        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
