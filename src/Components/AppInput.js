import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../config/config";
const AppInput = ({
  iconRight,
  iconLeft,
  width,
  placeholder,
  type,
  value,
  onChangeText,
  customStyles,
  secureEntry = false,
}) => {
  return (
    <View style={[styles.inputContainer,{width: width} , {...customStyles}]}>
      {iconLeft }
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        inputMode={type}
        secureTextEntry={secureEntry}
        onChangeText={onChangeText}
      />
      {iconRight}
    </View>
  );
};

export default AppInput;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    alignItems: "center",
    padding: 14,
    borderColor: Colors.btnBorder,
    borderRadius: 10,
    borderWidth: 1,
  },

  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
  },
});
