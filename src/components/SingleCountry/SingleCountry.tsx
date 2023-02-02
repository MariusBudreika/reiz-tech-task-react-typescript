import React from "react";
import { Country } from "../../App";
import styles from "./singleCountry.module.scss";

interface Props {
  country: Country;
}

const SingleCountry: React.FC<Props> = ({ country }) => {
  return (
    <li className={styles.list} key={country.name}>
      <p>Name: {country.name}</p>
      <p>Region: {country.region}</p>
      <p>Area: {country.area} km²</p>
    </li>
  );
};

export default SingleCountry;
