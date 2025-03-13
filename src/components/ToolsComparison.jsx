// Slaptažodžių nulaužimo įrankiai

// src/components/ToolsComparison.jsx
import React from "react";

const ToolsComparison = () => {
  return (
    <div className="flex flex-col bg-black/20 backdrop-blur-md rounded-3xl p-15 text-center gap-5">
      <h2>🔧 Slaptažodžių Nulaužimo Įrankių Palyginimas</h2>
      <p>
        Yra įvairių įrankių, kurie naudojami slaptažodžių nulaužimui. Jie skiriasi greičiu, metodais ir efektyvumu.
      </p>
      <table>
        <thead>
          <tr>
            <th>Įrankis</th>
            <th>Metodas</th>
            <th>Greitis (bandymų/s)</th>
            <th>Reikalavimai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hashcat</strong></td>
            <td>GPU pagreitintas brute-force</td>
            <td>10⁹</td>
            <td>Galinga GPU</td>
          </tr>
          <tr>
            <td><strong>John the Ripper</strong></td>
            <td>Hybridinis (žodynas + brute-force)</td>
            <td>10⁶</td>
            <td>Vidutinis CPU</td>
          </tr>
          <tr>
            <td><strong>Hydra</strong></td>
            <td>Online slaptažodžių atakos</td>
            <td>10³</td>
            <td>Interneto prieiga</td>
          </tr>
          <tr>
            <td><strong>Aircrack-ng</strong></td>
            <td>Wi-Fi slaptažodžių atakos</td>
            <td>10⁴</td>
            <td>Belaidis tinklas</td>
          </tr>
        </tbody>
      </table>
      <h3>🔹 Kas lemia nulaužimo laiką?</h3>
      <ul>
        <li><strong>Slaptažodžio ilgis</strong> – ilgesni slaptažodžiai yra žymiai sunkiau nulaužiami.</li>
        <li><strong>Naudojami simboliai</strong> – daugiau simbolių aibėje padidina entropiją.</li>
        <li><strong>Aparatinė įranga</strong> – stipri GPU gali drastiškai pagreitinti brute-force atakas.</li>
        <li><strong>Naudojama metodika</strong> – žodyno atakos dažnai yra greitesnės nei brute-force.</li>
      </ul>
      <h3>🔹 Išvados</h3>
      <p>
        Jei slaptažodis yra trumpas ir nesudėtingas, jis gali būti nulaužtas per kelias sekundes naudojant modernius įrankius. Stiprūs slaptažodžiai reikalauja ilgo laužimo laiko, todėl rekomenduojama naudoti dviejų veiksnių autentifikaciją.
      </p>
    </div>
  );
};

export default ToolsComparison;