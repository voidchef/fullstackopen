const Country = ({ countryData }) => {
  return (
    <div>
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
    </div>
  );
};

export default Country;
