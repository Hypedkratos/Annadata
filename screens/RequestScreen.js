import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { showRequest } from '../appwrite/service';
import { useUser } from '../context/AuthContext';


const RequestScreen = () => {
const {id} = useUser()
const [data, setData] = useState([])
const getData = async()=>{
  const res= await showRequest(id)
  setData(res)
}
useEffect(() => {
  getData()
}, [])

  return (
    <View style={styles.container}>
      <Text style={{color: '#3498db', fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop:-150}}>
      Pickup Request</Text>
      
        <View style={styles.information}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>{data?.name}</Text>

          <Text style={styles.label}>Address:</Text>
          <Text style={styles.data}>{data?.address}</Text>

          <Text style={styles.label}>Pincode</Text>
          <Text style={styles.data}>{data?.pin_code}</Text>

          <Text style={styles.label}>Mobile</Text>
          <Text style={styles.data}>{data?.mobile}</Text>

          <Text style={styles.label}>Quantity</Text>
          <Text style={styles.data}>{data?.quantity}</Text>
        </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 10,
    color: '#000',
  },
  data: {
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 10,
    
  },
  information:{
    marginTop: 100
  }
});

export default RequestScreen;