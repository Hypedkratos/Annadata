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
            fontWeight: 'bold', fontSize: 34, color: '#3498db'
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
          Annadata, which means "Provider of Food" in Sanskrit, embodies our commitment to 
          ensuring that no one goes to bed hungry. Our journey began with a simple yet powerful 
          idea - to bridge the gap between the excess food from events and the pressing needs of those who lack a meal.
          At Annadata, our mission is to collect surplus food from weddings, parties, and gatherings, and transform it into a 
          source of hope and nourishment for the less fortunate. We believe in the transformative power of food, 
          not only as sustenance but also as a symbol of care, love, and shared humanity.
        </Text>
      </View>

      {/* Add pickup button is here */}
      <View>
        <TouchableOpacity
          onPress={navigateToPickupscreen}
          style={styles.button1}
        >
          <Text
            style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>
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
            style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>
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
    marginTop: 40,
    color: '#fff'
  },
  Appname: {
    marginTop: 7,

  },
  descriptionbox: {
    color: 'yellow',
    alignItems: 'center',
    marginTop: 60
  },
  button1: {
    backgroundColor: '#3498db',
    borderRadius: 30,
    width: 200,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  button2: {
    backgroundColor: '#3498db',
    borderRadius: 30,
    width: 150,
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
  footer: {
    marginTop: 90
  }
})