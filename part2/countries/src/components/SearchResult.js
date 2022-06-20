import Country from "./Country";

const SearchResult = ({ searchResult, setCountry }) => {
  if (searchResult.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (searchResult.length > 1) {
    return searchResult.map((country) => (
      <p key={country.name["common"]}>
        {country.name["common"]}
        <button onClick={() => setCountry(country.name["common"])}>show</button>
      </p>
    ));
  } else if (searchResult.length === 1) {
    return <Country countryData={searchResult[0]} />;
  }
};

export default SearchResult;
