import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Images from '../components/logo'
import { useNavigation } from '@react-navigation/native'
import Pickupscreen from './Pickupscreen'



const Homescreen = () => {

  {/* Navigation ka jugad is here */ }
  const navigation = useNavigation();

  const navigateToPickupscreen = () => {
    navigation.navigate('Pickupscreen');
  };
  const navigateToNgologin = () => {
    navigation.navigate('Ngologin');
  };

  return (
    <KeyboardAvoidingView style={styles.maincontainer}>
      {/*The logo of the app goes here, and taken from the assets */}
      <Images />

      {/*The Appname goes here */}
      <View style={styles.Appname}>
        <Text
          style={{
            fontWeight: 'bold', fontSize: 34, color: '#000'
          }}>
          Annadata Connect</Text>
      </View>

      {/*The description goes here */}
      <View style={styles.descriptionbox}>
        <Text style={{
          textAlign: 'center',
          marginLeft: 34,
          marginRight: 34,
          color: 'black'
        }}>
          Aisa kuch immediate to nahi soche hain ki kya likhna hai.
          Lekin dekhiye content milega to kuch na kuch to dala hi jayega,
          Ab content ya to chat GPT se niklega ya phir mere dimag se, baki koi aur option hoga to bataiyega
          zaroor. kaunki humara dimag hai bada hi kamzor aur nithalla. aur sab badhiya hai na?
          Bhai itna fursat me ho ki pura hi padh liye, man na padega bhai! Nhi waah!
          Matlab ek insaan kitna hi free fokat baith skta h, dekho besharam jaise ab bhi padhe
          ja ra hai. koisharam naam ka cheez nahi hai.
        </Text>
      </View>

      {/* Add pickup button is here */}
      <View>
        <TouchableOpacity
          onPress={navigateToPickupscreen}
          style={styles.button1}
        >
          <Text
            style={{ fontSize: 15, fontWeight: 800 }}>
            Add Pickup Address
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login as NGO button is here */}
      <View>
        <TouchableOpacity
          onPress={navigateToNgologin}
          style={styles.button2}
        >
          <Text
            style={{ fontSize: 15, fontWeight: 800 }}>
            Login as NGO
          </Text>
        </TouchableOpacity>
      </View>

      

      {/* The footer goes here */}
      <View style={styles.footer}>
        <Text
          style={{ fontSize: 11, textAlign: 'center' }}>
          An initiative towards a better society.
        </Text>
        <Text
          style={{ fontSize: 11, textAlign: 'center' }}>
          Powered by @rathin, @azal and @shashi
        </Text>
      </View>

    </KeyboardAvoidingView>

  )
}

export default Homescreen

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  Appname: {
    marginTop: 7,

  },
  descriptionbox: {
    color: 'yellow',
    alignItems: 'center',
    marginTop: 90
  },
  button1: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA3',
    padding: 6,
    width: 205,
    height: 39,
    borderRadius: 30,
    marginTop: 70
  },
  button2: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA3',
    padding: 6,
    width: 205,
    height: 39,
    borderRadius: 30,
    marginTop: 25,
  },
  footer: {
    paddingTop: 100
  }
})