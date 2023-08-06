import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CarProductData from '../Homepage/CarProductData'
import Card from '../Homepage/Card'

const WishListPage = () => {
  return (
    <FlatList
    data={CarProductData}
    numColumns={2}
    columnWrapperStyle={{ justifyContent: "space-between" }}
    contentContainerStyle={{
      backgroundColor:"#fff",
      gap: 15,
    }}
    keyExtractor={(t) => t.id.toString()}
    renderItem={({ item }) => <Card item={item} />}
  />
  )
}

export default WishListPage

const styles = StyleSheet.create({})