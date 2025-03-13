// Sudėtingumo įtaka saugumui

// src/components/ComplexityImpact.jsx
import React from "react";

const ComplexityImpact = () => {
  return (
    <div className="flex flex-col bg-black/20 backdrop-blur-md rounded-3xl p-15 text-center gap-5">
      <h2>🔠 Slaptažodžio Sudėtingumo Įtaka</h2>
      <p>
        Skirtingi simbolių rinkiniai suteikia skirtingą apsaugos lygį. Kuo įvairesni simboliai, tuo sunkiau slaptažodį nulaužti.
      </p>
      <table>
        <thead>
          <tr>
            <th>Slaptažodis</th>
            <th>Simbolių Aibė</th>
            <th>Teorinis nulaužimo laikas (su GPU)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>Skaičiai (10)</td>
            <td>&lt; 1 sek.</td>
          </tr>
          <tr>
            <td>password</td>
            <td>Mažosios raidės (26)</td>
            <td>1 sek.</td>
          </tr>
          <tr>
            <td>P@ssw0rd</td>
            <td>Raidės + skaičiai + simboliai (95)</td>
            <td>3 dienos</td>
          </tr>
          <tr>
            <td>mD#5*Gh2@x</td>
            <td>Visi simboliai</td>
            <td>100+ metų</td>
          </tr>
        </tbody>
      </table>
      <h3>🔹 Išvada</h3>
      <p>
        Slaptažodis turėtų turėti didžiąsias, mažąsias raides, skaičius ir specialius simbolius, kad būtų saugesnis.
      </p>
    </div>
  );
};

export default ComplexityImpact;