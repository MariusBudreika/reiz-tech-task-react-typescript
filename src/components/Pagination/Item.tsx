import React from "react";
import { Country } from "../../App";
import styles from "./item.module.scss";

interface Props {
  country: Country;
}

const Item: React.FC<Props> = ({ country }) => {
  return (
    <li className={styles.list} key={country.name}>
      <p>Name: {country.name}</p>
      <p>Region: {country.region}</p>
      <p>Area: {country.area} km²</p>
    </li>
  );
};

export default Item;
