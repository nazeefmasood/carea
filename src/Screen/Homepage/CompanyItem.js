import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CompanyItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"700", fontSize:18,}}>{item.categoryName}</Text>
    </View>
  )
}

export default CompanyItem

const styles = StyleSheet.create({
    container:{
        // marginTop:10,
        // marginRight:10,
        gap:20,
        height:35,
        alignItems: 'center',
        justifyContent:"center",
        borderRadius:20,
        paddingHorizontal:15,
        borderColor: '#000',
        borderWidth:1,
    }
})