import React from "react";
import { View, Text } from "react-native";

const AppHorizontalTextLine = ({ text, color = "#000", marginVertical = 5,}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" , marginVertical: marginVertical}}>
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
      
        <Text style={{ flex: 1, textAlign: "center" }}>{text}</Text>
      
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
    </View>
  );
};

export default AppHorizontalTextLine;
