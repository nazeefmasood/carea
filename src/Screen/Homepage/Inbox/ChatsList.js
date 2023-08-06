import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChatsData } from "../../../../data/ChatsData";
import ChatItem from "./ChatItem";

const ChatsList = () => {
  return (
    <View>
      <FlatList
        data={ChatsData}
        contentContainerStyle={
            {
                backgroundColor:"#fff",
                gap:10,
                padding:10,
            }
        }
        renderItem={({ item }) => <ChatItem item={item} />}
      />
    </View>
  );
};

export default ChatsList;

const styles = StyleSheet.create({});
