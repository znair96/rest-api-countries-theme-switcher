import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackArrowIcon from "../assets/back_arrow.svg";
function CountryDetailPage() {
  const { countryCode } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);
  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      const jsonResponse = await response.json();
      setCountryDetail(jsonResponse);
    };
    getCountry();
  }, []);
  console.log(countryDetail);
  if (!countryDetail.length) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="h-screen overflow-y-hidden">
      <Link
        to="/"
        className="font-nunito text-base font-light mb-14 mt-12 flex gap-3"
      >
        <img src={BackArrowIcon} alt="Go Back" />
        Back
      </Link>
      <div className="flex gap-56 items-center">
        <div className="w-[560px] h-[401px]">
          <img
            src={countryDetail[0].flags.png}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2 className="font-nunito font-extrabold text-3xl mb-6">
            {countryDetail[0].name.common}
          </h2>
          <div className="flex gap-40">
            <div>
              <p className="font-nunito font-light text-base mb-1">
                <strong className="text-[#111517] font-semibold">
                  Native Name:
                </strong>{" "}
                {Object.values(countryDetail[0].name.nativeName)[0].common}
              </p>
              <p className="font-nunito font-light text-base mb-1">
                <strong className="text-[#111517] font-semibold">
                  Population:
                </strong>{" "}
                {countryDetail[0].population}
              </p>
              <p className="font-nunito font-light text-base mb-1">
                <strong className="text-[#111517] font-semibold">
                  Region:
                </strong>{" "}
                {countryDetail[0].region}
              </p>
              <p className="font-nunito font-light text-base mb-1">
                <strong className="text-[#111517] font-semibold">
                  Sub Region:
                </strong>{" "}
                {countryDetail[0].subregion ?? "NA"}
              </p>
              <p className="font-nunito font-light text-base mb-1">
                <strong className="text-[#111517] font-semibold">
                  Capital:
                </strong>{" "}
                {countryDetail[0].capital}
              </p>
            </div>
            <div>
              <p className="font-nunito font-light text-base">
                <strong className="text-[#111517] font-semibold">
                  Top Level Domain:
                </strong>{" "}
                {countryDetail[0].tld}
              </p>
              <p className="font-nunito font-light text-base">
                <strong className="text-[#111517] font-semibold">
                  Currencies:
                </strong>{" "}
                {Object.values(countryDetail[0].currencies)[0].name}
              </p>
              <p className="font-nunito font-light text-base">
                <strong className="text-[#111517] font-semibold">
                  Languages:
                </strong>{" "}
                {Object.values(countryDetail[0].languages).join(",")}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-12">
            <p className="text-[#111517] font-medium text-base">
              Border Countries:
            </p>
            <div className="flex gap-2">
              {countryDetail[0].borders
                ? countryDetail[0].borders.map((borderCountry, index) => (
                    <p
                      className="bg-white shadow-[0_0_4px_1px_rgba(0,0,0,0.104931)] text-[#111517] font-light text-xs flex justify-center items-center px-3"
                      key={index}
                    >
                      {borderCountry}
                    </p>
                  ))
                : "NA"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetailPage;

/* Rectangle */
// background: #FFFFFF;
// box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
// border-radius: 2px;
