import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Colors } from "../config/config";
import { FontAwesome } from "@expo/vector-icons";
import AppScreen from "../Components/AppScreen";
import AppButton from "../Components/AppButton";
import { useNavigation } from "@react-navigation/native";
import { AppleLogo, FacebookLogo, GoogleLogo } from "phosphor-react-native";

const OnboardingScreen = () => {
  const { navigate } = useNavigation();
  return (
  
      <AppScreen>
          <View style={styles.container}>
            <FontAwesome
              style={styles.logo}
              name="car"
              size={150}
              color="black"
            />
            <Text style={styles.logoText}>{"Let's you in"}</Text>
          </View>
          <View style={styles.btnContainer}>
            <AppButton
            logoLeft={<FacebookLogo size={24} weight="fill"/>}
              title={"Continue with Facebook"}
              onPress={() => console.log("first")}
            />
            <AppButton
            logoLeft={<GoogleLogo size={24} weight="fill"/>}
              title={"Continue with Google"}
              onPress={() => console.log("first")}
            />
            <AppButton
            logoLeft={<AppleLogo size={24} weight="fill"/>}
              title={"Continue with Apple"}
              onPress={() => console.log("first")}
            />
            <Text>or</Text>
            <AppButton
              
              title={"Sign in with password"}
              onPress={() => navigate("SignIn")}
              textColor="#fff"
              backgroundColor="#000"
              btnRadius={30}
            />
            <Pressable onPress={() => navigate("SignUp")}>
              <Text>{"Don't have an account?"} Sign up</Text>
            </Pressable>
          </View>
        
      </AppScreen>
    
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    // position: "absolute",
    // top: "30%",
    // marginTop: "10%",
  },
  logoText: {
    fontSize: 65,
    marginTop: 30,
    fontWeight: "900",
    // textTransform: "capitalize",
  },
  btnContainer: {
    backgroundColor:"#fff",
    width: "100%",
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:20,
  },
});
