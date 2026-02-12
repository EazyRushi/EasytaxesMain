import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { AuthProvider } from "@/hooks/use-auth";
import NotFound from "@/pages/not-found";

// Page Imports
import Home from "@/pages/Home";

import TaxCompliance from "@/pages/TaxCompliance";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import Onboarding from "@/pages/Onboarding";
import TaxResolution from "@/pages/TaxResolution";
import AssuranceSoc2 from "@/pages/AssuranceSoc2";
import CfoAdvisory from "@/pages/CfoAdvisory";
import Valuations from "@/pages/Valuations";
import UsFormation from "@/pages/UsFormation";
import Questionnaire from "@/pages/Questionnaire";
import EazytaxesAdmin from "@/pages/EazytaxesAdmin";

import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import FormationHome from "@/pages/formation/FormationHome";
import GetStarted from "@/pages/formation/GetStarted";
import Recommendation from "@/pages/formation/Recommendation";

import Careers from "@/pages/Careers";
import JobApplication from "@/pages/JobApplication";
import Blog from "@/pages/Blog";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookieNotice from "@/pages/CookieNotice";
import { CookieConsent } from "@/components/ui/cookie-consent";
import ProfileOnboarding from "@/pages/ProfileOnboarding";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/ustax" component={TaxCompliance} />
      <Route path="/contact" component={Contact} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/tax-resolution" component={TaxResolution} />
      <Route path="/assurance-soc2" component={AssuranceSoc2} />
      <Route path="/cfo-advisory" component={CfoAdvisory} />
      <Route path="/valuations" component={Valuations} />
      <Route path="/us-formation" component={UsFormation} />
      <Route path="/questionnaire" component={Questionnaire} />
      <Route path="/EazytaxesAdmin" component={EazytaxesAdmin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile-onboarding" component={ProfileOnboarding} />

      <Route path="/auth" component={Auth} />
      <Route path="/formation" component={FormationHome} />
      <Route path="/formation/get-started" component={GetStarted} />
      <Route path="/formation/recommendation" component={Recommendation} />

      <Route path="/careers" component={Careers} />
      <Route path="/careers/:jobTitle/apply" component={JobApplication} />
      <Route path="/resources" component={Blog} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-notice" component={CookieNotice} />

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <WhatsAppFloat />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
