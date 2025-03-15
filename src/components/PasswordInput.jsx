import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TextField, IconButton, InputAdornment } from "@mui/material";

const PasswordInput = ({ password, setPassword, strengthLevel }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Funkcija, kuri nustato border spalvą pagal stiprumą
  const getBorderColor = (strength) => {
    if (strength === "Labai silpnas" || strength === "Silpnas") return "#EF4444"; // Red-500
    if (strength === "Vidutinis") return "#FACC15"; // Yellow-400
    if (strength === "Stiprus") return "#10B981"; // Green-500
    if (strength === "Labai stiprus") return "#047857"; // Green-700
    return "#9CA3AF"; // Default Gray-400
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      type={isVisible ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Įveskite slaptažodį"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: getBorderColor(strengthLevel) },
          "&:hover fieldset": { borderColor: getBorderColor(strengthLevel) },
          "&.Mui-focused fieldset": { borderColor: getBorderColor(strengthLevel) },
          color: "#FFFFFF", // Tekstas baltas
          textAlign: "center",
        },
        input: {
          textAlign: "center", // Centruotas tekstas
          color: "#FFFFFF", // Tekstas baltas
          fontSize: "1.2rem", // Didesnis šriftas
        },
        "& .MuiInputAdornment-root": {
          color: "#FFFFFF", // Ikonų spalva balta
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment className="pr-2" position="end">
            <IconButton onClick={() => setIsVisible(!isVisible)} edge="end">
              {isVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
