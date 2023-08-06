import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { CallData } from "../../../../data/CallData";
import CallItem from "./CallItem";

const Calls = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={CallData}
        contentContainerStyle={{
          backgroundColor: "#fff",
          gap: 10,
          paddingHorizontal:20,
          marginTop: 20,
        }}
        renderItem={({ item }) => <CallItem item={item} />}
      />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({});
