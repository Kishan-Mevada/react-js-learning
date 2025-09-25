import { useContext } from "react";
import { UContext } from "./UserContext";

import React from 'react'

const UserProfile = () => {

    const { user } = useContext(UContext);

  return (
    <div>
        <h1>User Profile</h1>
        <p> Name: {user.name}</p>
    </div>
  )
}

export default UserProfile