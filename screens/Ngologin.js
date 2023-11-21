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
                        color: '#3498db', fontSize: 40, fontWeight: 'bold', textAlign: 'justify',
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
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                >
                </TextInput>
            </View>

            {/* The Login button goes here */}
            <View>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginbutton}>
                    <Text style={{fontSize:15, fontWeight:'bold', color: '#fff'}}>
                        LOGIN
                    </Text>

                </TouchableOpacity>
            </View>

            {/* The registration link for NGO is here */}
            <View style={{ marginTop: 15 }}>
                <Text
                    onPress={handleLinkpress}
                    style={{ color: '#0645AD', fontSize: 13 }}>
                    Not Registered? Click here!
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
    height: 50,
    width: 250,
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2c3e50'

    },
    loginbutton: {
    backgroundColor: '#3498db',
    borderRadius: 30,
    width: 130,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
    },
    container: {
        justifyContent: 'center',
        marginTop: 1
    }
})