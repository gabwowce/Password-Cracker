import React from "react";

const PasswordAnalysis = ({ analysis }) => {
  // Funkcija nustatyti spalvą pagal stiprumą
  const getStrengthColor = (strengthLevel) => {
    if (strengthLevel === "Silpnas") return "text-red-300";
    if (strengthLevel === "Vidutinis") return "text-yellow-300";
    if (strengthLevel === "Stiprus") return "text-green-300";
    return "text-white"; // Jei nėra reikšmės
  };

  return (
    <div className="backdrop-blur-3xl rounded-md p-6 mt-10 mx-auto ">
      <h2 className="text-2xl font-bold text-center mb-4">🔍 Analizės Rezultatai</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <tbody>
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold">🔢 Slaptažodžio ilgis:</td>
              <td className="p-3 text-red-300">{analysis.length} simbolių</td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold">🔡 Simbolių įvairovė:</td>
              <td className="p-3 text-cyan-300">{analysis.characterVariety}</td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold">⏳ Num. nulaužimo laikas:</td>
              <td className="p-3 text-yellow-300">{analysis.estimatedTime}</td>
            </tr>
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold">🛡️ Stiprumo lygis:</td>
              <td className={`p-3 font-bold ${getStrengthColor(analysis.strengthLevel)}`}>
                {analysis.strengthLevel}
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold">💡 Rekomendacija:</td>
              <td className="p-3 text-red-300">{analysis.suggestion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordAnalysis;
