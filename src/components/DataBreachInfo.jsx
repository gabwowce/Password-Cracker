import React from "react";

export const DataBreachInfo = () => {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
      <h2 className="pb-10 text-2xl text-center">📂 Duomenų Nutekėjimai</h2>
      <p>
        Kai slaptažodžiai nuteka viešai ar yra pavogti, jie gali būti naudojami
        kenkėjiškoms atakoms. Žinomi incidentai apima LinkedIn, Adobe, ir kt.
        Visuomet verta patikrinti, ar jūsų el. paštas ar slaptažodžiai buvo nutekinti.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          Tikrinkite savo el. paštą per <a className="underline" href="https://haveibeenpwned.com" target="_blank">haveibeenpwned.com</a>
        </li>
        <li>Naudokite skirtingus slaptažodžius kiekvienai paskyrai</li>
        <li>Pakeiskite slaptažodį iškart, jei sužinote apie nutekėjimą</li>
      </ul>
      <p className="text-xs text-gray-400 mt-4">
        Šaltinis: <a className="underline" href="https://www.cnet.com/tech/services-and-software/what-to-do-after-a-data-breach/" target="_blank">CNET – What to Do After a Data Breach</a>
      </p>
    </div>
  );
};
