import React from 'react'

const Contact = (props: any) => {
  //console.log(props);

  const seeContactDetails = (event) => {
    console.log('seeContactDetails');
  }

  return (
    <div>
      <div>
        {props.user.name}
      </div>
      <div>
        {props.user.email}
      </div>
      <button onClick={seeContactDetails}>See Details</button>
   </div>
  )
}

export default Contact
