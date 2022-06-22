import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import Main from "./components/main";
import { About } from "./components/about";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" index element={<Main data={landingPageData} />} />
        <Route
          path="realizacje:id"
          element={<About data={landingPageData.About} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
