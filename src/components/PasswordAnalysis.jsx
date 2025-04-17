import React from "react";
import zxcvbn from "zxcvbn";
import {
  FiHash,
  FiClock,
  FiLock,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";

const PasswordAnalysis = ({ password }) => {
  const result = zxcvbn(password);

  const strengthLabels = ["Labai silpnas", "Silpnas", "Vidutinis", "Stiprus", "Labai stiprus"];

  const getStrengthColor = (score) => {
    switch (score) {
      case 0:
        return "text-red-700";
      case 1:
        return "text-red-500";
      case 2:
        return "text-yellow-400";
      case 3:
        return "text-green-500";
      case 4:
        return "text-emerald-400";
      default:
        return "text-white";
    }
  };
  
  const crackTime = result.crack_times_display.offline_slow_hashing_1e4_per_second;
  const feedback = result.feedback;

  return (
    <div className="rounded-md mt-5 mx-auto text-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <tbody>
            {/* Ilgis */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiHash /> Slaptažodžio ilgis:
              </td>
              <td className="p-3">{password.length} simbolių</td>
            </tr>

            {/* Crack time */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiClock /> Nulaužimo laikas (CPU):
              </td>
              <td className="p-3">{crackTime}</td>
            </tr>

            {/* Stiprumas */}
            <tr className="border-b border-white/20">
              <td className="p-3 font-semibold flex items-center gap-2">
                <FiLock /> Stiprumas:
              </td>
              <td className={`p-3 font-bold ${getStrengthColor(result.score)}`}>
                {strengthLabels[result.score]}
              </td>
            </tr>

            {/* Komentaras */}
            {feedback.warning && (
              <tr className="border-b border-white/20">
                <td className="p-3 font-semibold flex items-center gap-2">
                  <FiAlertCircle /> Įspėjimas:
                </td>
                <td className="p-3 text-yellow-400">{feedback.warning}</td>
              </tr>
            )}

            {/* Rekomendacijos */}
            {feedback.suggestions.length > 0 && (
              <tr>
                <td className="p-3 font-semibold flex items-center gap-2">
                  <FiCheckCircle /> Rekomendacija:
                </td>
                <td className="p-3">{feedback.suggestions.join(" ")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PasswordAnalysis;
