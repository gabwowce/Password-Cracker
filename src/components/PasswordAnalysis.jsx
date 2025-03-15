import React from "react";
import { FiHash, FiClock, FiLock, FiAlertCircle, FiCheckCircle } from "react-icons/fi"; // Lucide style icons

const PasswordAnalysis = ({ analysis }) => {
  // Funkcija nustatyti spalvą pagal stiprumo lygį
  const getStrengthColor = (strengthLevel) => {
    if (strengthLevel === "Labai silpnas" || strengthLevel === "Silpnas") return "text-red-500";
    return "text-green-500"; // Standartinė spalva
  };

  return (
    <div className="rounded-md mt-5 mx-auto text-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <tbody>
            {/* Slaptažodžio ilgis */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiHash /> Slaptažodžio ilgis:
              </td>
              <td className="p-3">{analysis.ilgis} simbolių</td>
            </tr>

            {/* Simbolių įvairovė */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiCheckCircle /> Sudėtis:
              </td>
              <td className="p-3">
                {analysis.turiSimbolius && "Simboliai, "}
                {analysis.turiSkaicius && "Skaičiai, "}
                {analysis.turiDidziasRaides && "Didžiosios raidės, "}
                {analysis.turiMazasRaides && "Mažosios raidės"}
              </td>
            </tr>

            {/* Nulaužimo laikas skirtingoms atakoms */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiClock /> Nulaužimo laikas (CPU):
              </td>
              <td className="p-3">{analysis.nulauzimoLaikasCPU}</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiClock /> Nulaužimo laikas (GPU):
              </td>
              <td className="p-3">{analysis.nulauzimoLaikasGPU}</td>
            </tr>

            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiClock /> Nulaužimo laikas (Superkompiuteris):
              </td>
              <td className="p-3">{analysis.nulauzimoLaikasSuper}</td>
            </tr>

            {/* Stiprumo lygis */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiLock /> Stiprumas:
              </td>
              <td className={`p-3 font-bold ${getStrengthColor(analysis.stiprumoLygis)}`}>
                {analysis.stiprumoLygis}
              </td>
            </tr>

            {/* Patarimai */}
            <tr>
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiAlertCircle /> Rekomendacija:
              </td>
              <td className="p-3">{analysis.rekomendacija}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordAnalysis;
