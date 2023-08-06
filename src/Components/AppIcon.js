import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const AppIcon = ({
  background = "",
  width,
  height,
  marginBottom = 0,
  marginTop = 0,
}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: background,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      <ImageBackground
        resizeMode="contain"
        style={styles.logo}
        source={require("../assets/cars.png")}
      />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
  },
});
