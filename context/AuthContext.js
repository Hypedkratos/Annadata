
import { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentUser } from '../appwrite/service';
import { useNavigation } from '@react-navigation/native';
import Pickupstatus from '../screens/Pickupstatus';
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
    const navigation= useNavigation();
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
            navigation.navigate(Pickupstatus)
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