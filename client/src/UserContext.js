import { createContext, useState } from 'react';

export const UserContext = createContext('');

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const exportObj = {
        user,
        loggedIn,
        setUser: (newUser) => setUser(newUser),
        setLoggedIn: (status) => setLoggedIn(status)
    }

    return (
        <UserContext.Provider value={exportObj}>
            { children}
        </UserContext.Provider >
    )
}