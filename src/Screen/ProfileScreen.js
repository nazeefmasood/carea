import React from "react";
import AppScreen from "../Components/AppScreen";
import { View } from "react-native";
import AppInput from "../Components/AppInput";
import AppButton from "../Components/AppButton";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PencilSimple } from "phosphor-react-native";
import { Image } from "react-native";
const ProfileScreen = () => {
  const imageUrl =
    "https://www.magpakistan.com/wp-content/uploads/2023/03/chahat-fateh-ali-khan-biography.webp";
  const { navigate } = useNavigation();
  return (
    <AppScreen customStyles={{backgroundColor:"#fff"}}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />
            <View style={styles.iconEditImage}>
              <PencilSimple size={32} color="#fff" />
            </View>
          </View>
        </View>
        <AppInput placeholder={"Full Name"} type={"text"} />
        <AppInput placeholder={"Nick Name"} type={"text"} />
        <AppInput placeholder={"Date of birth"} type={"text"} />
        <AppInput placeholder={"Email"} type={"text"} />
        <AppButton
          title={"Continue"}
          backgroundColor="#000"
          textColor="#fff"
          onPress={() => navigate("HomePageBottomNav")}
        />
      </View>
    </AppScreen>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  profileImageContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    // backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 100,
  },
  image: {
    width:"100%",
    height:"100%",
    borderRadius: 100,
  },
  iconEditImage: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    paddingHorizontal: 8,
    right: 40,
    bottom: -5,
    backgroundColor: "#000",
    borderRadius: 10,
  },
});
