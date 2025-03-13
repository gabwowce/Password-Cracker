// Ilgio įtaka nulaužimo laikui

// src/components/PasswordLengthImpact.jsx
import React from "react";

const PasswordLengthImpact = () => {
  return (
    <div className="password-length-impact">
      <h2>🔢 Slaptažodžio Ilgio Įtaka Nulaužimo Laikui</h2>
      <p>
        Ilgesni slaptažodžiai eksponentiškai didina nulaužimo laiką. Kuo daugiau simbolių, tuo daugiau galimų kombinacijų.
      </p>
      <table>
        <thead>
          <tr>
            <th>Slaptažodžio Ilgis</th>
            <th>Mažosios raidės (26 simboliai)</th>
            <th>Raidės + skaičiai (62 simboliai)</th>
            <th>Visi simboliai (~95 simbolių)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6</td>
            <td>0.02 sek.</td>
            <td>2 sek.</td>
            <td>10 sek.</td>
          </tr>
          <tr>
            <td>8</td>
            <td>5 sek.</td>
            <td>10 min.</td>
            <td>1 val.</td>
          </tr>
          <tr>
            <td>10</td>
            <td>1 val.</td>
            <td>1 metai</td>
            <td>10 metų</td>
          </tr>
          <tr>
            <td>12</td>
            <td>3 d.</td>
            <td>30 000 metų</td>
            <td>Milijonai metų</td>
          </tr>
        </tbody>
      </table>
      <h3>🔹 Išvada</h3>
      <p>Rekomenduojama naudoti bent 12 simbolių ilgio slaptažodžius su įvairiais simboliais.</p>
    </div>
  );
};

export default PasswordLengthImpact;