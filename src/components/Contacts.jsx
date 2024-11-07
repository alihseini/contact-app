import { useState } from "react";
import styles from "./Contacts.module.css";

function Contacts() {
    const [contacts,setContacts]=useState([]);
    const [contact,setContact]=useState({
        name:"",lastName:"",email:"",phone:"",
    });
    const changeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setContact((contact)=>({...contact,[name]:value}));
    }
    const addHandler=()=>{
      setContacts((contacts)=>([...contacts,contact]));
      console.log(contacts)
    }
  return (
    <div className={styles.container}>
      <div className={styles.addContacts}>
          <input type="text" placeholder="Name" onChange={changeHandler} value={contact.name} name="name"  />    
          <input type="text" placeholder="Last name" onChange={changeHandler} value={contact.lastName} name="lastName" />    
          <input type="text" placeholder="Email" onChange={changeHandler} value={contact.email} name="email" />    
          <input type="text" placeholder="Phone" onChange={changeHandler} value={contact.phone} name="phone" />
          <button onClick={addHandler}>Add Contact</button>    
      </div>
    </div>  
  )
}

export default Contacts