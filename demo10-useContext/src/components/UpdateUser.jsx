import React, { useContext, useState } from 'react'
import { UContext } from './UserContext'

const UpdateUser = () => {
    const { updateUser } = useContext(UContext)
    const [ newName, setNewName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        updateUser(newName);
    }

  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            value={newName} onChange={(e) => setNewName(e.target.value)}
            placeholder='Provide New User Name' />

            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser