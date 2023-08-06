import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AppUpload from "../../../Components/AppUpload";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ImageSquare } from "phosphor-react-native";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../../config/firebase_config";

const AddCategory = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
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
    const storageRef = ref(storage, "CategoryImages/" + new Date().getTime());

    const uploadTask = uploadBytesResumable(storageRef, blob);

    // listen for events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          setName("")
        });
      }
    );
  }
  async function saveRecord(url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "categories"), {
        categoryName: name,
        categoryImageURL: url,
        createdAt,
      });
      console.log("document saved correctly", docRef.id);
      setSubmitClicked(false);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async () => {
    if (image && name) {
      setSubmitClicked(true);
      await uploadImage(image, "image");
    } else {
      Alert.alert("Please Fill all the details");
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200 }}
          resizeMode="contain"
        />
      )}
      <TouchableOpacity style={styles.pickImageButton} onPress={pickImage}>
        <Text style={styles.pickImageButtonText}>Pick Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.categoryNameInput}
        placeholder={"Enter category Name"}
        value={name}
        onChangeText={(t) => setName(t)}
      />
      {submitClicked && <AppUpload image={image} progress={progress} />}
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  pickImageButton: {
    backgroundColor: "#3498db",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  pickImageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  categoryNameInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#27ae60",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddCategory;
