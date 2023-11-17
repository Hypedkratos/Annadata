import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import Pickupstatus from './Pickupstatus';
import { useNavigation } from '@react-navigation/native'
import { loginUserAccoutn } from '../appwrite/service';
import { useUser } from '../context/AuthContext';



const handleLinkpress = () => {
    const url = 'https://annadata-rk.vercel.app/signup'; // iss link ko web ka login se replace kr dunga, HUE HUE HUE
    Linking.openURL(url);
  }

const Ngologin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const {setIsAuth, setUser}=useUser();
    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            const res = await loginUserAccoutn(username, password);
            console.log(res)
            if (res) {
                setUser({name: "", email:username})
                setIsAuth(true);
                navigation.navigate(Pickupstatus)
            }
        } catch (error) {
            console.log('somethign went wrong in login', error)
        }
    }
    return (
        <KeyboardAvoidingView style={styles.maincontainer}>
            {/* The header goes here */}
            <View>
                <Text
                    style={{
                        color: 'black', fontSize: 40, fontWeight: 'bold', textAlign: 'justify',
                        marginLeft: 15, marginRight: 15, marginTop: -200
                    }}>
                    Login</Text>
            </View>

            {/* The input boxes goes here */}
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                >
                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                >
                </TextInput>
            </View>

            {/* The Login button goes here */}
            <View>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginbutton}>
                    <Text>
                        LOGIN
                    </Text>

                </TouchableOpacity>
            </View>

            {/* The registration link for NGO is here */}
            <View style={{ marginTop: 10 }}>
                <Text

                    style={{ color: '#4FA', fontSize: 12 }}>
                    Not Rgistered? Click here!
                </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Ngologin

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    input: {
        textAlign: 'left',
        fontSize: 15,
        marginTop: -30,
        paddingHorizontal: 16,
        marginVertical: 20

    },
    loginbutton: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FA3',
        padding: 8,
        width: 213,
        height: 39,
        borderRadius: 30,
        marginTop: 25
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: -30
    }
})