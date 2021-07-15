import React, { useState } from "react";
import { Contacts } from "./components/Contacts";
import CreateContactForm from "./components/CreateContactForm";

const App = () => {
  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8081/users");
    const data = await response.json();
    return data;
  }

  //useEffect(addFavorite, [])

  const getUsers = async () => {
    const retrievedUsers = await fetchUsers();
    //console.log(retrievedUsers);
    setUsers(retrievedUsers);
  }

  const addNewContact = (newContact) => {
    //const retrievedUsers = await fetchUsers();
    console.log(newContact);
    newContact = {...newContact, id: Math.random()};
    setUsers([...(users as any).users, newContact]);
    // setUsers(prevUsers => {
    //   console.log(prevUsers);
    //   //prevUsers.users = {newContact, ...prevUsers.users};
    //   return prevUsers;
    // });
    //setUsers(retrievedUsers);
  }

  return (
    <div>
      <button onClick={getUsers}>Fetch Users</button>
      <CreateContactForm addNewContact={addNewContact}></CreateContactForm>
      <Contacts users={users}></Contacts>
    </div>
  )
}

export default App;