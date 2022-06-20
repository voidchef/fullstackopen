const Country = ({ countryData }) => {
  return (
    <>
      <h1>{countryData.name["common"]}</h1>
      <p>capital {countryData.capital}</p>
      <p>area {countryData.area}</p>
      <h2>languages:</h2>
      <ul>
        {Object.values(countryData.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={countryData.flags["png"]} alt="flag" />
    </>
  );
};

const SearchResult = ({ searchResult }) => {
  if (searchResult.length > 10)
    return <p>Too many matches, specify another filter</p>;
  else if (searchResult.length > 1)
    return searchResult.map((country) => (
      <p key={country.name["common"]}>{country.name["common"]}</p>
    ));
  else if (searchResult.length === 1)
    return <Country countryData={searchResult[0]} />;
};

export default SearchResult;
