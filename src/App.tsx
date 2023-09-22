import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import AuthContext from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {!user && <LandingPage />}
      {user && (
        <div id="container">
          <Header />
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
