// src/App.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Page stylesheets imported here, in their original order, so the single CSS
// file keeps exactly the same rule order as before pages were lazy-loaded.
import "keen-slider/keen-slider.min.css";
import "@/styles/mystyle.css";
import "@/styles/aboutfaq.css";
import "@/styles/gurugram_final.css";

import { HelmetProvider } from "react-helmet-async";
import SEO from "@/components/SEO";


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import NotFound from "./pages/NotFound";
const WatchOnDemand = lazy(() => import("./pages/WatchOnDemand"));
import ScrollManager from "./components/ScrollManager";



const GurugramEdition = lazy(() => import("./components/Edition/GurugramEdition"));
const BengaluruEdition = lazy(() => import("./components/Edition/BengaluruEdition"));
const MumbaiEdition = lazy(() => import("./components/Edition/MumbaiEdition"));
const MumbaiEdition25 = lazy(() => import("./pages/Index"));
const BangaloreEdition = lazy(() => import("./pages/BangaloreEdition"));
const DelhiEdition26 = lazy(() => import("./pages/DelhiEdition26"));
const BengaluruEdition26 = lazy(() => import("./pages/BengaluruEdition26"));


const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Faq = lazy(() => import("@/pages/Faq"));

import DelhiGurugram_Edition26 from "./pages/DelhiGurugram_Edition26";
const DelhiGurugram_Edition26_Speakers = lazy(() => import("./pages/DelhiGurugram_Edition26_Speakers"));
const DelhiGurugram_Edition26_Agenda = lazy(() => import("./pages/DelhiGurugram_Edition26_Agenda"));
const WatchPage = lazy(() => import("./components/gurugram_final/WatchPage"));
const AllSpeakers = lazy(() => import("@/components/gurugram_final/AllSpeakers"));


const Login = lazy(() => import("./pages/auth/Login"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
import { RequireAuth } from "@/components/layout/RequireAuth";
const PartnerForm = lazy(() => import("./pages/PartnerForm"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const CodeOfConduct = lazy(() => import("./pages/CodeOfConduct"));






const queryClient = new QueryClient();

const App: React.FC = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SEO />
        <ScrollManager />
  
        {/* Homepage (with the registration form) stays in the main bundle;
            every other page is downloaded only when it is visited. */}
        <Suspense fallback={<div className="min-h-screen" />}>
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
          <Route path="/" element={<DelhiGurugram_Edition26 />} />

          {/* <Route path="/common-forms" element={<SinghaniyaTest />} /> */}

          <Route path="/delhi-gurugram_edition-26-agenda" element={<DelhiGurugram_Edition26_Agenda />} />
          <Route path="/delhi-gurugram_edition-26-speakers" element={<DelhiGurugram_Edition26_Speakers />} />
          <Route path="/watch" element={<WatchPage />} />
		  <Route path="/all-speakers" element={<AllSpeakers />} />

<Route path="/about-us" element={<AboutUs />} />
<Route path="/faq" element={<Faq />} />

          <Route path="/previous/bangalore-2026" element={<BengaluruEdition26/>} />
          <Route path="/previous/delhi-2026" element={<DelhiEdition26 />} />
          <Route path="/previous/bangalore-2025" element={<BangaloreEdition/>} />
          <Route path="/previous/mumbai-2025" element={<MumbaiEdition25 />} />
          <Route path="/previous/mumbai-2024" element={<MumbaiEdition />} />
          <Route path="/previous/bangalore-2024" element={<BengaluruEdition />} />
          <Route path="/previous/delhi-ncr-2024" element={<GurugramEdition />} />
          
          <Route path="/watch-On-Demand-videos" element={<WatchOnDemand />} />
          <Route path="/watch-on-demand" element={<WatchOnDemand />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />


          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
