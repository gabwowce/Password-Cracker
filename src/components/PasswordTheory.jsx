// src/components/PasswordTheory.jsx
import React, { useState } from "react";

const PasswordTheory = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="password-theory">
      <h2>Slaptažodžių Teorija</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button className="accordion-title" onClick={() => toggleSection("entropy")}>Entropijos Skaičiavimas</button>
          {openSection === "entropy" && (
            <div className="accordion-content">
              <p>Slaptažodžio entropija apskaičiuojama pagal formulę:</p>
              <p><strong>H = L × log₂(N)</strong></p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button className="accordion-title" onClick={() => toggleSection("bruteforce")}>Brute-force Atakos Laikas</button>
          {openSection === "bruteforce" && (
            <div className="accordion-content">
              <p>Laikas apskaičiuojamas taip:</p>
              <p><strong>T = (N^L) / S</strong></p>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button className="accordion-title" onClick={() => toggleSection("strength")}>Slaptažodžio Stiprumas</button>
          {openSection === "strength" && (
            <div className="accordion-content">
              <table>
                <thead>
                  <tr>
                    <th>Stiprumas</th>
                    <th>Entropija (H)</th>
                    <th>Brute-force Laikas (su GPU)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Silpnas</td>
                    <td>&lt; 40 bitų</td>
                    <td>&lt; Sekundė</td>
                  </tr>
                  <tr>
                    <td>Vidutinis</td>
                    <td>40-60 bitų</td>
                    <td>Minutės - valandos</td>
                  </tr>
                  <tr>
                    <td>Stiprus</td>
                    <td>60-80 bitų</td>
                    <td>Metai - tūkstantmečiai</td>
                  </tr>
                  <tr>
                    <td>Labai stiprus</td>
                    <td>&gt; 80 bitų</td>
                    <td>Milijonai metų</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="accordion-item">
          <button className="accordion-title" onClick={() => toggleSection("recommendations")}>Rekomendacijos</button>
          {openSection === "recommendations" && (
            <div className="accordion-content">
              <ul>
                <li>Naudokite bent 12 simbolių ilgio slaptažodžius.</li>
                <li>Maišykite mažąsias, didžiąsias raides, skaičius ir specialius simbolius.</li>
                <li>Įjunkite dviejų veiksnių autentifikaciją (2FA).</li>
                <li>Ilgos slaptafrazės yra saugesnės nei trumpi sudėtingi slaptažodžiai.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordTheory;