import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { logoutUserAccount, showDB } from '../appwrite/service';
import Ngologin from './Ngologin';
import { useUser } from '../context/AuthContext';
import RequestScreen from './RequestScreen';

const Pickupstatus = () => {
  const [pickupData, setPickupData] = useState([]);
  const {setId} = useUser();

  const {setIsAuth, setUser, user}= useUser()
  const navigation=useNavigation();

  const navigateToPickupdetails = (id) =>{
    setId(id) 
    navigation.navigate(RequestScreen)
  }
  const handleLogout = async(e)=>{
    e.preventDefault();
    try {
        const res = await logoutUserAccount();
        console.log(res)
        if (res) {
            setUser({name:"", email:""})
            setIsAuth(false);
            navigation.navigate(Ngologin)
        }
    } catch (error) {
        console.log('something went wrong in login', error)
    }
}

const getData = async()=>{
  const res=await showDB()
  setPickupData(res.documents)
}

useEffect(() => {
  getData()
}, [])


  return (
    <ScrollView vertical>
      <View style={styles.maincontainer}>
        <Text
        style={{fontSize:20, color:'#3498db', fontWeight:'bold', textAlign:'left'}}
        >LIST OF AVAILABLE PICKUPS</Text>
      </View>

      <View style={styles.container}>
        {/* Table ka Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>NAME</Text>
          <Text style={styles.columnHeader}>MOBILE</Text>
          <Text style={styles.columnHeader}>ADDRESS</Text>
          <Text style={styles.columnHeader}>PINCODE</Text>
          <Text style={styles.columnHeader}>QUANTITY</Text>

        </View>

        {/* Table ka Rows */}
        {pickupData.reverse().map((item) => (
          <View  key={item.$id} style={styles.tableRow}>
            <Text onPress={()=>navigateToPickupdetails(item.$id)} style={styles.columnData}>{item.name}</Text>
            <Text style={styles.columnData}>{item.mobile}</Text>
            <Text style={styles.columnDataAddress}>{item.address}</Text>
            <Text style={styles.columnData}>{item.pin_code}</Text>
            <Text style={styles.columnData}>{item.quantity}</Text>
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity
        onPress={handleLogout}
        style={styles.Buttoncontainer}
        >
          <Text
          style={{color:'#fff', fontWeight:'bold'}}>
            LOGOUT
          </Text>
        </TouchableOpacity>
        <Text 
        style={{textAlign:'center', marginTop: 15}}>
          {user.name}
        </Text>
      </View>
      </ScrollView>
  )
}

export default Pickupstatus

const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    justifyContent:'center',
    position:'absolute',
    marginLeft: 20,
    marginRight:20,
    marginTop: 30
  },
  container: {
    flex: 1,
    padding: 20,
    marginLeft:0,
    marginTop: 40
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3498db',
    paddingVertical: 8,
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
  },
  columnData: {
    flex: 1,
    fontSize: 12,
    paddingRight: 5,
    overflow: 'hidden',
  },
  columnDataAddress:{
    overflow: 'hidden',
    width: 90,
  },
  Buttoncontainer: {
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
    shadowRadius: 2,
    marginLeft: 135
  }
})