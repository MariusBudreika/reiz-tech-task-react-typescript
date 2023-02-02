import React, { useState, useEffect } from "react";
import CountriesList from "./components/CountriesList/CountriesList";
import Top from "./components/Top/Top";
import { fetchCountries } from "./utils/api";

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
    fetchCountries().then(setCountries);
  }, []);

  return (
    <>
      <Top
        countries={countries}
        filteredAndSortedCountries={filteredAndSortedCountries}
        setFilteredAndSortedCountries={setFilteredAndSortedCountries}
      />
      <CountriesList countries={filteredAndSortedCountries} />
    </>
  );
};

export default App;
