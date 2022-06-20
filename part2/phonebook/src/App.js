import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    if (newPerson.name.length !== 0 && newPerson.number.length !== 0) {
      if (!persons.find(({ name }) => name === newPerson.name)) {
        axios
          .post("http://localhost:3001/persons", newPerson)
          .then((response) => setPersons(persons.concat(response.data)));
        setNewPerson({ name: "", number: "" });
      } else {
        alert(`${newPerson.name} is already added to the phonebook`);
      }
    }
  };

  const handleInputChange = (e) =>
    setNewPerson({ ...newPerson, [e.target.dataset.field]: e.target.value });

  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const personsToShow = filterName
    ? persons.filter(({ name }) =>
        name.toLowerCase().includes(filterName.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterName} onChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        name={newPerson.name}
        number={newPerson.number}
        onChange={handleInputChange}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
