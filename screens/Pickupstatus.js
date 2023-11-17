import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { logoutUserAccount } from '../appwrite/service';
import Ngologin from './Ngologin';
import { useUser } from '../context/AuthContext';

const Pickupstatus = () => {
  const [pickupData, setPickupData] = useState([]);

  const {setIsAuth, setUser, user}= useUser()
  const navigation=useNavigation();
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
        console.log('somethign went wrong in login', error)
    }
}

  return (
    <ScrollView vertical>
      <View style={styles.maincontainer}>
        <Text
        style={{fontSize:20, color:'#000', fontWeight:'bold', textAlign:'left'}}
        >LIST OF AVAILABLE PICKUPS</Text>
      </View>

      <View style={styles.container}>
        {/* Table ka Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>DATE/TIME</Text>
          <Text style={styles.columnHeader}>STATUS</Text>
          <Text style={styles.columnHeader}>PERSON(WITH EMAIL)</Text>
          <Text style={styles.columnHeader}>AREA</Text>
        </View>

        {/* Table ka Rows */}
        {pickupData.map((item) => (
          <View key={item._id} style={styles.tableRow}>
            <Text style={styles.columnData}>{item.dateTime}</Text>
            <Text style={styles.columnData}>{item.status}</Text>
            <Text style={styles.columnData}>{item.personWithEmail}</Text>
            <Text style={styles.columnData}>{item.area}</Text>
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity
        onPress={handleLogout}
        style={styles.Buttoncontainer}
        >
          <Text>
            LOGOUT
          </Text>
        </TouchableOpacity>
        <Text>
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
    padding: 30,
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
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
  },
  columnData: {
    flex: 1,
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