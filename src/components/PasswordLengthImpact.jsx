import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PasswordLengthImpact = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
        <h2 className="pb-10 text-2xl text-center">⏱️ Slaptažodžio ilgio įtaka "nulaužimo" laikui</h2>

        <p>
          Slaptažodžio ilgis yra vienas svarbiausių faktorių, lemiančių, kiek
          laiko užtruks jį nulaužti. Net ir nesudėtingas slaptažodis, jei jis
          yra pakankamai ilgas, gali būti <strong>gerokai saugesnis</strong> nei trumpas, bet
          sudėtingas.
        </p>

        <h3 className="text-lg font-semibold">🔹 Kodėl ilgis svarbu?</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Kiekvienas papildomas simbolis padidina galimų kombinacijų skaičių <strong>eksponentiškai</strong>.</li>
          <li>Net paprastas slaptažodis, jei jis 12–16 simbolių ilgio, gali užtrukti <strong>šimtus metų</strong> nulaužti.</li>
          <li>Brute-force metodais vis dar bandomi visi variantai – ilgis čia kritinis.</li>
        </ul>

        <h3 className="text-lg font-semibold">🔹 Pavyzdžiai pagal „NordPass“</h3>
        <table className="w-full border-collapse border border-gray-600 text-sm">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="p-2 border border-gray-600">Ilgis</th>
              <th className="p-2 border border-gray-600">Tik raidės</th>
              <th className="p-2 border border-gray-600">Raidės + skaičiai</th>
              <th className="p-2 border border-gray-600">Raidės + skaičiai + simboliai</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="hover:bg-gray-800">
              <td className="p-2 border border-gray-600">8 simboliai</td>
              <td className="p-2 border border-gray-600">mažiau nei 1 sek.</td>
              <td className="p-2 border border-gray-600">2 min.</td>
              <td className="p-2 border border-gray-600">8 val.</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="p-2 border border-gray-600">10 simbolių</td>
              <td className="p-2 border border-gray-600">3 min.</td>
              <td className="p-2 border border-gray-600">1 val.</td>
              <td className="p-2 border border-gray-600">5 dienos</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="p-2 border border-gray-600">12 simbolių</td>
              <td className="p-2 border border-gray-600">3 val.</td>
              <td className="p-2 border border-gray-600">3 sav.</td>
              <td className="p-2 border border-gray-600">34 tūkst. metų</td>
            </tr>
            <tr className="hover:bg-gray-800">
              <td className="p-2 border border-gray-600">16 simbolių</td>
              <td className="p-2 border border-gray-600">100 metų</td>
              <td className="p-2 border border-gray-600">400 metų</td>
              <td className="p-2 border border-gray-600">iki milijardų metų</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold">🔹 Išvada</h3>
        <p>
          Ilgesnis slaptažodis = saugesnis slaptažodis. Net ir paprasti žodžiai,
          jei sudėti į ilgesnę frazę (pvz., „manoautomobilisgreitas“), gali
          būti daug saugesni nei trumpi, bet painūs slaptažodžiai.
        </p>

        <p className="text-xs text-gray-400 mt-4">
          Šaltinis:{" "}
          <a
            href="https://nordpass.com/blog/password-length-vs-complexity/"
            target="_blank"
            className="underline"
          >
            nordpass.com – Password Length vs Complexity
          </a>
        </p>
      </div>
    </div>
  );
};

export default PasswordLengthImpact;
