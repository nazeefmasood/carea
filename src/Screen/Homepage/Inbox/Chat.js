import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import ChatBox from "./ChatBox";
import AppInput from "../../../Components/AppInput";
import { Image, Microphone } from "phosphor-react-native";

const Chat = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: item.chatName, });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={item.messages}
        contentContainerStyle={{
          backgroundColor: "#fff",
          gap: 10,
          marginTop: 20,
        }}
        renderItem={({ item }) => <ChatBox item={item} />}
      />
      <View style={{backgroundColor: "#fff", flexDirection: "row", position: "absolute", gap: 10, bottom:0, left:0, right:0, paddingTop:10, paddingBottom:20, paddingHorizontal:25 }}>
        <AppInput
          placeholder={"Message"}

          customStyles={{backgroundColor:"#f3f3f3", borderWidth:0}}
          width={"80%"}
          iconRight={<Image size={25} weight="bold" />}
        />
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            backgroundColor: "#000",
          }}
        >
          <Microphone size={30} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
