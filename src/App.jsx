import { useState, useEffect } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordAnalysis from "./components/PasswordAnalysis";
import PasswordCrackingTools from "./components/ToolsComparison";
import PasswordLengthImpact from "./components/PasswordLengthImpact";
import ComplexityImpact from "./components/ComplexityImpact";
import SecurityRecommendations from "./components/SecurityRecommendations";
import analyzePassword from "./utils/analyzePassword";
import "./App.css";
import MouseLightEffect from "./components/MouseLightEffect";
import GlobalNetwork from "./components/GlobalNetwork";
import CrackingTechniques from "./components/CrackingTechniques";

export default function App() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [activeSection, setActiveSection] = useState("cracking");

  useEffect(() => {
    if (password) {
      setAnalysis(analyzePassword(password));
    } else {
      setAnalysis(null);
    }
  }, [password]);

  const renderSection = () => {
    switch (activeSection) {
      case "cracking":
        return <CrackingTechniques />;
      case "tools":
        return <PasswordCrackingTools />;
      case "length":
        return <PasswordLengthImpact />;
      case "complexity":
        return <ComplexityImpact />;
      case "security":
        return <SecurityRecommendations />;
      case "breaches":
        return <DataBreachInfo />;
      case "tips":
        return <PasswordCreationTips />;
      case "manager":
        return <PasswordManagers />;

      case "analyzer":
        
        return (
          <div className="w-full max-w-2xl mx-auto">
            
            <div className="flex flex-col bg-black/20 backdrop-blur-md rounded-3xl p-8 text-center gap-5">
              <h1 className="text-xl font-bold">Slaptažodžių stiprumo analizatorius</h1>
              <PasswordInput 
                password={password} 
                setPassword={setPassword} 
                strengthLevel={analysis?.stiprumoLygis} 
              />
              {analysis && <PasswordAnalysis analysis={analysis} />}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen relative bg-transparent">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <MouseLightEffect />
        <GlobalNetwork />
      </div>
  
      {/* Sidebar */}
      <div className="w-full md:w-72 p-6 bg-black/30 backdrop-blur-md border-r border-gray-700 flex flex-col gap-4 min-h-screen">
        <h2 className="text-lg font-semibold mb-2">📘 Informacija</h2>
        <button onClick={() => setActiveSection("cracking")} className="text-left hover:text-teal-300">🔹 Laužymo metodai</button>
        <button onClick={() => setActiveSection("tools")} className="text-left hover:text-teal-300">🔹 Įrankių palyginimas</button>
        <button onClick={() => setActiveSection("length")} className="text-left hover:text-teal-300">🔹 Ilgio įtaka</button>
        <button onClick={() => setActiveSection("complexity")} className="text-left hover:text-teal-300">🔹 Kompleksiškumas</button>
        <button onClick={() => setActiveSection("security")} className="text-left hover:text-teal-300">🔹 Apsaugos patarimai</button>

        <button onClick={() => setActiveSection("breaches")} className="text-left hover:text-teal-300">🔹 Duomenų nutekėjimai</button>
        <button onClick={() => setActiveSection("tips")} className="text-left hover:text-teal-300">🔹 Slaptažodžio kūrimo patarimai</button>
        <button onClick={() => setActiveSection("manager")} className="text-left hover:text-teal-300">🔹 Slaptažodžių tvarkyklės</button>

        
        <button onClick={() => setActiveSection("analyzer")} className="text-left hover:text-teal-300">🔹 Slaptažodžio analizatorius</button>
      </div>
  
      {/* Main content */}
      <main className="flex-1 flex justify-center items-start p-10">
        <div className="w-full max-w-4xl">{renderSection()}</div>
      </main>
    </div>
  );
  
}
