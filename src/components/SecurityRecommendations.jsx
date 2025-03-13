// Saugumo patarimai

// src/components/SecurityRecommendations.jsx
import React from "react";

const SecurityRecommendations = () => {
  return (
    <div className="flex flex-col bg-black/20 backdrop-blur-md rounded-3xl p-15 text-center gap-5">
      <h2>🛡️ Saugumo Rekomendacijos</h2>
      <p>
        Remiantis slaptažodžių analizės rezultatais, pateikiame keletą rekomendacijų dėl slaptažodžių kūrimo ir apsaugos.
      </p>
      <ul>
        <li>Naudokite bent <strong>12–16 simbolių</strong> ilgio slaptažodžius.</li>
        <li>Maišykite <strong>didžiąsias, mažąsias raides, skaičius ir specialius simbolius</strong>.</li>
        <li>Venkite <strong>lengvai atspėjamų frazių</strong> (pvz., „password123“).</li>
        <li>Naudokite <strong>slaptažodžių tvarkykles</strong> (LastPass, Bitwarden, 1Password).</li>
        <li>Įjunkite <strong>dviejų veiksnių autentifikaciją (2FA)</strong> visur, kur įmanoma.</li>
        <li>Nenaudokite to paties slaptažodžio <strong>keliuose puslapiuose</strong>.</li>
      </ul>
      <h3>🔹 Papildomi apsaugos būdai</h3>
      <p>
        Be stiprių slaptažodžių, taip pat naudokite saugumo raktus (YubiKey), biometrinius duomenis (pirštų atspaudus) ir dažnai atnaujinkite savo slaptažodžius.
      </p>
    </div>
  );
};

export default SecurityRecommendations;