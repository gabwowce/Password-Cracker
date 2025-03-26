import React from "react";

const SecurityRecommendations = () => {
  return (
    <div className="w-full">
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
        <h2 className="pb-10 text-2xl text-center">🔐 Slaptažodžių Saugumo Rekomendacijos</h2>

        <h3 className="text-lg font-semibold">🔹 Slaptažodžio Ilgis</h3>
        <p>
          NIST rekomenduoja, kad slaptažodžiai būtų bent 8 simbolių ilgio, o aukšto saugumo sistemoms – ne trumpesni nei 15 simbolių. Ilgesni slaptažodžiai yra sunkiau nulaužiami ir suteikia didesnį saugumo lygį. :contentReference[oaicite:3]{index=3}
        </p>

        <h3 className="text-lg font-semibold">🔹 Simbolių Įvairovė</h3>
        <p>
          Nors anksčiau buvo akcentuojamas specialiųjų simbolių naudojimas, dabar svarbiau yra slaptažodžio ilgis. Tačiau vis dar rekomenduojama naudoti įvairius simbolius, kad padidinti slaptažodžio stiprumą. :contentReference[oaicite:4]{index=4}
        </p>

        <h3 className="text-lg font-semibold">🔹 Periodiškas Slaptažodžių Keitimas</h3>
        <p>
          NIST rekomenduoja atsisakyti privalomo slaptažodžių keitimo nustatytais intervalais, nebent yra įrodymų apie saugumo pažeidimą. Dažnas slaptažodžių keitimas gali paskatinti vartotojus rinktis silpnesnius slaptažodžius arba juos užsirašyti, kas mažina bendrą saugumą. :contentReference[oaicite:5]{index=5}
        </p>

        <h3 className="text-lg font-semibold">🔹 Dviejų Veiksnių Autentifikacija (2FA)</h3>
        <p>
          Microsoft rekomenduoja įdiegti dviejų veiksnių autentifikaciją, kad padidinti paskyrų saugumą. Tai suteikia papildomą apsaugos sluoksnį, net jei slaptažodis būtų kompromituotas. :contentReference[oaicite:6]{index=6}
        </p>

        <h3 className="text-lg font-semibold">🔹 Slaptažodžių Tvarkyklės</h3>
        <p>
          Rekomenduojama naudoti slaptažodžių tvarkykles, kurios padeda generuoti ir saugoti stiprius, unikalius slaptažodžius kiekvienai paskyrai. Tai palengvina slaptažodžių valdymą ir padidina bendrą saugumą. :contentReference[oaicite:7]{index=7}
        </p>

        <p className="text-xs text-gray-400 mt-4">
          Šaltiniai:
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://www.strongdm.com/blog/nist-password-guidelines"
                target="_blank"
                className="underline"
              >
                NIST Password Guidelines: 2025 Updates & Best Practices
              </a>
            </li>
            <li>
              <a
                href="https://learn.microsoft.com/en-us/microsoft-365/admin/misc/password-policy-recommendations?view=o365-worldwide"
                target="_blank"
                className="underline"
              >
                Microsoft Password Policy Recommendations
              </a>
            </li>
            <li>
              <a
                href="https://scytale.ai/resources/2024-nist-password-guidelines-enhancing-security-practices/"
                target="_blank"
                className="underline"
              >
                2025 NIST Password Guidelines: Enhancing Security Practices
              </a>
            </li>
            <li>
              <a
                href="https://www.crowe.com/cybersecurity-watch/password-security-best-practices-2025"
                target="_blank"
                className="underline"
              >
                Password Security Best Practices for 2025
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SecurityRecommendations;
