
import React, { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent") === "true";
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
    toast({
      title: "Cookies accepted",
      description: "Your preferences have been saved",
    });
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
    toast({
      title: "Cookies declined",
      description: "Only essential cookies will be used",
    });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto max-w-[calc(100%-2rem)] md:max-w-2xl">
      <div className="bg-stoic-darkgray rounded-lg border border-stoic-lightgray/20 p-5 shadow-lg backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Cookie className="h-5 w-5 text-stoic-green" />
            <h3 className="font-primaryItalic text-lg font-medium text-white">Cookie Consent</h3>
          </div>
          <button
            onClick={declineCookies}
            className="text-stoic-lightgray hover:text-white transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-sm text-gray-300 mb-4">
          We use cookies to enhance your experience on our website. By continuing to browse, you consent to our use of cookies in accordance with our{" "}
          <a href="/privacy" className="text-stoic-green hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={acceptCookies} 
            className="bg-stoic-green hover:bg-stoic-green-dark text-white"
          >
            Accept All
          </Button>
          <Button 
            onClick={declineCookies} 
            variant="outline" 
            className="border-stoic-lightgray/30 text-white hover:bg-stoic-gray/50"
          >
            Essential Only
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
