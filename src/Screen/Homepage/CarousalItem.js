import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
const screenWidth = Dimensions.get("window").width;
const CarousalItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <Text style={styles.percentOffText}>{item.percentOff}%</Text>
          <Text style={styles.weeksText}>Week Deals!</Text>
          <Text numberOfLines={2} style={styles.tagLine} >{item.tagLine}</Text>
        </View>
        <View style={styles.imgContainer}>
        <Image style={styles.img} source={item.carImg} resizeMode="contain"/>
        </View>
      </View>
    </View>
  );
};

export default CarousalItem;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    paddingHorizontal:25,
    height: "100%",
  },
  innerContainer:{
    width:"100%",
    flexDirection:"row",
    height:"100%",
  },
  content:{
    flex:0.4,
    justifyContent:"center",
    gap:5,
  },
  imgContainer:{
    flex:0.6,
    // backgroundColor: "#000"
  },
  img:{
    width:"100%",
    height:"100%",
  },
  percentOffText:{
    fontSize:40,
    fontWeight:"900"
  },
  weeksText:{
    fontSize:18,
    fontWeight:"900"
  },
  tagLine:{
    fontSize:14,
  }

});
