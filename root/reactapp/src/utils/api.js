export const LOCALHOST = "http://localhost:8000/";

export async function fetchPopulation(country) {
  const response = await fetch(LOCALHOST + `population/${country}/2023/`);
  const jsonData = await response.json();
  return jsonData;
}

export async function fetchLifeExpectancy(country, year) {
  const response = await fetch(
    LOCALHOST + "lifeExpectancy/" + country + "/" + year + "/"
  );
  const jsonData = await response.json();
  return jsonData;
}

export async function fetchCountries() {
  const response = await fetch(LOCALHOST + "countries");
  const jsonData = await response.json();
  return jsonData;
}

export async function getWorldLifeSpan(yearChoice) {
  const response = await fetch(
    LOCALHOST + "lifeExpectancy/World/" + yearChoice + "/"
  );
  const jsonData = await response.json();
  return jsonData
}

export async function getCountryLifeSpan(countryChoice, yearChoice) {
  const response = await fetch(
    LOCALHOST + "lifeExpectancy/" + countryChoice + "/" + yearChoice + "/"
  );
  const jsonData = await response.json()
  return jsonData
}

export async function fetchYoungerOlderWorld() {
  const response = await fetch(LOCALHOST + "youngerOlderInfo/World/2023/");
  const jsonData = await response.json();
  return jsonData
}