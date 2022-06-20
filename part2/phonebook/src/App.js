import { useState, useEffect } from "react";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Services from "./services/services";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filterName, setFilterName] = useState("");
  const [errorMessage, setMessage] = useState(null);

  useEffect(() => {
    Services.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (e) => {
    e.preventDefault();
    if (newPerson.name.length !== 0 && newPerson.number.length !== 0) {
      if (!persons.find(({ name }) => name === newPerson.name)) {
        Services.create(newPerson)
          .then((response) => {
            setPersons(persons.concat(response));
            setMessage(`Added ${newPerson.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setNewPerson({ name: "", number: "" });
          })
          .catch((error) => {
            console.log(error);
            setMessage(
              `[ERROR] ${newPerson.name} was already deleted from server`
            );
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      } else {
        if (
          window.confirm(
            `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
          )
        ) {
          const index = persons.findIndex(
            (person) => person.name === newPerson.name
          );
          const id = persons[index].id;
          Services.update(id, newPerson)
            .then(() => {
              setPersons(
                persons.map((person) => (person.id !== id ? person : newPerson))
              );
              setMessage(`${newPerson.name} was successfully updated`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
              setNewPerson({ name: "", number: "" });
            })
            .catch((error) => {
              setMessage(`[ERROR] ${error.response.data.error}`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
            });
        }
      }
    }
  };

  const handleInputChange = (e) =>
    setNewPerson({ ...newPerson, [e.target.dataset.field]: e.target.value });

  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleDelete = (id) => {
    const index = persons.findIndex((person) => person.id === id);
    if (window.confirm(`Delete ${persons[index].name}`)) {
      Services.remove(id)
        .then(() => {
          setMessage(`${persons[index].name} was deleted successfully`);
          setPersons(persons.filter((person) => person.id !== id));
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setMessage(`[ERROR] ${error.response.data.error}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
    }
  };

  const personsToShow = filterName
    ? persons.filter(({ name }) =>
        name.toLowerCase().includes(filterName.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter value={filterName} onChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        name={newPerson.name}
        number={newPerson.number}
        onChange={handleInputChange}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} remove={handleDelete} />
    </div>
  );
};

export default App;
