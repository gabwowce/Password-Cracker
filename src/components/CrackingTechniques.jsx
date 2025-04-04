import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CrackingTechniques = () => {
  return (
    <div className="w-full">
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center w-full">
        <h2 className="pb-10 text-2xl">🧠 Slaptažodžių Laužymo Metodai</h2>

        <p className="text-gray-300 text-sm text-center mb-6">
          Slaptažodžių laužymas — tai kibernetinė ataka, kai bandoma atspėti ar kitaip
          perimti vartotojo slaptažodžius. Tai gali būti daroma tiek prisijungus prie serverio
          (online), tiek neprisijungus (offline), kai slaptažodžių hash’ai yra laužomi lokaliai.
          Šios atakos taikosi į vartotojų paskyras, jautrius duomenis bei verslo sistemas.
        </p>

        <p className="text-gray-300 text-sm text-center mb-6">
          Įsilaužėliai dažniausiai naudoja jau patikrintus metodus, todėl pažinodami jų veikimo principus, galime geriau apsisaugoti.
        </p>

        <ul className="text-left text-gray-300 text-sm list-decimal list-inside space-y-4">
          <li>
            <strong>Brute-force</strong> – visi galimi simbolių deriniai.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Automatizuoti įrankiai sistemingai bando kiekvieną įmanomą raidžių, skaičių ir simbolių kombinaciją,
              kol atitinka slaptažodį. Naudojant bot'us, ataka tampa greitesnė.
              Apsauga: paskyros blokavimas po kelių nesėkmingų bandymų.
            </p>
          </li>

          <li>
            <strong>Password spraying</strong> – dažniausių slaptažodžių naudojimas daugeliui paskyrų.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Vietoje to, kad bandytų daug slaptažodžių vienai paskyrai, įsilaužėliai bando tą patį paprastą slaptažodį ("123456", "password")
              daugeliui vartotojų paskyrų vienu metu, kad išvengtų blokavimo.
            </p>
          </li>

          <li>
            <strong>Credential stuffing</strong> – naudojami nutekinti duomenys.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Panaudojami jau žinomi, pavogti vartotojų vardų ir slaptažodžių rinkiniai iš ankstesnių duomenų nutekėjimų,
              nes daugelis žmonių naudoja tuos pačius slaptažodžius skirtingose paskyrose.
            </p>
          </li>

          <li>
            <strong>Dictionary attack</strong> – bandomi dažni žodžiai iš "žodyno".
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Naudojamas sąrašas dažnai pasitaikančių žodžių ir frazių (pvz., "vilnius2025", "kibinai", "password123"),
              kad būtų atspėtas paprastas ar teminis slaptažodis.
            </p>
          </li>

          <li>
            <strong>Mask attack</strong> – numanomos slaptažodžių struktūros.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Hakeriai remiasi dažniausiai naudojamomis slaptažodžių kūrimo taisyklėmis,
              pavyzdžiui, pirmoji raidė didžioji, tada skaičiai, pabaigoje specialus simbolis.
              Taip sumažinamas galimų kombinacijų skaičius ir pagreitėja ataka.
            </p>
          </li>

          <li>
            <strong>Spidering</strong> – informacijos rinkimas iš viešų šaltinių.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Surenkama informacija apie įmonę ar asmenį iš jų viešų kanalų — svetainių, socialinių tinklų, dokumentų —
              kad būtų galima sudaryti galimų slaptažodžių sąrašą.
            </p>
          </li>

          <li>
            <strong>Man-in-the-middle (MitM)</strong> – ryšio perėmimas.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Užpuolikas stebi duomenų srautą tarp vartotojo ir serverio, pavyzdžiui, per netikrą WiFi tinklą.
              Tokiu būdu galima perimti slaptažodžius ir kitą jautrią informaciją.
            </p>
          </li>

          <li>
            <strong>Rainbow table</strong> – hash'ų paieška paruoštose lentelėse.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Iš anksto sugeneruotos lentelės leidžia greitai rasti atitinkančius slaptažodžius pagal jų hash reikšmes.
              Apsauga: naudoti "salted hash" technologiją.
            </p>
          </li>

          <li>
            <strong>Phishing</strong> – apgaulingi el. laiškai ar svetainės.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Vartotojai apgaunami įvesti savo prisijungimo duomenis netikrose svetainėse arba atsisiųsti kenkėjiškas programas.
              Dažnas būdas — laiškas su prašymu atnaujinti slaptažodį.
            </p>
          </li>

          <li>
            <strong>Malware</strong> – kenksminga programinė įranga.
            <p className="text-xs text-gray-400 ml-4 mt-1">
              Slaptažodžiai gali būti vogti naudojant programas kaip "spyware" ar "keyloggers",
              kurios seka vartotojo veiksmus ir įveda informaciją įsilaužėliui.
            </p>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">🔹 Kaip apsisaugoti</h3>
        <p className="text-gray-300 text-sm mt-3">
          Naudok stiprius, unikalius slaptažodžius kiekvienai paskyrai. Įjunk dviejų veiksnių autentifikaciją (2FA),
          naudok slaptažodžių valdymo įrankius ir venk viešų WiFi tinklų be apsaugos.
        </p>
        <p className="text-gray-300 text-sm mt-3">
          Reguliariai tikrink ar tavo duomenys nėra nutekinti, pavyzdžiui, naudodamas{' '}
          <a
            href="https://haveibeenpwned.com/"
            target="_blank"
            className="underline text-blue-400"
          >
            Have I Been Pwned
          </a>
          , ir apsvarstyk pereiti prie slaptažodžių neturinčių autentifikacijos būdų.
        </p>

        <p className="text-xs text-gray-400 mt-4">
          Šaltinis:{" "}
          <a
            href="https://stytch.com/blog/top-10-password-cracking-techniques/"
            target="_blank"
            className="underline"
          >
            Stytch Blog
          </a>
        </p>
      </div>
    </div>
  );
};

export default CrackingTechniques;
