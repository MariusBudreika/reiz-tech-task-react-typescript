import React from "react";
import { Country } from "../../App";
import Container from "../Container/Container";
import SingleCountry from "../SingleCountry/SingleCountry";

interface Props {
  countries: Country[];
}

const CountriesList: React.FC<Props> = ({ countries }) => {
  return (
    <Container>
      <ul>
        {countries.map((country) => (
          <SingleCountry key={country.name} country={country} />
        ))}
      </ul>
    </Container>
  );
};

export default CountriesList;
