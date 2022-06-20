const Person = ({ person, remove }) => (
  <p>
    {person.name} {person.number}
    <button onClick={() => remove(person.id)}>delete</button>
  </p>
);

const Persons = ({ personsToShow, remove }) => (
  <div>
    {personsToShow.map((person) => (
      <Person key={person.id} person={person} remove={remove} />
    ))}
  </div>
);

export default Persons;
