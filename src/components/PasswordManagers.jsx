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
      <ul className="list-disc list-inside text-gray-300 space-y-3">
        <li>
          <strong>Bitwarden</strong> – atvirojo kodo slaptažodžių tvarkyklė,
          siūlanti nemokamą versiją su pagrindinėmis funkcijomis, galimybė dalintis slaptažodžiais,
          stiprus šifravimas, patogi naudoti tiek naršyklėje, tiek programėlėje.
        </li>
        <li>
          <strong>1Password</strong> – itin patogi vartotojui slaptažodžių tvarkyklė,
          orientuota į šeimas ir komandas, su papildomais saugumo įrankiais, kaip kelionių režimas,
          kuris slepia slaptažodžius kertant sienas.
        </li>
        <li>
          <strong>LastPass</strong> – populiarus pasirinkimas, siūlantis tiek nemokamą,
          tiek mokamą versiją, automatinis slaptažodžių generavimas ir užpildymas,
          galima naudoti naršyklėse ir mobiliose įrenginiuose.
        </li>
        <li>
          <strong>KeePass</strong> – visiškai nemokamas, atvirojo kodo sprendimas,
          leidžiantis valdyti slaptažodžių duomenų bazę lokaliai. Puikiai tinka tiems,
          kurie nori maksimalaus valdymo ir nepriklausomybės nuo debesies paslaugų.
        </li>
      </ul>
      <p className="text-xs text-gray-400 mt-4">
        Šaltinis:{" "}
        <a
          className="underline"
          href="https://www.wired.com/story/best-password-managers/"
          target="_blank"
        >
          Wired – Best Password Managers 2025
        </a>
      </p>
    </div>
  );
};
