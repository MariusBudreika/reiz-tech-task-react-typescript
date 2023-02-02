import { Country } from "../App";

export const fetchCountries = async (): Promise<Country[]> => {
  const res = await fetch(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );
  const data = await res.json();
  return data;
};
