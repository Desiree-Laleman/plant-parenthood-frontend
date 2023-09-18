import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  return (
    <div className="App">
      {showLandingPage && (
        <LandingPage setShowLandingPage={setShowLandingPage} />
      )}
      {!showLandingPage && (
        <>
          <Header setShowLandingPage={setShowLandingPage} />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
