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
//import { DataBreachInfo } from "./components/DataBreachInfo";
import { PasswordCreationTips } from './components/PasswordCreationTips';
import { PasswordManagers } from './components/PasswordManagers';
import slaptLogo from "./assets/slapt-logo2.png";

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
      // case "security":
      //   return <SecurityRecommendations />;
     // case "breaches":
      //  return <DataBreachInfo />;
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

  const sidebarButton = "text-white text-left px-4 py-2 rounded-lg transition";


  const getButtonClass = (section) =>
    `${sidebarButton} ${activeSection === section ? "bg-[#182842] font-semibold" : "bg-black/40 hover:bg-[#182842]"}`;
  
  
  return (
    <div className="flex min-h-screen relative bg-transparent">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <MouseLightEffect />
        <GlobalNetwork />
      </div>
  
      {/* Sidebar */}
      <div className="w-full md:w-72 p-6 bg-black/30 backdrop-blur-md border-r flex flex-col gap-4 min-h-screen">
        <img src={slaptLogo} alt="Logo" className="w-60 h-auto mx-auto mb-4" />

        <button onClick={() => setActiveSection("cracking")} className={getButtonClass("cracking")}>Laužymo metodai</button>
        <button onClick={() => setActiveSection("tools")} className={getButtonClass("tools")}>Įrankių palyginimas</button>
        <button onClick={() => setActiveSection("length")} className={getButtonClass("length")}> Ilgio įtaka</button>
        <button onClick={() => setActiveSection("complexity")} className={getButtonClass("complexity")}> Kompleksiškumas</button>
        {/* <button onClick={() => setActiveSection("security")} className="text-left hover:text-teal-300">🔹 Apsaugos patarimai</button> */}

        <button onClick={() => setActiveSection("breaches")} className={getButtonClass("breaches")}> Duomenų nutekėjimai</button>
        <button onClick={() => setActiveSection("tips")} className={getButtonClass("tips")}> Slaptažodžio kūrimo patarimai</button>
        <button onClick={() => setActiveSection("manager")} className={getButtonClass("manager")}> Slaptažodžių tvarkyklės</button>

        
        <button onClick={() => setActiveSection("analyzer")} className={getButtonClass("analyzer")}> Slaptažodžio analizatorius</button>
      </div>
  
      {/* Main content */}
      <main className="flex-1 flex justify-center items-start p-10">
        <div className="w-full max-w-4xl">{renderSection()}</div>
      </main>
    </div>
  );
  
}
