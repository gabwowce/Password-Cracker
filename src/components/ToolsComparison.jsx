import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ToolsComparison = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Akordeono viršus */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-black/30 backdrop-blur-md rounded-xl text-white text-lg font-semibold transition-all duration-300 hover:bg-black/40"
      >
        🔧 Slaptažodžių Nulaužimo Įrankių Palyginimas
        <ChevronDown
          size={22}
          className={`transition-transform bg-wit ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Akordeono turinys */}
      {isOpen && (
         <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center ">
          <p className="text-gray-300 text-sm text-center mb-6">
            Yra įvairių įrankių, kurie naudojami slaptažodžių nulaužimui. Jie skiriasi greičiu, metodais ir efektyvumu.
          </p>

          {/* Lentelė */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-600 text-sm text-left">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="p-3 border border-gray-600">Įrankis</th>
                  <th className="p-3 border border-gray-600">Metodas</th>
                  <th className="p-3 border border-gray-600">Greitis (bandymų/s)</th>
                  <th className="p-3 border border-gray-600">Reikalavimai</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border border-gray-600"><strong>Hashcat</strong></td>
                  <td className="p-3 border border-gray-600">GPU pagreitintas brute-force</td>
                  <td className="p-3 border border-gray-600">10⁹</td>
                  <td className="p-3 border border-gray-600">Galinga GPU</td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border border-gray-600"><strong>John the Ripper</strong></td>
                  <td className="p-3 border border-gray-600">Hybridinis (žodynas + brute-force)</td>
                  <td className="p-3 border border-gray-600">10⁶</td>
                  <td className="p-3 border border-gray-600">Vidutinis CPU</td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border border-gray-600"><strong>Hydra</strong></td>
                  <td className="p-3 border border-gray-600">Online slaptažodžių atakos</td>
                  <td className="p-3 border border-gray-600">10³</td>
                  <td className="p-3 border border-gray-600">Interneto prieiga</td>
                </tr>
                <tr className="hover:bg-gray-800">
                  <td className="p-3 border border-gray-600"><strong>Aircrack-ng</strong></td>
                  <td className="p-3 border border-gray-600">Wi-Fi slaptažodžių atakos</td>
                  <td className="p-3 border border-gray-600">10⁴</td>
                  <td className="p-3 border border-gray-600">Belaidis tinklas</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Kas lemia nulaužimo laiką */}
          <h3 className="text-xl font-semibold mt-6 text-center">🔹 Kas lemia nulaužimo laiką?</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm mt-3">
            <li><strong>Slaptažodžio ilgis</strong> – ilgesni slaptažodžiai yra žymiai sunkiau nulaužiami.</li>
            <li><strong>Naudojami simboliai</strong> – daugiau simbolių aibėje padidina entropiją.</li>
            <li><strong>Aparatinė įranga</strong> – stipri GPU gali drastiškai pagreitinti brute-force atakas.</li>
            <li><strong>Naudojama metodika</strong> – žodyno atakos dažnai yra greitesnės nei brute-force.</li>
          </ul>

          {/* Išvados */}
          <h3 className="text-xl font-semibold mt-6 text-center">🔹 Išvados</h3>
          <p className="text-gray-300 text-sm mt-3 text-center">
            Jei slaptažodis yra trumpas ir nesudėtingas, jis gali būti nulaužtas per kelias sekundes naudojant modernius įrankius. Stiprūs slaptažodžiai reikalauja ilgo laužimo laiko, todėl rekomenduojama naudoti dviejų veiksnių autentifikaciją.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToolsComparison;
