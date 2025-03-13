// src/components/PasswordAnalysis.jsx
import React from "react";

const PasswordAnalysis = ({ analysis }) => {
  return (
    <div className="password-analysis">
      <h2>Analizės Rezultatai</h2>
      <p><strong>Slaptažodžio ilgis:</strong> {analysis.length} simbolių</p>
      <p><strong>Simbolių įvairovė:</strong> {analysis.characterVariety}</p>
      <p><strong>Numatomas nulaužimo laikas:</strong> {analysis.estimatedTime}</p>
      <p><strong>Stiprumo lygis:</strong> {analysis.strengthLevel}</p>
      <p><strong>Rekomendacija:</strong> {analysis.suggestion}</p>
    </div>
  );
};

export default PasswordAnalysis;