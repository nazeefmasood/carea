import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../../Components/AppScreen";
import { useRoute } from "@react-navigation/native";
import { ChatTeardropDots, Phone, StarHalf } from "phosphor-react-native";
import { FlatList } from "react-native-gesture-handler";
import CarImagesArray from "../../../data/CarImagesArray";
import ProductImagesFlatItem from "./ProductImagesFlatItem";
import AppButton from "../../Components/AppButton";

const ProductDetails = () => {
  const route = useRoute();
  const { item } = route.params;
  console.log("🚀 ~ file: ProductDetails.js:9 ~ ProductDetails ~ item:", item);
  return (
    <AppScreen
      customStyles={{ backgroundColor: "#fff", paddingHorizontal: 10 }}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.productImage}
          source={{uri:item.productImages[0]}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productDetails}>
          <Text style={styles.productType}>{item.productType}</Text>
          <View style={styles.productIcons}>
            <StarHalf size={18} weight="fill" />
            <Text style={styles.rating}>{item.rating} (48) reviews</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.description}>Gallery Photos</Text>

      <FlatList
        data={item.productImages}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        renderItem={({ item }) => <ProductImagesFlatItem item={item} />}
        horizontal
      />
      <View style={styles.productThirdSection}>
        <View style={styles.storeDetailsContainer}>
          <View style={styles.storeImageContainer}>
            <Image
              style={styles.storeLogo}
              source={{uri: item.store.storeImageURL}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.storeDetails}>
            <Text style={styles.storeName}>{item.store.storeName}</Text>
            <Text style={styles.storeTagline}>{item.store.storeTagline}</Text>
          </View>
        </View>
        <View style={styles.storeIcons}>
          <ChatTeardropDots size={32} />
          <Phone size={32} />
        </View>
      </View>
      <View style={styles.productLastSection}>
        <View style={styles.priceSection}>
          <Text style={styles.price}>Price</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        <AppButton
          width={250}
          title={"Make an Offer"}
          backgroundColor="#000"
          textColor="#fff"
        />
      </View>
    </AppScreen>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productName: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "bold",
  },
  content: {
    // paddingHorizontal: 10,
  },
  productDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  productIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  productType: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: "#f3f3f3",
  },
  productRating: {},
  description: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  productDescription: {
    textAlign: "auto",
    color: "#b2b2b2",
  },
  productThirdSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  storeDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap:10,
  },
  storeImageContainer: {
    width: 60,
    height: 60,
    borderRadius:100,
  },
  storeLogo: {
    width: "100%",
    height: "100%",
    borderRadius:100,
  },
  storeDetails: {},
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeTagline: {
    fontSize: 14,
    color: "#b2b2b2",
  },
  storeIcons: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  productLastSection: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    // paddingBottom:20,
    // paddingHorizontal:30,
  },
  price: {
    fontSize: 14,
    color: "#b2b2b2",
  },
  productPrice: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
