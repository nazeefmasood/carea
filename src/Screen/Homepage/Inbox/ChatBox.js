import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

const ChatBox = ({ item }) => {
  const formattedTime = moment(item.timestamp).format("h:mm");
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical:10,
        flexDirection: "row",
        gap:10,
        width: "80%",
        alignSelf: item.sender === "Nazeef" ? "flex-end" : "flex-start",
        marginLeft: item.sender === "Nazeef" ? 0 : 10,
        marginRight: item.sender === "Nazeef" ? 10 : 0,
        borderTopLeftRadius: item.sender === "Nazeef" ? 14 : 0,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        borderTopRightRadius: item.sender === "Nazeef" ? 0 : 14,
        backgroundColor: item.sender === "Nazeef" ? "#1a1a1a" : "#f0f0f0",
      }}
    >
      <Text style={{ width: "90%", fontSize:17, color: item.sender === "Nazeef" ? "#fff" : "#000" }}>
        {item.content}
      </Text>
      <Text style={{ fontSize:14, fontWeight:"900", color: item.sender === "Nazeef" ? "#fff" : "#000", alignSelf:"flex-end",}}>{formattedTime}</Text>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({});
