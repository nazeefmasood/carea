import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const AdminCard = ({ item }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 400,
        backgroundColor: "#f3f3f3",
        borderRadius: 12,
        justifyContent:"space-between"
      }}
    >
      <Image
        source={{ uri: item.categoryImageURL }}
        style={{ width: 400, height: 300 }}
        resizeMode="stretch"
      />


      <Text style={{ color: "black", fontSize:30, marginTop: 10,marginBottom:20, fontWeight:"700" }}>{item.categoryName}</Text>
    </View>
  );
};

export default AdminCard;

const styles = StyleSheet.create({});
