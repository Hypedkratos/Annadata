import { getCurrentUser } from './appwrite'
import { createContext, useContext, useEffect, useState } from 'react'
export const intialUser = {
    name: '',
    email: '',
}

const intialState = {
    user: intialUser,
    isAuth: false,
    setIsAuth: () => { },
    setUser: () => { },
}


const AuthContext = createContext(intialState);

const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    const [isAuth, setIsAuth] = useState(false)

    async function checkAuth() {
        const res = await getCurrentUser();
        if (res) {
            setIsAuth(true);
            setUser({ name: res.name, email: res.email });
            
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ user, isAuth, setIsAuth, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useUser = () => useContext(AuthContext)