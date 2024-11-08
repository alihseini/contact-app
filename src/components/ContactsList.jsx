import styles from "./ContactsList.module.css";
import ContactItem from "./ContactItem";

function ContactsList({ data, deleteHandler }) {
  return (
    <>
      <h3 className={styles.title}>Contacts List</h3>
      <div className={styles.contactList}>
        {data.length ? (
          data.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <p className={styles.emptyP}>No contacts added!</p>
        )}
      </div>
    </>
  );
}

export default ContactsList;
