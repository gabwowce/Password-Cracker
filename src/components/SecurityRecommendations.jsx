import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SecurityRecommendations = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full ">
      {/* Akordeono antraštė */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-black/30 backdrop-blur-md rounded-xl text-white text-lg font-semibold transition-all duration-300 hover:bg-black/40"
      >
        🛡️ Saugumo Rekomendacijos
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={22}
        />
      </button>

      {/* Akordeono turinys */}
      {isOpen && (
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center ">
          <p className="text-gray-300">
            Remiantis slaptažodžių analizės rezultatais, pateikiame keletą rekomendacijų dėl slaptažodžių kūrimo ir apsaugos.
          </p>

          <ul className="list-disc list-inside text-gray-300 text-sm mt-3 text-left">
            <li><strong>Naudokite bent 12–16 simbolių</strong> ilgio slaptažodžius.</li>
            <li>Maišykite <strong>didžiąsias, mažąsias raides, skaičius ir specialius simbolius</strong>.</li>
            <li>Venkite <strong>lengvai atspėjamų frazių</strong> (pvz., „password123“).</li>
            <li>Naudokite <strong>slaptažodžių tvarkykles</strong> (LastPass, Bitwarden, 1Password).</li>
            <li>Įjunkite <strong>dviejų veiksnių autentifikaciją (2FA)</strong> visur, kur įmanoma.</li>
            <li>Nenaudokite to paties slaptažodžio <strong>keliuose puslapiuose</strong>.</li>
          </ul>

          <h3 className="mt-4 font-semibold text-lg">🔹 Papildomi apsaugos būdai</h3>
          <p className="text-gray-300">
            Be stiprių slaptažodžių, taip pat naudokite saugumo raktus (YubiKey), biometrinius duomenis (pirštų atspaudus) ir dažnai atnaujinkite savo slaptažodžius.
          </p>
        </div>
      )}
    </div>
  );
};

export default SecurityRecommendations;
