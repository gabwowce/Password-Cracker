import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PasswordLengthImpact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      {/* Akordeono antraštė */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-black/30 backdrop-blur-md rounded-xl text-white text-lg font-semibold transition-all duration-300 hover:bg-black/40"
      >
        🔢 Slaptažodžio Ilgio Įtaka Nulaužimo Laikui
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={22}
        />
      </button>

      {/* Akordeono turinys */}
      {isOpen && (
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center ">
          <p>
            Ilgesni slaptažodžiai eksponentiškai didina nulaužimo laiką. Kuo daugiau simbolių, tuo daugiau galimų kombinacijų.
          </p>

          <table className="w-full border-collapse mt-4">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Slaptažodžio Ilgis</th>
                <th className="p-2">Mažosios raidės (26 simboliai)</th>
                <th className="p-2">Raidės + skaičiai (62 simboliai)</th>
                <th className="p-2">Visi simboliai (~95 simbolių)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="p-2">6</td>
                <td className="p-2">0.02 sek.</td>
                <td className="p-2">2 sek.</td>
                <td className="p-2">10 sek.</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2">8</td>
                <td className="p-2">5 sek.</td>
                <td className="p-2">10 min.</td>
                <td className="p-2">1 val.</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-2">10</td>
                <td className="p-2">1 val.</td>
                <td className="p-2">1 metai</td>
                <td className="p-2">10 metų</td>
              </tr>
              <tr>
                <td className="p-2">12</td>
                <td className="p-2">3 d.</td>
                <td className="p-2">30 000 metų</td>
                <td className="p-2">Milijonai metų</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-4 font-semibold text-lg">🔹 Išvada</h3>
          <p>Rekomenduojama naudoti bent 12 simbolių ilgio slaptažodžius su įvairiais simboliais.</p>
        </div>
      )}
    </div>
  );
};

export default PasswordLengthImpact;
