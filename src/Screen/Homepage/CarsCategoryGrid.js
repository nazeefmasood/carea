import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  DotsThreeCircle,
  DotsThreeCircleVertical,
} from "phosphor-react-native";
import { db } from "../../config/firebase_config";
import { collection, onSnapshot } from "firebase/firestore";
const screenWidth = Dimensions.get("window").width;
const CarsCategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) => {
      const categoryData = snapshot.docs.map((doc) => doc.data());
      setCategories(categoryData);
    });
  }, []);
  return (
    <View style={styles.gridContainer}>
      {categories.map((item) => {
        return (
          <View style={styles.gridItem} key={item.id}>
            <View style={styles.gridItemImage}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: item.categoryImageURL }}
                resizeMode="contain"
              />
            </View>
            <Text>{item.categoryName}</Text>
          </View>
        );
      })}

      <View style={styles.gridItem}>
        <View style={styles.gridItemImage}>
          <DotsThreeCircle size={40} />
        </View>
        <Text>More</Text>
      </View>
    </View>
  );
};

export default CarsCategoryGrid;

const styles = StyleSheet.create({
  gridContainer: {
    width: screenWidth - 20,
    minHeight: 100,
    maxHeight: 220,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    // justifyContent: 'center',
    marginTop: 20,
  },
  gridItem: {
    width: "23%",
    height: 100,
    alignItems: "center",
    gap: 5,
  },
  gridItemImage: {
    backgroundColor: "#f3f3f3",
    // flex: 0.9,
    width: 70,
    height: 70,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
