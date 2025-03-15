import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ComplexityImpact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      {/* Akordeono antraštė */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-black/30 backdrop-blur-md rounded-xl text-white text-lg font-semibold transition-all duration-300 hover:bg-black/40"
      >
        🔠 Slaptažodžio Sudėtingumo Įtaka
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={22}
        />
      </button>

      {/* Akordeono turinys */}
      {isOpen && (
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center">
          <p>
            Skirtingi simbolių rinkiniai suteikia skirtingą apsaugos lygį. Kuo įvairesni simboliai, tuo sunkiau slaptažodį nulaužti.
          </p>

          {/* Lentelė */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-4">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-2">Slaptažodis</th>
                  <th className="p-2">Simbolių Aibė</th>
                  <th className="p-2">Teorinis nulaužimo laikas (su GPU)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="p-2">123456</td>
                  <td className="p-2">Skaičiai (10)</td>
                  <td className="p-2">&lt; 1 sek.</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="p-2">password</td>
                  <td className="p-2">Mažosios raidės (26)</td>
                  <td className="p-2">1 sek.</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="p-2">P@ssw0rd</td>
                  <td className="p-2">Raidės + skaičiai + simboliai (95)</td>
                  <td className="p-2">3 dienos</td>
                </tr>
                <tr>
                  <td className="p-2">mD#5*Gh2@x</td>
                  <td className="p-2">Visi simboliai</td>
                  <td className="p-2">100+ metų</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-4 font-semibold text-lg">🔹 Išvada</h3>
          <p>
            Slaptažodis turėtų turėti didžiąsias, mažąsias raides, skaičius ir specialius simbolius, kad būtų saugesnis.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComplexityImpact;
