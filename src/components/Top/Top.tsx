import React, { useState } from "react";
import Container from "../Container/Container";
import styles from "./top.module.scss";

interface TopProps {
  countries: any[];
  filteredAndSortedCountries: any[];
  setFilteredAndSortedCountries: React.Dispatch<React.SetStateAction<any[]>>;
}

const Top: React.FC<TopProps> = ({
  countries,
  filteredAndSortedCountries,
  setFilteredAndSortedCountries,
}) => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  React.useEffect(() => {
    setFilteredAndSortedCountries((prevCountries) => {
      let filteredCountries = [...countries];

      switch (filter) {
        case "all":
          break;
        case "smaller":
          filteredCountries = filteredCountries.filter((country) => {
            return country.area && country.area < 65300;
          });
          break;
        case "oceania":
          filteredCountries = filteredCountries.filter((country) => {
            return country.region === "Oceania";
          });
          break;
        default:
          filteredCountries = [];
          break;
      }

      filteredCountries.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.name > b.name ? 1 : -1;
        }
        return a.name < b.name ? 1 : -1;
      });

      return filteredCountries;
    });
  }, [countries, filter, sortOrder]);

  return (
    <Container>
      <div>
        <div>
          <label>
            <select
              className={styles.topSelect}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option className={styles.topOption} value="all">
                All Countries
              </option>
              <option className={styles.topOption} value="smaller">
                Smaller Than Lithuania
              </option>
              <option className={styles.topOption} value="oceania">
                Oceania
              </option>
            </select>
          </label>
        </div>
        <div>
          <button className={styles.topBtn} onClick={() => setSortOrder("asc")}>
            Sort A-Z
          </button>
          <button
            className={styles.topBtn}
            onClick={() => setSortOrder("desc")}
          >
            Sort Z-A
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Top;
