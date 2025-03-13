// src/components/PasswordInput.jsx
import React from "react";

const PasswordInput = ({ password, setPassword }) => {
  return (
    <input
      type="name"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Įveskite slaptažodį"
    />
  );
};

export default PasswordInput;