import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";

// Page Imports
import Home from "@/pages/Home";
import StartHere from "@/pages/StartHere";
import TaxCompliance from "@/pages/TaxCompliance";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import Onboarding from "@/pages/Onboarding";
import TaxResolution from "@/pages/TaxResolution";
import AssuranceSoc2 from "@/pages/AssuranceSoc2";
import CfoAdvisory from "@/pages/CfoAdvisory";
import Valuations from "@/pages/Valuations";
import UsFormation from "@/pages/UsFormation";
import AboutUs from "@/pages/AboutUs";
import Careers from "@/pages/Careers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/start" component={StartHere} />
      <Route path="/tax-compliance" component={TaxCompliance} />
      <Route path="/contact" component={Contact} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/tax-resolution" component={TaxResolution} />
      <Route path="/assurance-soc2" component={AssuranceSoc2} />
      <Route path="/cfo-advisory" component={CfoAdvisory} />
      <Route path="/valuations" component={Valuations} />
      <Route path="/us-formation" component={UsFormation} />
      <Route path="/about" component={AboutUs} />
      <Route path="/careers" component={Careers} />

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
