import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleChange = (e) => setCountry(e.target.value);

  useEffect(() => {
    if (country) {
      const countries = data.filter(({ name }) =>
        name.common.toLowerCase().includes(country.toLowerCase())
      );
      setSearchResult(countries);
    } else setSearchResult("");
  }, [country, data]);

  return (
    <>
      <Search country={country} onChange={handleChange} />
      <SearchResult searchResult={searchResult} setCountry={setCountry} />
    </>
  );
}

export default App;
