const apskaiciuotiNulauzimoLaika = (password) => {
  const ilgis = password.length;
  const turiDidziasRaides = /[A-Z]/.test(password);
  const turiMazasRaides = /[a-z]/.test(password);
  const turiSkaicius = /\d/.test(password);
  const turiSimbolius = /[\W_]/.test(password);

  // Skaičiuojame simbolių rinkinį
  let simboliuRinkinys = 0;
  if (turiMazasRaides) simboliuRinkinys += 26;
  if (turiDidziasRaides) simboliuRinkinys += 26;
  if (turiSkaicius) simboliuRinkinys += 10;
  if (turiSimbolius) simboliuRinkinys += 32;

  // Visos galimos kombinacijos
  const galimosKombinacijos = Math.pow(simboliuRinkinys, ilgis);

  // Realūs atakų greičiai
  const cpuAtaka = 10 ** 7; // 10 milijonų bandymų per sekundę (silpnas kompiuteris)
  const gpuAtaka = 10 ** 9; // 1 milijardas bandymų per sekundę (vidutinė GPU ataka)
  const superkompiuteris = 10 ** 12; // 1 trilijonas bandymų per sekundę (botnet arba didelio masto ataka)

  // Skaičiuojame laiką skirtingoms atakoms
  const cpuSekundes = galimosKombinacijos / cpuAtaka;
  const gpuSekundes = galimosKombinacijos / gpuAtaka;
  const superSekundes = galimosKombinacijos / superkompiuteris;

  // Konvertuojame į patogesnius formatus
  const formatLaikas = (sekundes) => {
    if (sekundes < 60) return "Nulaužiamas akimirksniu";
    if (sekundes < 3600) return "Per kelias minutes";
    if (sekundes < 86400) return "Per kelias valandas";
    if (sekundes < 31536000) return "Per kelias dienas";
    if (sekundes < 315360000) return "Per kelis mėnesius";
    if (sekundes < 3153600000) return "Per kelis metus";
    return `${(sekundes / 31536000).toFixed(2)} metų`;
  };

  return {
    cpu: formatLaikas(cpuSekundes),
    gpu: formatLaikas(gpuSekundes),
    superkompiuteris: formatLaikas(superSekundes),
  };
};


const analizuotiSlaptazodi = (password) => {
  const ilgis = password.length;
  const turiDidziasRaides = /[A-Z]/.test(password);
  const turiMazasRaides = /[a-z]/.test(password);
  const turiSkaicius = /\d/.test(password);
  const turiSimbolius = /[\W_]/.test(password);
  
  const rezultatai = apskaiciuotiNulauzimoLaika(password);
  const numatomasLaikas = apskaiciuotiNulauzimoLaika(password);

  let stiprumoLygis = "Labai silpnas";
  let rekomendacija = "Slaptažodis per trumpas. Pabandykite pridėti daugiau simbolių.";

  if (ilgis >= 8 && (turiDidziasRaides || turiSkaicius || turiSimbolius)) {
    stiprumoLygis = "Silpnas";
    rekomendacija = "Pabandykite įtraukti didžiąsias raides, skaičius ir specialius simbolius.";
  }
  
  if (ilgis >= 10 && turiDidziasRaides && turiSkaicius && turiMazasRaides) {
    stiprumoLygis = "Vidutinis";
    rekomendacija = "Pridėkite specialių simbolių, kad slaptažodis būtų stipresnis.";
  }
  
  if (ilgis >= 12 && turiDidziasRaides && turiSkaicius && turiSimbolius && turiMazasRaides) {
    stiprumoLygis = "Stiprus";
    rekomendacija = "Puiku! Jūsų slaptažodis yra pakankamai stiprus.";
  }
  
  if (ilgis >= 15 && turiDidziasRaides && turiSkaicius && turiSimbolius && turiMazasRaides) {
    stiprumoLygis = "Labai stiprus";
    rekomendacija = "Nuostabu! Jūsų slaptažodis yra beveik neįmanoma nulaužti.";
  }

  return {
    ilgis,
    turiDidziasRaides,
    turiMazasRaides,
    turiSkaicius,
    turiSimbolius,
    numatomasLaikas,
    stiprumoLygis,
    rekomendacija,
    nulauzimoLaikasCPU: rezultatai.cpu, // ✅ Reikia tinkamai perduoti
    nulauzimoLaikasGPU: rezultatai.gpu, // ✅
    nulauzimoLaikasSuper: rezultatai.superkompiuteris // ✅
  };
};

export default analizuotiSlaptazodi;
