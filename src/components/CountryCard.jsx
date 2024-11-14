import React from "react";

// eslint-disable-next-line react/prop-types
function CountryCard({ country }) {
  return (
    <>
      <div className="w-[264px] h-[160px]">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-6 px-6 pb-9 ">
        <h3 className="font-nunito font-extrabold text-lg pb-3">
          {country.name.official}
        </h3>
        <p className="font-nunito font-light text-sm">
          <strong className="font-medium">Population:</strong>{" "}
          {country.population}
        </p>
        <p className="font-nunito font-light text-sm">
          <strong className="font-medium">Region:</strong> {country.region}
        </p>
        <p className="font-nunito font-light text-sm">
          <strong className="font-medium">Capital:</strong> {country.capital}
        </p>
      </div>
    </>
  );
}

export default CountryCard;
