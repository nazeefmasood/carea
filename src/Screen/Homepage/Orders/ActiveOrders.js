import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const ActiveOrders = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../../assets/nooorder.png')} resizeMode='contain'/>
      <Text style={styles.title}>{"You don't have an order yet"}</Text>
      <Text style={styles.subTitle}>{"You don't have an on going order at this time"}</Text>
    </View>
  )
}

export default ActiveOrders

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width:300,
        height:300,
    },
    title:{
        fontSize: 20,
        fontWeight:"bold",
    },
    subTitle:{
        fontSize: 16,
        color: "#b2b2b2"
    }
})