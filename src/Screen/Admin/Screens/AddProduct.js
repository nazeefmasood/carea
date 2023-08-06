import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import AppUpload from "../../../Components/AppUpload";
import * as ImagePicker from "expo-image-picker";
import { db, storage } from "../../../config/firebase_config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  doc,
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null); // Initialize editedProduct with null

  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    type: "",
    price: 0,
    rating: 0,
    description: "",
  });
  const [progress, setProgress] = useState(0);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);

  const fetchProducts = async () => {
    try {
      const productsRef = collection(db, "products");
      const productsSnapshot = await getDocs(productsRef);
      const productsData = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const storesRef = collection(db, "stores");
      const storesSnapshot = await getDocs(storesRef);
      const storesData = storesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStores(storesData);
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };
  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Enable multiple selection
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets.map((asset) => asset.uri));
    }
  }


  async function uploadImages(images) {
    const imageUrls = [];

    for (const uri of images) {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, "ProductImages/" + new Date().getTime());

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
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            imageUrls.push(downloadURL);

            // Check if all images are uploaded, then save the product with image URLs
            if (imageUrls.length === images.length) {
              saveRecord(imageUrls, new Date().toISOString());

              setImages([]);
              fetchProducts()
              setProduct({
                name: "",
                type: "",
                price: 0,
                rating: 0,
                description: "",
              })
            }
          });
        }
      );
    }
  }


  async function saveRecord(urls, createdAt) {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        productName: product.name,
        productType: product.type,
        productImages: urls, // Save multiple image URLs
        price: product.price,
        rating: product.rating,
        description: product.description,
        createdAt,
        store: selectedStore
          ? stores.find((store) => store.id === selectedStore)
          : null,
      });
      console.log("document saved correctly", docRef.id);
      setSubmitClicked(false);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = async () => {
    if (images.length > 0 && product.name && product.type && selectedStore) {
      setSubmitClicked(true);
      await uploadImages(images);
    } else {
      alert("Please Fill all the details");
    }
  };

  const handleEdit = (productId) => {
    const eProduct = products.find((product) => product.id === productId);
    if (eProduct) {
      setEditedProduct(eProduct);
      setEditModalVisible(!editModalVisible);
    }
  };

  const handleStoreSelect = (storeId) => {
    const store = stores.find((s) => s.id === storeId);
    setSelectedStore(store);
  };
  const handleSave = async () => {
    try {
      const productToUpdate = editedProduct || {};
      const productRef = doc(db, "products", productToUpdate.id);
      await updateDoc(productRef, productToUpdate);
      setEditModalVisible(false);
      fetchProducts();
      setEditedProduct("");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  const handleDelete = (deletedProduct) => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "products", deletedProduct.id));
              // Update the products state after successful deletion
              setProducts((prevProducts) =>
                prevProducts.filter((item) => item.id !== deletedProduct.id)
              );
            } catch (error) {
              console.error("Error deleting product:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={"Enter Name"}
          value={product.name}
          onChangeText={(t) => setProduct({ ...product, name: t })}
        />
        <TextInput
          style={styles.input}
          placeholder={"Enter Type"}
          value={product.type}
          onChangeText={(t) => setProduct({ ...product, type: t })}
        />
        <TextInput
          style={styles.input}
          placeholder={"Enter Price"}
          value={product.price}
          onChangeText={(t) => setProduct({ ...product, price: t })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder={"Enter Rating"}
          value={product.rating}
          onChangeText={(t) => setProduct({ ...product, rating: t })}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder={"Enter Description"}
          value={product.description}
          onChangeText={(t) => setProduct({ ...product, description: t })}
          multiline
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedStore}
            onValueChange={(itemValue, itemIndex) => setSelectedStore(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select a Store" value="" />
            {stores.map((store) => (
              <Picker.Item key={store.id} label={store.storeName} value={store.id} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick Images</Text>
        </TouchableOpacity>
        {submitClicked && <AppUpload image={images[0]} progress={progress} />}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Data</Text>
        </TouchableOpacity>

        <View style={styles.selectedImagesContainer}>
          {images.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.selectedImage} />
          ))}
        </View>

        {editModalVisible && (
          <View style={styles.editModal}>
            <Text>Edit Product</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={editedProduct.productName}
              onChangeText={(text) =>
                setEditedProduct({ ...editedProduct, productName: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Type"
              value={editedProduct.productType}
              onChangeText={(text) =>
                setEditedProduct({ ...editedProduct, productType: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Price"
              value={editedProduct.price}
              onChangeText={(text) =>
                setEditedProduct({ ...editedProduct, price: text })
              }
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Rating"
              value={editedProduct.rating}
              onChangeText={(text) =>
                setEditedProduct({ ...editedProduct, rating: text })
              }
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}

        {products && products.map((product) => (
          <View key={product.id} style={styles.tableRow}>
            <Text style={styles.columnText}>{product.productName}</Text>
            <Text style={styles.columnText}>{product.productType}</Text>
            <Text style={styles.columnText}>{product.price}</Text>
            <Text style={styles.columnText}>{product.rating}</Text>
            <Text style={styles.columnText}>{product.store?.storeName}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEdit(product.id)}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(product)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  columnText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  heading: {
    fontWeight: "bold",
  },
  thumbnailImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: "cover",
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  picker: {
    
    width: "100%",
    paddingHorizontal: 12,
  },
  selectedImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 16,
  },
  selectedImage: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 8,
  },
});
