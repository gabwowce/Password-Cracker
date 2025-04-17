import React from "react";

const ComplexityImpact = () => {
  return (
    <div className="w-full">
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
        <h2 className="pb-10 text-2xl text-center">🔐 Slaptažodžių sudėtingumo įtaka</h2>
        <p>
          Kuo įvairesni simboliai slaptažodyje – raidės (didžiosios ir mažosios), skaičiai,
          specialieji ženklai – tuo daugiau galimų kombinacijų turi atspėti įsilaužėlis.
          Tai ženkliai apsunkina slaptažodžio nulaužimą naudojant „brute-force“ metodus.
        </p>

        <h3 className="text-lg font-semibold">🔹 Kodėl tai svarbu?</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Įvairesni simboliai reiškia didesnį galimų kombinacijų skaičių.</li>
          <li>Brute-force atakos tampa žymiai lėtesnės.</li>
          <li>Slaptažodis tampa sunkiau atspėjamas net naudojant žodynų atakas.</li>
        </ul>

        <h3 className="text-lg font-semibold">🔹 Pavyzdys</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>8 simbolių slaptažodis tik iš mažųjų raidžių: apie 200 milijonų kombinacijų.</li>
          <li>8 simbolių slaptažodis su raidėmis, skaičiais ir simboliais: virš 6 trilijonų kombinacijų.</li>
        </ul>

        <p>
          Tačiau ekspertai pažymi, kad <strong>slaptažodžio ilgis</strong> dar svarbiau nei sudėtingumas.
          Ilgesni slaptažodžiai, net jei paprastesni, dažnai būna saugesni nei trumpi ir sudėtingi.
        </p>

        <p className="text-xs text-gray-400 mt-4">
          Šaltinis:{" "}
          <a
            href="https://learn.microsoft.com/en-us/microsoft-365/admin/misc/password-policy-recommendations?view=o365-worldwide"
            target="_blank"
            className="underline"
          >
            Microsoft – Password Policy Recommendations
          </a>
        </p>
      </div>
    </div>
  );
};

export default ComplexityImpact;
