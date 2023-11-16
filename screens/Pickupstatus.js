import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const Pickupstatus = () => {
  const [pickupData, setPickupData] = useState([]);
  useEffect(() => {
    {/*Idhar se data fetch krwana hai*/}
    fetchDataFromMongoDB();
  }, []);

  const fetchDataFromMongoDB = async () => {
    
  };

  return (
    <ScrollView horizontal>
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
})