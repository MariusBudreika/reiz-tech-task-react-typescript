import React, { useState, useEffect } from "react";
import Container from "./components/Container/Container";

interface Country {
  name: string;
  region: string;
  area: number;
}

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredAndSortedCountries, setFilteredAndSortedCountries] = useState<
    Country[]
  >([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
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
    <div>
      <Container>
        <header>
          <h2>Countries</h2>
          <label>
            Filter by:
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Countries</option>
              <option value="smaller">Smaller Than Lithuania</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
        </header>
        <div>
          <button onClick={() => setSortOrder("asc")}>Sort A-Z</button>
          <button onClick={() => setSortOrder("desc")}>Sort Z-A</button>
        </div>
      </Container>
      <Container>
        <ul>
          {filteredAndSortedCountries.map((country) => (
            <li key={country.name}>
              <p>Name: {country.name}</p>
              <p>Region: {country.region}</p>
              <p>Area: {country.area} km²</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default App;
