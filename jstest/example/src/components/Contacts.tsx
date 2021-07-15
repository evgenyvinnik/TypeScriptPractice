import React from 'react'
import Contact from './Contact'

export const Contacts = (props: any) => {
  console.log(props)
  return (
    <div>
      {props.users.users  ? props.users.users.map(user => (<Contact key={user.id} user={user}></Contact>)) : null}
    </div>
  )
}
