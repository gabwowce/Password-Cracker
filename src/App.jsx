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
      
      <div className="z-0 flex flex-col gap-10 w-2/5 p-20">
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
        <div className="flex flex-col bg-black/20 backdrop-blur-md rounded-3xl p-15 text-center gap-5">
          <h1 className="">Slaptažodžių stiprumo analizatorius</h1>
          <PasswordInput password={password} setPassword={setPassword} />
          <button className="text-2xl" onClick={() => setAnalysis(analyzePassword(password))} disabled={!password}>
            Tikrinti slaptažodį
          </button>
          {analysis && <PasswordAnalysis analysis={analysis} />}
        </div>
      </div>
    </div>
  );
}
