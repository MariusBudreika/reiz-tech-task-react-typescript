import React from "react";
import { Country } from "../../App";
import SingleCountry from "../SingleCountry/SingleCountry";

interface Props {
  countries: Country[];
}

const CountriesList: React.FC<Props> = ({ countries }) => {
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <SingleCountry key={country.name} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
