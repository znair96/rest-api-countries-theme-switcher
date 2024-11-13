import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import { Link } from "react-router-dom";
import SearchIcon from "../assets/search_icon.svg";
function CountryListPage() {
  const [countries, setCountries] = useState([]);
  const [countryFilterText, setCountryFilterText] = useState("");
  const [filteredCountry, setFilteredCountry] = useState(countries);
  const [selectedRegion, setSelectedRegion] = useState("");
  useEffect(() => {
    const getCountriesList = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonResponse = await response.json();
      setCountries(jsonResponse);
      setFilteredCountry(jsonResponse);
    };
    getCountriesList();
  }, []);
  useEffect(() => {
    if (countries.length > 0) {
      setFilteredCountry(
        countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(countryFilterText.toLowerCase())
        )
      );
    }
  }, [countryFilterText]);
  useEffect(() => {
    if (selectedRegion) {
      const getCountriesListBasedOnRegion = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectedRegion}`
        );
        const jsonResponse = await response.json();
        setCountries(jsonResponse);
        setFilteredCountry(jsonResponse);
      };
      getCountriesListBasedOnRegion();
    }
  }, [selectedRegion]);
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="relative">
          <img
            src={SearchIcon}
            alt="Search Country"
            className="absolute top-[14px] left-4 w-[14px]"
          />
          <input
            type="text"
            placeholder="Search for a country"
            className="bg-white shadow-[0_2px_9px_rgba(0,0,0,0.0532439)] rounded-[5px] w-[480px] h-[42px] pl-10 font-nunito font-normal text-sm text-[#848484] focus:outline-none"
            value={countryFilterText}
            onChange={(e) => setCountryFilterText(e.target.value)}
          />
        </div>
        <div>
          <select
            name=""
            id=""
            onChange={(e) => setSelectedRegion(e.target.value)}
            value={selectedRegion}
          >
            <option value="" disabled selected>
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div>
        <div className="py-10 container grid grid-cols-4 gap-y-14 ">
          {filteredCountry.map((country, index) => (
            <Link
              key={index + 111}
              to={`/country/${country.ccn3}`}
              className="w-[264px] shadow-[0_0_7px_2px_rgba(0,0,0,0.0294384)] bg-white"
            >
              <CountryCard country={country} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountryListPage;