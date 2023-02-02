import React, { useState } from "react";
import Container from "../Container/Container";

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
          <h2>Countries</h2>
          <label>
            Filter by:
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Countries</option>
              <option value="smaller">Smaller Than Lithuania</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
        </div>
        <div>
          <button onClick={() => setSortOrder("asc")}>Sort A-Z</button>
          <button onClick={() => setSortOrder("desc")}>Sort Z-A</button>
        </div>
      </div>
    </Container>
  );
};

export default Top;
