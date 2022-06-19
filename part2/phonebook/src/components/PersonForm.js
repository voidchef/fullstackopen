const PersonForm = ({ onSubmit, name, number, onChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      name:
      <input data-field="name" value={name} onChange={onChange} />
      <br />
      number:
      <input data-field="number" value={number} onChange={onChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
