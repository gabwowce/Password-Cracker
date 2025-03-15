import { useState, useEffect } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordAnalysis from "./components/PasswordAnalysis";
import ToolsComparison from "./components/ToolsComparison";
import PasswordLengthImpact from "./components/PasswordLengthImpact";
import ComplexityImpact from "./components/ComplexityImpact";
import SecurityRecommendations from "./components/SecurityRecommendations";
import analyzePassword from "./utils/analyzePassword";
import "./App.css";
import MouseLightEffect from "./components/MouseLightEffect";
import GlobalNetwork from "./components/GlobalNetwork";

export default function App() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState(null);

  // 🔹 Kiekvieną kartą pasikeitus slaptažodžiui, analizuojame automatiškai
  useEffect(() => {
    if (password) {
      setAnalysis(analyzePassword(password));
    } else {
      setAnalysis(null); // Jei nėra slaptažodžio, nerodome analizės
    }
  }, [password]);

  return (
    <div className="app-container">
      {/* GlobalNetwork kaip fonas */}
      <div className="background-network">
        <GlobalNetwork />
      </div>

      <div className="z-0 flex flex-col justify-center gap-10 w-2/5 p-20">
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
          <PasswordInput 
            password={password} 
            setPassword={setPassword} 
            strengthLevel={analysis?.stiprumoLygis} 
          />

          {analysis && <PasswordAnalysis analysis={analysis} />}
        </div>
      </div>
    </div>
  );
}
