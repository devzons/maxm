import React from 'react'

const UserOutput = (props) => {
  return(
    <div>
      <p>Username: {props.username}</p>
      <p>{props.text}</p>
      <p>Some text....</p>
    </div>
  )
}

export default UserOutput