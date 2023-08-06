import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../Components/AppScreen";
import { FlatList } from "react-native";
import { NotificationData } from "../../../data/NotifiicationData";
import NotificationItem from "./NotificationItem";

const NotificationPage = () => {
  return (
    
      <FlatList
        data={NotificationData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          {
            gap:10,
            padding:20,
            
            backgroundColor: "#fdfdfd",
            overflow: "hidden",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
  
  );
};

export default NotificationPage;

const styles = StyleSheet.create({});
