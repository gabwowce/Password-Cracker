// src/App.jsx
import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordAnalysis from "./components/PasswordAnalysis";
import ToolsComparison from "./components/ToolsComparison";
import PasswordLengthImpact from "./components/PasswordLengthImpact";
import ComplexityImpact from "./components/ComplexityImpact";
import SecurityRecommendations from "./components/SecurityRecommendations";
import PresentationIntro from "./components/PresentationIntro";
import analyzePassword from "./utils/analyzePassword";
import "./App.css";
import MouseLightEffect from "./components/MouseLightEffect";
import GlobalNetwork from "./components/GlobalNetwork";

export default function App() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="app-container">
      {/* GlobalNetwork kaip fonas */}
      <div className="background-network">
        <GlobalNetwork />
      </div>
      
      <div className="sidebar">
        {/* <h1 style={{ position: "relative", zIndex: 1, color: "#fff" }}>
          Slaptažodžių Saugumo Analizė
        </h1> */}
        {/* <PresentationIntro /> */}
        <ToolsComparison />
        <PasswordLengthImpact />
        <ComplexityImpact />
        <SecurityRecommendations />
      </div>
      
      {/* Efektas bus tik ant content */}
      <div className="content">
        <MouseLightEffect />
        <div className="password-analyzer">
          <h1>Slaptažodžių Stiprumo Analizatorius</h1>
          <PasswordInput password={password} setPassword={setPassword} />
          <button onClick={() => setAnalysis(analyzePassword(password))} disabled={!password}>
            Tikrinti slaptažodį
          </button>
          {analysis && <PasswordAnalysis analysis={analysis} />}
        </div>
      </div>
    </div>
  );
}
