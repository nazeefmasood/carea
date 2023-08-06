import React from "react";
import AppScreen from "../Components/AppScreen";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import AppInput from "../Components/AppInput";
import AppCheckBox from "../Components/AppCheckBox";
import AppButton from "../Components/AppButton";
import AppHorizontalTextLine from "../Components/AppHorizontalTextLine";
import { FontAwesome } from "@expo/vector-icons";
import { AppleLogo, At, FacebookLogo, GoogleLogo, Password } from "phosphor-react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase_config";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const { navigate } = useNavigation();
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = ()=>{
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("🚀 ~ file: SignupScreen.js:24 ~ handleSubmit ~ user:", user)
      navigate("ProfileScreen");
    })
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <AppScreen customStyles={{ backgroundColor: "#fff" }}>
        <FontAwesome style={styles.logo} name="car" size={150} color="black" />
        <View style={styles.container}>
          <Text style={styles.title}>Create your account</Text>
          <View style={styles.inputContainer}>
            <AppInput
              iconLeft={<At size={24} />}
              type={"email"}
              value={loginData.email}
              placeholder={"Email"}
              onChangeText={(text) =>
                setLoginData({ ...loginData, email: text })
              }
            />
            <AppInput
              iconLeft={<Password size={24} />}
              secureEntry={true}
              type={"text"}
              value={loginData.password}
              placeholder={"Password"}
              onChangeText={(text) =>
                setLoginData({ ...loginData, password: text })
              }
            />
            <AppCheckBox
              isChecked={checkboxState}
              checkBoxSize={20}
              checkBoxText={"Remember me"}
              borderRadius={5}
              borderWidth={1}
              onPress={() => setCheckboxState(!checkboxState)}
            />
            <AppButton
              title={"Sign up"}
              backgroundColor="#000"
              textColor="#fff"
              btnRadius={50}
              onPress={handleSubmit}
            />
          </View>
          <AppHorizontalTextLine
            text={"or continue with"}
            marginVertical={10}
          />
          <View style={styles.socialInputContainer}>
            <AppButton
              logoLeft={<FacebookLogo size={24} weight="fill" />}
              width={70}
              height={50}
              btnRadius={10}
            />
            <AppButton
              logoLeft={<GoogleLogo size={24} weight="fill" />}
              width={70}
              height={50}
              btnRadius={10}
            />
            <AppButton
              logoLeft={<AppleLogo size={24} weight="fill" />}
              width={70}
              height={50}
              btnRadius={10}
            />
          </View>
          <Text style={styles.signUpText}>
            Already have an Account?
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              Sign in
            </Text>{" "}
          </Text>
        </View>
      </AppScreen>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  logo: {
    // position: "absolute",
    // top: "30%",
    marginTop: "30%",
    alignSelf: "center",
  },
  container: {
    width: "100%",
    padding: 10,
    // backgroundColor:"#000",

    gap: 20,
  },
  inputContainer: {
    marginTop: 10,
    padding: 10,
    gap: 12,
  },
  socialInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  signUpText: {
    textAlign: "center",
    fontWeight: "400",
    color: "#cecece",
    marginTop: 20,
  },
});
