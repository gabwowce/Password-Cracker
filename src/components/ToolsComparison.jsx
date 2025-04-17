import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PasswordCrackingTools = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">

        <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
          <h2 className="pb-10 text-2xl text-center">🔧 Slaptažodžių "laužimo" įrankių paaiškinimas</h2>
          <p>
            Slaptažodžių nulaužimo įrankiai – tai specialios programos, kurios
            bando atspėti ar atkurti užšifruotus slaptažodžius. Jie naudojami
            tiek <strong>saugumo testavimui</strong> (etiketiškas hakinimas), tiek kenkėjiškais
            tikslais. Toliau – populiariausi įrankiai ir kuo jie skiriasi.
          </p>

          <h3 className="text-lg font-semibold">🔹 Hashcat</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Vienas greičiausių įrankių pasaulyje.</li>
            <li>Naudoja tavo <strong>GPU</strong> (vaizdo plokštę), kad atliktų milijardus bandymų per sekundę.</li>
            <li>Labai efektyvus su įvairiais hash algoritmais (MD5, SHA1, bcrypt ir kt.).</li>
            <li>Tinka, kai turi <strong>galingą kompiuterį</strong> ir daug duomenų.</li>
          </ul>

          <h3 className="text-lg font-semibold">🔹 John the Ripper</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Veikia su <strong>CPU arba GPU</strong>, bet dažniausiai naudoja CPU.</li>
            <li>Turi daug papildinių (plugins), palaiko įvairius metodus (žodynas + brute-force).</li>
            <li>Patogus tiems, kurie nori daugiau konfigūracijos ir testavimo galimybių.</li>
          </ul>

          <h3 className="text-lg font-semibold">🔹 Hydra</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Veikia per tinklą – bando <strong>prisijungti prie paskyrų</strong> naudodama žinomus vartotojus/slaptažodžius.</li>
            <li>Naudojamas <strong>„brute-force“ atakoms per internetą</strong> (pvz., SSH, FTP, HTTP).</li>
            <li>Naudingas testuojant realias sistemas.</li>
          </ul>

          <h3 className="text-lg font-semibold">🔹 Aircrack-ng</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Skirtas <strong>Wi-Fi slaptažodžių nulaužimui</strong>.</li>
            <li>Veikia su belaidžiais tinklais, analizuoja paketų srautą ir bando atkurti raktą.</li>
            <li>Dažnai naudojamas testuojant tinklo saugumą.</li>
          </ul>

          <h3 className="text-lg font-semibold">🔹 Santrauka</h3>
          <table className="w-full border-collapse border border-gray-600 text-sm">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="p-2 border border-gray-600">Įrankis</th>
                <th className="p-2 border border-gray-600">Tikslas</th>
                <th className="p-2 border border-gray-600">Geriausia naudoti kai...</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              <tr className="hover:bg-gray-800">
                <td className="p-2 border border-gray-600">Hashcat</td>
                <td className="p-2 border border-gray-600">Greitas hash’ai</td>
                <td className="p-2 border border-gray-600">Turi galingą GPU</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="p-2 border border-gray-600">John the Ripper</td>
                <td className="p-2 border border-gray-600">Lankstus metodų pasirinkimas</td>
                <td className="p-2 border border-gray-600">Nori testuoti skirtingus scenarijus</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="p-2 border border-gray-600">Hydra</td>
                <td className="p-2 border border-gray-600">Tinkliniai prisijungimai</td>
                <td className="p-2 border border-gray-600">Atakuoji sistemas per internetą</td>
              </tr>
              <tr className="hover:bg-gray-800">
                <td className="p-2 border border-gray-600">Aircrack-ng</td>
                <td className="p-2 border border-gray-600">Wi-Fi saugumo testavimas</td>
                <td className="p-2 border border-gray-600">Turi belaidį tinklą</td>
              </tr>
            </tbody>
          </table>

          <p className="text-xs text-gray-400 mt-4">
            Šaltinis: <a
              href="https://dev.to/bhavikgoplani/hashcat-vs-john-the-ripper-a-comparative-benchmarking-of-password-cracking-tools-26a4"
              target="_blank"
              className="underline"
            >
              dev.to – Hashcat vs John the Ripper: A Comparative Benchmarking
            </a>
          </p>
        </div>

    </div>
  );
};

export default PasswordCrackingTools;
