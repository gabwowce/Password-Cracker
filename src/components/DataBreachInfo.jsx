import React from "react";

export const DataBreachInfo = () => {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
      <h2 className="pb-10 text-2xl text-center">📂 Duomenų nutekėjimai</h2>

      <p>
        Duomenų nutekėjimai įvyksta, kai įsilaužėliai gauna prieigą prie 
        neapsaugotų duomenų bazių ir išplatina arba parduoda pavogtus duomenis. 
        Nutekėti gali el. paštai, slaptažodžiai, adresai, kreditinių kortelių duomenys ir kita informacija.
      </p>

      <p>
        Šie duomenys dažnai atsiduria tamsiajame internete (dark web) ir 
        yra panaudojami tolimesnėms atakoms, tokioms kaip <strong>credential stuffing</strong>, 
        <strong> phishing</strong>, ar net <strong>asmens tapatybės vagystė</strong>.
      </p>

      <p className="text-gray-300">
        Žinomi incidentai:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li><strong>LinkedIn (2021)</strong> – 700 mln. paskyrų nutekinti duomenys.</li>
        <li><strong>Adobe (2013)</strong> – virš 150 mln. vartotojų paskyrų.</li>
        <li><strong>Yahoo (2013–14)</strong> – 3 mlrd. paskyrų (vienas didžiausių istorijoje).</li>
      </ul>

      <p className="pt-2">Ką daryti jei įvyko nutekėjimas:</p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          Tikrinkite savo el. paštą per 
          <a className="underline ml-1" href="https://haveibeenpwned.com" target="_blank">haveibeenpwned.com</a>
        </li>
        <li>Jei rastas nutekėjimas – iškart keiskite slaptažodį toje paskyroje</li>
        <li>Naudokite unikalius slaptažodžius kiekvienai paskyrai</li>
        <li>Įjunkite dviejų veiksnių autentifikaciją (2FA)</li>
        <li>Apsvarstykite slaptažodžių tvarkyklės naudojimą</li>
        <li>Patikrinkite, ar jūsų slaptažodžiai nėra silpni ar per daug kartojasi</li>
      </ul>

      <p className="text-gray-300 pt-2">
        Dar vienas naudingas įrankis:
        <a className="underline ml-1" href="https://monitor.firefox.com/" target="_blank">Firefox Monitor</a>
      </p>

      <p className="text-xs text-gray-400 mt-4">
        Šaltiniai:{" "}
        <a className="underline" href="https://www.cnet.com/tech/services-and-software/what-to-do-after-a-data-breach/" target="_blank">
          CNET – What to Do After a Data Breach
        </a>,{" "}
        <a className="underline ml-1" href="https://www.identityforce.com/blog/2023-data-breaches" target="_blank">
          IdentityForce Blog
        </a>
      </p>
    </div>
  );
};
