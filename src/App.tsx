import React, { useState, useEffect } from "react";

interface Country {
  name: string;
  region: string;
  area: number;
}

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <p>Name: {country.name}</p>
            <p>Region: {country.region}</p>
            <p>Area: {country.area}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
