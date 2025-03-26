import React from "react";

export const PasswordManagers = () => {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
      <h2 className="pb-10 text-2xl text-center">🔐 Slaptažodžių Tvarkyklės</h2>
      <p>
        Slaptažodžių valdymo įrankiai padeda saugiai saugoti ir kurti unikalius
        slaptažodžius kiekvienai paskyrai. Jie leidžia naudotojui prisiminti tik
        vieną pagrindinį slaptažodį.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Populiariausi įrankiai: Bitwarden, 1Password, LastPass, KeePass</li>
        <li>Automatinis prisijungimas ir slaptažodžių generavimas</li>
        <li>Galima naudoti mobiliose ir stacionariose platformose</li>
      </ul>
      <p className="text-xs text-gray-400 mt-4">
        Šaltinis: <a className="underline" href="https://www.wired.com/story/best-password-managers/" target="_blank">Wired – Best Password Managers 2025</a>
      </p>
    </div>
  );
};
