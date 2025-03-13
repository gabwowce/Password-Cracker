
// src/utils/analyzePassword.js
const analyzePassword = (password) => {
    const length = password.length;
    let characterVariety = "Maža";
    let estimatedTime = "Labai trumpas - < sek.";
    let strengthLevel = "Silpnas";
    let suggestion = "Pridėkite daugiau simbolių ir įvairių simbolių.";
  
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const varietyCount = [hasLower, hasUpper, hasNumbers, hasSpecial].filter(Boolean).length;
  
    if (varietyCount === 2) characterVariety = "Vidutinė";
    if (varietyCount >= 3) characterVariety = "Didelė";
  
    if (length >= 12 && varietyCount >= 3) {
      estimatedTime = "Tūkstančiai metų";
      strengthLevel = "Labai stiprus";
      suggestion = "Jūsų slaptažodis yra labai saugus!";
    } else if (length >= 10 && varietyCount >= 2) {
      estimatedTime = "Šimtai metų";
      strengthLevel = "Stiprus";
      suggestion = "Puikus slaptažodis, bet visada galima pridėti daugiau simbolių.";
    } else if (length >= 8) {
      estimatedTime = "Keletas valandų - keli metai";
      strengthLevel = "Vidutinis";
      suggestion = "Rekomenduojama ilgesnis slaptažodis ir daugiau simbolių.";
    }
  
    return { length, characterVariety, estimatedTime, strengthLevel, suggestion };
  };
  
  export default analyzePassword;
  