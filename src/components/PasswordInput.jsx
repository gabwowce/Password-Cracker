// src/components/PasswordInput.jsx
import React from "react";

const PasswordInput = ({ password, setPassword }) => {
  return (
    <input
    className="py-2 text-center text-xl"
      type="name"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Įveskite slaptažodį"
    />
  );
};

export default PasswordInput;