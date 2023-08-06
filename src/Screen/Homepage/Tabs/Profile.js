import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AppScreen from "../../../Components/AppScreen";
import AppButton from "../../../Components/AppButton";
import {
  Bell,
  CaretRight,
  IconContext,
  Info,
  Lock,
  MapPin,
  Moon,
  PencilSimple,
  ShieldCheck,
  SignOut,
  Translate,
  UsersThree,
  Wallet,
} from "phosphor-react-native";
import { auth } from "../../../config/firebase_config";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { navigate } = useNavigation();
  const [profilePicture, setProfilePicture] = useState("");
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || "");
        setEmail(user.email || "");
        setProfilePicture(user.photoURL || "");
      } else {
        setUser(null);
        setDisplayName("");
        setEmail("");
        setProfilePicture("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("SignIn");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getInitials = () => {
    if (displayName) {
      const names = displayName.split(" ");
      let initials = names[0].charAt(0).toUpperCase();
      if (names.length > 1) {
        initials += names[names.length - 1].charAt(0).toUpperCase();
      }
      return initials;
    } else {
      return email.charAt(0).toUpperCase();
    }
  };
  const pickImage = async () => {
    // ImagePicker logic here...
  };
  return (
    <IconContext.Provider
      value={{
        size: 24,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppScreen customStyles={{ backgroundColor: "#fff" }}>
          <View style={styles.profileImageContainer}>
            {profilePicture ? (
              <Image
                source={{ uri: profilePicture }}
                style={styles.profileImage}
              />
            ) : (
              <View style={styles.profileImagePlaceholder}>
                <Text style={styles.profileImageText}>{getInitials()}</Text>
              </View>
            )}
      
          </View>

          <View style={styles.profileSettingsButtonsContainer}>
            <AppButton
              customStyles={{ borderWidth: 0.5, borderRadius: 2 }}
              logoLeft={<PencilSimple />}
              title={"Edit Profile"}
              logoRight={<CaretRight />}
              justifyContent="space-between"
              onPress={() => navigate("ProfileTab")}
            />
            

            <AppButton
              title={"Security"}
              logoLeft={<ShieldCheck />}
              customStyles={{ borderWidth: 0.5, borderRadius: 2 }}
              logoRight={<CaretRight />}
              justifyContent="space-between"
              onPress={() => navigate("Security")}

            />
            <AppButton
              logoLeft={<Lock />}
              customStyles={{ borderWidth: 0.5, borderRadius: 2 }}
              title={"Privacy Policy"}
              logoRight={<CaretRight />}
              justifyContent="space-between"
              onPress={() => navigate("PrivacyPolicy")}
            />
            <AppButton
              logoLeft={<Info />}
              customStyles={{ borderWidth: 0.5, borderRadius: 2 }}
              title={"Help Center"}
              logoRight={<CaretRight />}
              justifyContent="space-between"
              onPress={() => navigate("HelpCenter")}
            />
            <AppButton
              logoLeft={<UsersThree />}
              customStyles={{ borderWidth: 0.5, borderRadius: 2 }}
              title={"Invite Friends"}
              logoRight={<CaretRight />}
              justifyContent="space-between"
              onPress={() => navigate("InviteFriends")}

            />
            <AppButton
              title={"Logout"}
              textColor="red"
              customStyles={{ borderWidth: 0.5, borderRadius: 2 }}
              logoLeft={<SignOut color="red" />}
              logoRight={<CaretRight color="red" />}
              justifyContent="space-between"
              onPress={handleLogOut}
            />
          </View>
        </AppScreen>
      </ScrollView>
    </IconContext.Provider>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
  profileSettingsButtonsContainer: {
    borderTopWidth: 1,
    borderColor: "#d3d3d3",

    gap: 5,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
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
  profileImageContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderRadius: 100,
  },
  profileImagePlaceholder: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
  },
  profileImageText: {
    fontSize: 60,
    fontWeight: "bold",
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
  profileSettingsButtonsContainer: {
    borderTopWidth: 1,
    borderColor: "#d3d3d3",
    gap: 5,
    padding: 10,
  },
});
