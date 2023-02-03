import React from "react";
import { Country } from "../../App";
import Container from "../Container/Container";
import Item from "./Item";

interface Props {
  currentCountries: Country[];
}

const Items: React.FC<Props> = ({ currentCountries }) => {
  return (
    <Container>
      <ul>
        {currentCountries.map((country) => (
          <Item key={country.name} country={country} />
        ))}
      </ul>
    </Container>
  );
};

export default Items;
