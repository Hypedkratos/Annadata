import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Pickupscreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    {/* Handle submission logic will go here */ }
    console.log('Form submitted!');
  };


  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text
          style={{
            color: 'black', fontSize: 24, fontWeight: 'bold', textAlign: 'justify',
            marginLeft: 10, marginRight: 10
          }}
        >Please fill in the following details to confirm pickup.</Text>
      </View>

      {/* The textboxes for details are here */}
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          value={pincode}
          onChangeText={(text) => setPincode(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity: eg- Enough for twenty people"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />

      </View>

      {/* The Submit button is here */}
      <View>
        <TouchableOpacity
          style={styles.Buttoncontainer}
           >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Pickupscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15
  },
  container2: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 110
  },
  input: {
    textAlign: 'left',
    fontSize: 15
  },
  Buttoncontainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA3',
    padding: 6,
    width: 213,
    height: 39,
    borderRadius: 30,
    marginTop: 60
  }
})