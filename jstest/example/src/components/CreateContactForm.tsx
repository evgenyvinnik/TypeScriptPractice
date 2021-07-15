import React from 'react'

const CreateContactForm = ( props) => {
  const onSubmitNewContact = (event) => {
    event.preventDefault();
    // console.log('onSubmitNewContact');
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    props.addNewContact({name: event.target[0].value, email:event.target[1].value});
  }

  return (
    <form onSubmit={onSubmitNewContact}>
      Name: 
      <input type="text" name="Name"></input>
      Email:
      <input type="text" name="Email"></input>
      <button type="submit">Create New Contact</button>
    </form>
  )
}

export default CreateContactForm;
