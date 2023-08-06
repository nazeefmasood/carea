import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainRoute from "./src/Routes/MainRoute";
import Context from "./src/config/Context";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Context>
        <MainRoute />
      </Context>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
