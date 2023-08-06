import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { db, storage, auth } from "../../../../config/firebase_config";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import AppUpload from "../../../../Components/AppUpload";

const ProfileTab = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [dateAccountCreated, setDateAccountCreated] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);

  const getInitial = () => {
    if (user) {
      const name = user.displayName || user.email || "";
      return name.charAt(0).toUpperCase();
    }
    return "";
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || "");
        setEmail(user.email || "");
        setIsEmailVerified(user.emailVerified || false);

        // Format date account created
        const dateCreated = user.metadata.creationTime;
        setDateAccountCreated(new Date(dateCreated).toLocaleString());
      } else {
        setUser(null);
        setDisplayName("");
        setEmail("");
        setIsEmailVerified(false);
        setDateAccountCreated("");
      }
    });

    return () => unsubscribe(); // Unsubscribe when the component unmounts
  }, []);

  const pickImage = () => {};
  const uploadImage = () => {};

  return (
    <View style={styles.container}>
      

      {profilePicture ? (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      ) : (
        <View style={styles.profilePicturePlaceholder}>
          <Text style={styles.profilePictureText}>{getInitial()}</Text>
        </View>
      )}

      <Text style={styles.displayName}>{displayName}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.accountCreated}>
        Account Created: {dateAccountCreated}
      </Text>
      <Text style={styles.emailVerified}>
        Email Verified: {isEmailVerified ? "Yes" : "No"}
      </Text>

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick Profile Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => uploadImage(image, "image/jpeg")}
      >
        <Text style={styles.buttonText}>Upload Profile Picture</Text>
      </TouchableOpacity>

      {submitClicked && <AppUpload image={image} progress={progress} />}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      },
      profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
      },
      profilePicturePlaceholder: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
      },
      profilePictureText: {
        fontSize: 48,
        color: "#fff",
        fontWeight: "bold",
      },
      displayName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
      },
      email: {
        fontSize: 18,
        marginBottom: 5,
        color: "#555",
      },
      accountCreated: {
        fontSize: 16,
        marginBottom: 5,
        color: "#666",
      },
      emailVerified: {
        fontSize: 16,
        marginBottom: 20,
        color: "#666",
      },
      uploadButton: {
        backgroundColor: "#2f95dc",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
      },
    
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2f95dc",
      },
      headerBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
      },
      headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
      },
});

export default ProfileTab;
