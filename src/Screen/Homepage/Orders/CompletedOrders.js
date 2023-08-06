import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../../Components/AppScreen";
import { FlatList } from "react-native-gesture-handler";
import CarProductData from "../CarProductData";
import OrderItem from "./OrderItem";

const CompletedOrders = () => {
  return (
    <AppScreen customStyles={{ backgroundColor: "#fff" }}>
      <FlatList
      contentContainerStyle={
        {
            gap:20,
            padding:10,
        }
      }
        data={CarProductData}
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </AppScreen>
  );
};

export default CompletedOrders;

const styles = StyleSheet.create({});
