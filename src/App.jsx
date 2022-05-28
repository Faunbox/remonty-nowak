import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import CookieConsent from "react-cookie-consent";

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dom/event-handler";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Wyrażam zgodę"
        overlay
        cookieName="analitics"
        enableDeclineButton
        declineButtonText="Nie wyrażam zgody"
        onDecline={() => window.location.replace("https://google.pl")}
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#3b3e50", fontSize: "13px" }}
        expires={150}
      >
        Strona używa plików cookie w celu zbierania danych analitycznych.
      </CookieConsent>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
