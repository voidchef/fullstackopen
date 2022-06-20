import Weather from "./Weather";

const Country = ({ countryData }) => {
  return (
    <div>
      <h1>{countryData.name["common"]}</h1>
      <p>capital {countryData.capital}</p>
      <p>area {countryData.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(countryData.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={countryData.flags["png"]} alt="flag" />
      <h2>Weather in {countryData.name["common"]}</h2>
      <Weather
        lat={countryData.capitalInfo["latlng"][0]}
        lon={countryData.capitalInfo["latlng"][1]}
      />
    </div>
  );
};

export default Country;
