import PersonCard from "./PersonCard";
const PersonsList = ({ persons, handleDelete, handleEdit }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {persons.map((person) => (
        <PersonCard
          handleDelete={handleDelete}
          key={person.id}
          person={person}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
export default PersonsList;
