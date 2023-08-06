import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const Card = ({ item }) => {
  const { navigate } = useNavigation()
  return (
    <Pressable style={styles.container} onPress={()=> navigate('ProductDetails', { item })}>
    
        <View style={styles.imgContainer}>
          <Image
          source={{ uri: item.productImages[1] }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.productName}</Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <FontAwesome name="star" size={20} />
            <Text>{item.rating} | </Text>
            <Text
              style={{
                backgroundColor: "#f3f3f3",
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 4,
              }}
            >
              {item.productType}
            </Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
     
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    width: "48%",
    // marginRight: 10,
    overflow: "hidden",
    minHeight: 260,
    gap: 5,
    // backgroundColor: "#000",
  },
  imgContainer: {
    backgroundColor: "#f3f3f3",
    padding: 3,
    height: 170,
    borderRadius: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 5,
    gap: 7,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
  },
  price: {
    fontSize: 18,
    fontWeight: "900",
  },
});
