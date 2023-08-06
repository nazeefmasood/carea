import React from "react";
import {
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../config/config";
import { FontAwesome } from "@expo/vector-icons";
import * as Icon from "phosphor-react-native";
const AppButton = ({
  title,
  width = "100%",
  height,
  onPress,
  logoLeft,
  logoRight,
 
  backgroundColor = "#fff",
  textColor = "#000",
  btnRadius = 15,
  justifyContent = "center",
  alignItems="center",
  textAlign ="center",
  customStyles
}) => {
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor, borderRadius: btnRadius, width: width, height: height, justifyContent:justifyContent, alignItems:alignItems},
        {...customStyles,}
      ]}
      onPress={onPress}
    >
    <View style={{flexDirection: "row", alignItems:"center", gap:10,}}>
      {logoLeft}
      {title && <Text style={{ color: textColor, textAlign:"right" }}>{title}</Text>}</View>
      {logoRight}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    textAlign: "center",
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.btnBorder,
  },
  logo: {},
});
