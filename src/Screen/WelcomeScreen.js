import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import AppScreen from "../Components/AppScreen";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="contain"
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to 👋</Text>
        <Text style={styles.name}>CAREA</Text>
        <Text style={styles.desc}>The best car marketplace app of</Text>
        <Text style={styles.desc}>
          the century for your transportation needs
        </Text>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  container: {
    padding: 20,
    paddingBottom: 50,
    gap: 0,
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  name: {
    fontSize: 100,
    fontWeight: "900",
    color: "white",
  },
  desc: {
    fontSize: 15,
    color: "white",
  },
});
