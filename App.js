import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import Pickupscreen from "./screens/Pickupscreen";
import Ngologin from "./screens/Ngologin";
import Pickupstatus from "./screens/Pickupstatus";
import AuthContextProvider from "./context/AuthContext";
const Stack = createNativeStackNavigator();

export default function App (){
  return(
    
      <NavigationContainer>
      <AuthContextProvider>
       <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Homescreen" component={Homescreen}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name="Pickupscreen" component={Pickupscreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name="Ngologin" component={Ngologin}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name="Pickupstatus" component={Pickupstatus}></Stack.Screen>
       </Stack.Navigator>
       </AuthContextProvider>
     </NavigationContainer>
     
     
      
    )
}

const styles = StyleSheet.create({
  
});