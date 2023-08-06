import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;
const ChatItem = ({ item }) => {
  const { navigate } = useNavigation();
  const formattedTime = moment(item.lastMessage.timestamp).format("h:mm");
  return (
    <TouchableOpacity onPress={() => navigate("Chat", { item })}>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingVertical: 8,
          borderRadius: 50,
          paddingHorizontal: 8,
          alignContent: "space-between",
          gap: 5,
        }}
      >
        <View style={{ flex: 0.2 }}>
          <View
            style={{
              width: 65,
              padding: 8,
              height: 65,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f3f3f3",
            }}
          >
            <Image
              source={item.chatImageUrl}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
        </View>
        <View style={{ flex: 0.6, justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 20, fontWeight: "900" }}>
            {item.chatName}
          </Text>
          <Text style={{}} numberOfLines={1}>
            {item.lastMessage.content}
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          {item.lastMessage.numUnreadMessages > 0 && (
            <Text
              style={{
                width: 25,
                textAlign: "center",
                borderRadius: 25,
                height: 25,
                padding: 2,
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              {item.lastMessage.numUnreadMessages > 9
                ? "9+"
                : item.lastMessage.numUnreadMessages}
            </Text>
          )}
          <Text>{formattedTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({});
