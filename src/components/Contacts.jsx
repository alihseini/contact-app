import { useState } from "react";
import styles from "./contacts.module.css";

import ContactsList from "./ContactsList";
import inputs from "../constatnts/inputs";
import { v4 } from "uuid";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      return setAlert("Please Enter Valid Data!");
    }
    const finalContact = { ...contact, id: v4() };
    setAlert("");
    setContacts((contacts) => [...contacts, finalContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.addContacts}>
        {inputs.map((input, index) => (
          <input
            type={input.type}
            key={index}
            name={input.name}
            value={contact[input.name]}
            placeholder={input.placeHolder}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alertDiv}>{alert && <p className={styles.alert}>{alert}</p>}</div>
      <ContactsList data={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
