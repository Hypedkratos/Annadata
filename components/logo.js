import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'



export default function Images(){
    return (
        <View>
            <Image source={require('../assets/logo.png')}
            style={{height: 150, width:150,marginTop:0}}>
            </Image>
        </View>
    )
}

const styles = StyleSheet.create({})