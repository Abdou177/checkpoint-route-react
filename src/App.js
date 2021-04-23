import "./styles.css";
import Navbar from "./components/Navbar";
import PersonsList from "./components/PersonsList";
import { useState } from "react";
import personss from "./Data";
import { Route } from "react-router-dom";
import AddForm from "./components/AddForm";
import PersonProfile from "./components/PersonProfile";
export default function App() {
  const [persons, setPersons] = useState(personss);
  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };
  const handleDelete = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };
  const handleEdit = (id, editedPerson) => {
    setPersons(
      persons.map((person) =>
        person.id === id ? { ...person, ...editedPerson } : person
      )
    );
  };
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" render={() => <h1>this is home page</h1>} />
      <Route
        path="/persons"
        render={() => (
          <PersonsList
            persons={persons}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )}
      />
      <Route
        path="/newPerson"
        render={() => <AddForm addPerson={addPerson} />}
      />
      <Route
        path="/profile/:personId"
        render={(props) => <PersonProfile {...props} persons={persons} />}
      />
    </div>
  );
}

// return (
//   <BrowserRouter>
//   <div className="App">
//       <div>
//        <Link to="/list"> <button>list </button></Link>
//        <Link to="/form"> <button>form </button></Link>
//       </div>
//   </div>
//   <Route  path="/list"  render={()=><ListComponent a="5" />} />
//   <Route  path="/form"  >
//     <FormComp />
//   </Route>
//   </BrowserRouter>
// );
