import React from "react";

export const PasswordCreationTips = () => {
  return (
    <div className="bg-black/20 backdrop-blur-md rounded-xl p-5 mt-2 text-white text-left text-sm space-y-4">
      <h2 className="pb-10 text-2xl text-center">💡 Slaptažodžių kūrimo patarimai</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Naudokite frazes arba sakinius (pvz. „ManPatinkaKava123!“)</li>
        <li>Venkite įprastų žodžių, gimtadienių ar vardų</li>
        <li>Naudokite bent 12 simbolių</li>
        <li>Derinkite skaičius, raides ir simbolius</li>
      </ul>
      <p className="text-xs text-gray-400 mt-4">
        Šaltinis: <a className="underline" href="https://www.ncsc.gov.uk/blog-post/passwords-passwords-everywhere" target="_blank">UK NCSC – Password Creation Advice</a>
      </p>
    </div>
  );
};
