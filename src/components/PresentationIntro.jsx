// Pristatymo įžanga

// src/components/PresentationIntro.jsx
import React from "react";

const PresentationIntro = () => {
  return (
    <div className="presentation-intro">
      <h2>Slaptažodžių Saugumo Pristatymas</h2>
      <p>
        Slaptažodžiai yra viena svarbiausių kibernetinio saugumo dalių. Šiame pristatyme nagrinėsime, kaip slaptažodžiai yra nulaužiami, kokie metodai naudojami ir kaip apsaugoti savo duomenis.
      </p>
      <h3>🔹 Pristatymo Tikslai:</h3>
      <ul>
        <li>Suprasti slaptažodžių nulaužimo metodus.</li>
        <li>Nustatyti, kaip slaptažodžio ilgis ir sudėtingumas veikia nulaužimo laiką.</li>
        <li>Pateikti praktines rekomendacijas, kaip sukurti stiprų slaptažodį.</li>
      </ul>
      <h3>🔹 Kodėl tai svarbu?</h3>
      <p>
        Kasmet nuteka milijonai slaptažodžių dėl silpnų autentifikacijos metodų. Net ir sudėtingi slaptažodžiai gali būti nulaužti, jei jie nėra tinkamai apsaugoti.
      </p>
      <h3>🔹 Kaip slaptažodžiai yra nulaužiami?</h3>
      <p>
        Yra keletas pagrindinių metodų, kaip įsilaužėliai gali gauti jūsų slaptažodžius:
      </p>
      <ul>
        <li><strong>Brute-force ataka:</strong> išbandomos visos galimos kombinacijos.</li>
        <li><strong>Žodyno ataka:</strong> naudojami dažniausiai pasitaikantys slaptažodžiai.</li>
        <li><strong>Phishing atakos:</strong> vartotojai patys atskleidžia savo slaptažodžius.</li>
        <li><strong>Nutekėję duomenų bazės:</strong> naudojami jau anksčiau pavogti slaptažodžiai.</li>
      </ul>
      <h3>🔹 Ką sužinosime šiame projekte?</h3>
      <ul>
        <li>Kaip veikia slaptažodžių nulaužimo įrankiai.</li>
        <li>Kokie slaptažodžiai yra lengviausiai nulaužiami.</li>
        <li>Kaip skaičiuojamas teorinis slaptažodžio saugumas.</li>
        <li>Kokie metodai gali padidinti apsaugą (dviejų veiksnių autentifikacija, slaptažodžių tvarkyklės ir kt.).</li>
      </ul>
    </div>
  );
};

export default PresentationIntro;
