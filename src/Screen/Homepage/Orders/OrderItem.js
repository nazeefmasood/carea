import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppButton from "../../../Components/AppButton";
import { Button } from "react-native";

const OrderItem = ({ item }) => {
  return (
    <View
      style={[
        styles.orderItemContainer,
        {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 1,

          elevation: 3,
        },
      ]}
    >
      <View style={styles.imgContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.subDetails}>
          <View
            style={{
              backgroundColor: item.order.orderColor,
              width: 20,
              height: 20,
              borderRadius: 100,
            }}
          />
          <Text style={styles.color}>{item.order.orderColorName}</Text>
          <Text style={styles.status}>{item.order.orderStatus}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:10,
          }}
        >
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.btn} >Leave Review</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    gap: 20,
  },
  imgContainer: {
    flex: 0.3,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#f3f3f3",
    padding:2,
    borderRadius: 20,
  },
  contentContainer: {
    flex: 0.7,
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  subDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btn:{
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal:20,
    paddingVertical: 10,
    borderRadius:100,
  },
  color:{
    fontSize:14,
  }
});
