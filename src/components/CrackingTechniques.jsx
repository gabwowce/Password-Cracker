import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CrackingTechniques = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
 
        <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-center w-full">
         <h2 className="pb-10 text-2xl">🧠 Slaptažodžių Laužymo Metodai</h2>
          <p className="text-gray-300 text-sm text-center mb-6">
            Slaptažodžių lūžimo metodai nuolat tobulėja. Štai 10 dažniausiai
            naudojamų atakų tipų:
          </p>

          <ul className="text-left text-gray-300 text-sm list-decimal list-inside space-y-2">
            <li><strong>Brute-force</strong> – visi galimi simbolių deriniai.</li>
            <li><strong>Dictionary attack</strong> – bandomi dažni slaptažodžiai.</li>
            <li><strong>Credential stuffing</strong> – naudojami nutekinti duomenys.</li>
            <li><strong>Phishing</strong> – apgaulė per el. paštą ar tinklalapius.</li>
            <li><strong>Keylogging</strong> – sekami klaviatūros paspaudimai.</li>
            <li><strong>Rainbow table</strong> – naudojamos iš anksto sugeneruotos hash reikšmės.</li>
            <li><strong>Social engineering</strong> – manipuliuojama žmonėmis.</li>
            <li><strong>Offline cracking</strong> – hash’ai laužomi neprisijungus.</li>
            <li><strong>Spidering</strong> – renkama vieša informacija slaptažodžių spėjimui.</li>
            <li><strong>Shoulder surfing</strong> – stebima, kaip vartotojas veda slaptažodį.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">🔹 Apsauga</h3>
          <p className="text-gray-300 text-sm mt-3">
            Naudok stiprius slaptažodžius, nevartok tų pačių skirtingose paskyrose ir įjunk dviejų veiksnių autentifikaciją (2FA).
          </p>

          <p className="text-xs text-gray-400 mt-4">
            Šaltinis: <a href="https://stytch.com/blog/top-10-password-cracking-techniques/" target="_blank" className="underline">Stytch Blog</a>
          </p>
        </div>

    </div>
  );
};

export default CrackingTechniques;
