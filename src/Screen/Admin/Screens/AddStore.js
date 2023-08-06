import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../../config/firebase_config";
import AppUpload from "../../../Components/AppUpload";

const AddStore = () => {
  const [image, setImage] = useState("");
  const [store, setStore] = useState({
    name: "",
    tagline: "",
  });
  const [progress, setProgress] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, "StoresImages/" + new Date().getTime());

    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed());
      },
      (error) => {
        // handle error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await saveRecord(downloadURL, new Date().toISOString());
          setImage("");
        });
      }
    );
  }

  async function saveRecord(url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "stores"), {
        storeName: store.name,
        storeTagline: store.tagline,
        storeImageURL: url,
        createdAt,
      });
      console.log("document saved correctly", docRef.id);
      setSubmitClicked(false);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async () => {
    if (image && store.name && store.tagline) {
      setSubmitClicked(true);
      await uploadImage(image, "image");
      setImage("");
      setStore({
        name: "",
        tagline: "",
      });
    } else {
      alert("Please Fill all the details");
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <TouchableOpacity style={styles.pickImageButton} onPress={pickImage}>
        <Text style={styles.pickImageButtonText}>Pick Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={"Enter Store Name"}
        value={store.name}
        onChangeText={(t) => setStore({ ...store, name: t })}
      />
      <TextInput
        style={styles.input}
        placeholder={"Enter Tagline"}
        value={store.tagline}
        onChangeText={(t) => setStore({ ...store, tagline: t })}
      />
      {submitClicked && <AppUpload image={image} progress={progress} />}
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Store</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddStore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  pickImageButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickImageButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    width: "80%",
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
