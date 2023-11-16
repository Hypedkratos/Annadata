import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'



export default function Images(){
    return (
        <View>
            <Image source={require('../assets/logomain.png')}
            style={{height:110, width:110, marginTop:0}}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({})