import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase_config";
import AppScreen from "../../Components/AppScreen";
import AdminCard from "./Screens/AdminCard";
import * as SQLite from "expo-sqlite";
import { ScrollView } from "react-native";
import AppButton from "../../Components/AppButton";
import { useNavigation } from "@react-navigation/native";

const dbSQLite = SQLite.openDatabase("colors.db");

const ShowCategory = ({ item }) => {
  return (
    <View style={styles.tableRow2}>
      <Image source={{ uri: item.categoryImageURL }} style={styles.avatar} />
      <Text style={styles.columnText}>{item.categoryName}</Text>
    </View>
  );
};
const renderItem = ({ item }) => (
  <View style={styles.tableRow2}>
    <View
      style={{
        backgroundColor: item.colorHexCode,
        width: 20,
        height: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
    />

    <Text style={styles.columnText}>{item.carModel}</Text>
  </View>
);
const ShowProduct = ({ item }) => {
  return (
    <View key={item.id} style={styles.tableRow2}>
      <Text style={styles.columnText}>{item.productName}</Text>
      <Text style={styles.columnText}>{item.productType}</Text>
      <Text style={styles.columnText}>{item.price}</Text>
      <Text style={styles.columnText}>{item.rating}</Text>
      <Image
        source={{ uri: item.productImages[0] }}
        style={styles.thumbnailImage}
      />
    </View>
  );
};

const Admin = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [colors, setColors] = useState([]);
  const { navigate } = useNavigation();
  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) => {
      const categoryData = snapshot.docs.map((doc) => doc.data());
      setCategories(categoryData);
    });

    onSnapshot(collection(db, "products"), (snapshot) => {
      const productData = snapshot.docs.map((doc) => doc.data());
      setProducts(productData);
    });

    onSnapshot(collection(db, "stores"), (snapshot) => {
      const storeData = snapshot.docs.map((doc) => doc.data());
      setStores(storeData);
    });

    dbSQLite.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM colors",
        [],
        (_, { rows }) => {
          const colorsData = rows._array;
          setColors(colorsData);
        },
        (_, error) => {
          console.log("Error fetching colors from SQLite:", error);
        }
      );
    });
  }, []);

  const ShowStore = ({ item }) => {
    return (
      <View style={styles.tableRow2}>
        <Image source={{ uri: item.storeImageURL }} style={styles.avatar} />
        <Text style={styles.columnText}>{item.storeName}</Text>
        <Text style={styles.columnText}>{item.storeTagline}</Text>
      </View>
    );
  };
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
  return (
    <ScrollView>
      <AppScreen customStyles={{ backgroundColor: "#fff" }}>
      <AppButton title={"Logout"}onPress={handleLogOut}/>
        <View style={styles.container}>
          <View style={styles.tableContainer}>
            <Text style={styles.largeHeading}>Categories</Text>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Name
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Image
              </Text>
            </View>
            <FlatList
              data={categories}
              renderItem={({ item }) => <ShowCategory item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.largeHeading}>Products</Text>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Name
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Type
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Price
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Rating
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Image
              </Text>
            </View>

            <FlatList
              data={products}
              renderItem={({ item }) => <ShowProduct item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.largeHeading}>Stores</Text>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Image
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Name
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                tagline
              </Text>
            </View>
            <FlatList
              data={stores}
              renderItem={({ item }) => <ShowStore item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.tableContainer}>
            <Text style={styles.largeHeading}>Colors</Text>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Color Hex Code
              </Text>
              <Text style={[styles.headerText, styles.tableHeaderText]}>
                Car Model
              </Text>
            </View>
            <FlatList
              data={colors}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              style={styles.list}
            />
          </View>
        </View>
      </AppScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  largeHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  textContainer: {
    flex: 1,
  },
  tableContainer2: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  tableRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  columnText: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },

  thumbnailImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: "cover",
    marginRight: 8,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  tableHeaderText: {
    flex: 1,
  },
});

export default Admin;
