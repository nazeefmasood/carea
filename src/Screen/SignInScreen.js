import React from "react";

import AppScreen from "../Components/AppScreen";
import { StyleSheet, View, Text, Pressable } from "react-native";
import AppInput from "../Components/AppInput";
import AppCheckBox from "../Components/AppCheckBox";
import AppButton from "../Components/AppButton";
import AppHorizontalTextLine from "../Components/AppHorizontalTextLine";
import { FontAwesome } from "@expo/vector-icons";
import {
  AppleLogo,
  At,
  Exam,
  FacebookLogo,
  GoogleLogo,
  Password,
} from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../config/firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useMyContext } from "../config/Context";

const SignInScreen = ({ navigation }) => {
  const { state, dispatch } = useMyContext();
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const { navigate } = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredentials) => {
        const { uid, email, displayName } = userCredentials.user;
        if (uid == "Ew1hfywidRc6OAV7UOHDDtXo6FU2") {
          console.log("🚀 ~ file: SignInScreen.js:37 ~ .then ~ uid:", uid)
          const userData = { uid, email, displayName };
          dispatch({ type: "ADD_DATA_TO_USER", payload: userData });
          return navigate("MyDrawer");
        } else {
          const userData = { uid, email, displayName };
          dispatch({ type: "ADD_DATA_TO_USER", payload: userData });
          navigate("HomePageBottomNav");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <AppScreen customStyles={{ backgroundColor: "#fff" }}>
        <FontAwesome style={styles.logo} name="car" size={150} color="black" />
        <View style={styles.container}>
          <Text style={styles.title}>Login to Your account</Text>

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
              checkBoxText={"Keep me signed in"}
              borderRadius={5}
              borderWidth={1}
              onPress={() => setCheckboxState(!checkboxState)}
            />
            <AppButton
              title={"Sign in"}
              backgroundColor="#000"
              textColor="#fff"
              btnRadius={50}
              onPress={handleLogin}
            />
            <Pressable onPress={() => navigate("ForgetPage")}>
              <Text style={styles.forgetTitle}>forget password?</Text>
            </Pressable>
          </View>
          <AppHorizontalTextLine
            text={"or continue with"}
            marginVertical={10}
          />
          <View style={styles.socialInputContainer}>
            <AppButton
              logoLeft={<FacebookLogo size={32} weight="fill" />}
              width={70}
              height={50}
              btnRadius={10}
              logoSize={20}
            />
            <AppButton
              logoLeft={<GoogleLogo size={32} weight="fill" />}
              width={70}
              height={50}
              btnRadius={10}
              logoSize={20}
            />
            <AppButton
              logoLeft={<AppleLogo size={32} weight="fill" />}
              width={70}
              height={50}
              btnRadius={10}
              logoSize={20}
            />
          </View>
          <Pressable onPress={() => navigate("SignUp")}>
            <Text style={styles.signUpText}>
              {"Don't have an Account?"}
              <Text style={{ fontWeight: "bold", color: "#000" }}>
                Sign up
              </Text>{" "}
            </Text>
          </Pressable>
        </View>
      </AppScreen>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

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
    marginTop: 200,
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
  forgetTitle: {
    textAlign: "center",
  },
});
