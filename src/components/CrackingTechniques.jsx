import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CrackingTechniques = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
 
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center w-full">
         <h2 className="pb-10 text-2xl">🧠 Slaptažodžių "laužymo" metodai</h2>
          <p className="text-gray-300 text-sm text-center mb-6">
            Slaptažodžių "laužimo" metodai nuolat tobulėja. Štai 10 dažniausiai
            naudojamų atakų tipų:
          </p>

          <ul className="text-left text-gray-300 text-sm list-decimal list-inside space-y-4">
            <li>
              <strong>Brute-force</strong> – visi galimi simbolių deriniai bandomi automatizuotai, kol surandamas teisingas slaptažodis. <br />
              <span className="text-s text-gray-400">Apsauga: naudok ilgus slaptažodžius ir ribok bandymų skaičių.</span>
            </li>
            <li>
              <strong>Dictionary attack</strong> – naudojamas žodžių sąrašas su dažniausiai vartojamais slaptažodžiais. <br />
              <span className="text-s text-gray-400">Apsauga: venk įprastų žodžių, pvz. „password“, „123456“.</span>
            </li>
            <li>
              <strong>Credential stuffing</strong> – bandomi nutekinti vartotojų slaptažodžiai kituose puslapiuose. <br />
              <span className="text-s text-gray-400">Apsauga: visur naudok skirtingus slaptažodžius.</span>
            </li>
            <li>
              <strong>Phishing</strong> – sukčiavimo laiškai ar svetainės skirtos išvilioti slaptažodžius. <br />
              <span className="text-s text-gray-400">Apsauga: tikrink nuorodų adresus, naudok 2FA (angl. Two-Factor Authentication). Tai papildomas saugumo sluoksnis – be slaptažodžio reikia dar vieno patvirtinimo būdo, pvz.: kodo iš SMS ar autentifikavimo programėlės.</span>
            </li>
            <li>
              <strong>Keylogging</strong> – kenkėjiška programa fiksuoja paspaudimus klaviatūroje. <br />
              <span className="text-s text-gray-400">Apsauga: naudok antivirusinę programą, atnaujink OS.</span>
            </li>
            <li>
              <strong>Rainbow table</strong> – naudojamos didelės hash lentelės greitam dekodavimui. <br />
              <span className="text-s text-gray-400">Apsauga: slaptažodžių "salting". Salting – tai atsitiktinių duomenų (vadinamų salt) pridėjimas prie slaptažodžio prieš jį „hashinant“.</span>
            </li>
            <li>
              <strong>Social engineering</strong> – manipuliavimas žmonėmis, siekiant atskleisti slaptažodžius. <br />
              <span className="text-s text-gray-400">Apsauga: neatskleisk informacijos telefonu ar el. paštu.</span>
            </li>
            <li>
              <strong>Offline cracking</strong> – duomenų bazė su hash’ais laužoma be tinklo. <br />
              <span className="text-s text-gray-400">Apsauga: stiprus slaptažodis + saugus hash algoritmas.</span>
            </li>
            <li>
              <strong>Spidering</strong> – ieškoma viešos informacijos apie vartotoją (gimtadieniai, gyvūnai). <br />
              <span className="text-s text-gray-400">Apsauga: nesirink slaptažodžio iš asmeninės informacijos.</span>
            </li>
            <li>
              <strong>Shoulder surfing</strong> – stebima kaip rašomas slaptažodis (tiesiogiai ar per kamerą). <br />
              <span className="text-s text-gray-400">Apsauga: saugok ekraną viešose vietose.</span>
            </li>
          </ul>

          <p className="text-xs text-gray-400 mt-4">
            Šaltinis: <a href="https://stytch.com/blog/top-10-password-cracking-techniques/" target="_blank" className="underline">Stytch Blog</a>
          </p>
        </div>

    </div>
  );
};

export default CrackingTechniques;
