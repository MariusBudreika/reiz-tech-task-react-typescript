import React, { useState, useEffect } from "react";
import CountriesList from "./components/CountriesList/CountriesList";
import Top from "./components/Top/Top";

export interface Country {
  name: string;
  region: string;
  area: number;
}

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredAndSortedCountries, setFilteredAndSortedCountries] = useState<
    Country[]
  >([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Top
        countries={countries}
        setFilteredAndSortedCountries={setFilteredAndSortedCountries}
      />
      <CountriesList countries={filteredAndSortedCountries} />
    </>
  );
};

export default App;
