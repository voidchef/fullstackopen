import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filterName, setFilterName] = useState("");

  const addName = (e) => {
    e.preventDefault();
    if (newPerson.name.length !== 0 && newPerson.number.length !== 0) {
      if (!persons.find(({ name }) => name === newPerson.name)) {
        setPersons(persons.concat(newPerson));
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
        onSubmit={addName}
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
