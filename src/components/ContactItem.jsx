function ContactItem({
  data: { id,name, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <div>
      <p>
        {name} {lastName}
      </p>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={()=>deleteHandler(id)}>Delete</button>
    </div>
  );
}

export default ContactItem;
