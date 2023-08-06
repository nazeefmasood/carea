import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";

const AppScreen = ({ children, customStyles }) => {
  return (
    <SafeAreaView style={[styles.app, {...customStyles}]}>
      <View style={styles.screen}>{children}</View>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  app: {
    paddingTop: Platform.OS == "android" ? 25 : 0,
    // paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    flex:1,
    
  },
  screen: {
    flex: 1,
    flexDirection: "column",
  },
});
