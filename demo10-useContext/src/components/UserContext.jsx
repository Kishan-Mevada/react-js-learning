import { Children, createContext, useState } from "react";

const UContext = createContext();

const UserProvider = ({children}) => {
    const [user, setName] = useState({name: 'John Doe'});

    const updateUser = (newName) => {
        setName({name: newName});
    }

    return <UContext.Provider value={{user, updateUser}}>
        {children}
    </UContext.Provider>
}

export { UContext, UserProvider}