import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const ProductImagesFlatItem = ({item}) => {
  return (
    <View style={styles.imgContainer}>
     <Image style={styles.image} source={{uri: item}} resizeMode='contain'/>
    </View>
  )
}

export default ProductImagesFlatItem

const styles = StyleSheet.create({
    imgContainer:{
        width:100,
        height:100,
    },
    image:{
        width:"100%",
        height:"100%",
    }
})