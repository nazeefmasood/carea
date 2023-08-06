import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppScreen from "../../Components/AppScreen";
import Modal from "react-native-modal";
import AppInput from "../../Components/AppInput";
import Cars from "./Cars";
import { FlatList } from "react-native-gesture-handler";
import CarousalItem from "./CarousalItem";
import CarsCategoryGrid from "./CarsCategoryGrid";
import CompanyList from "./CarCompanyList";
import CompanyItem from "./CompanyItem";
import CarProductData from "./CarProductData";
import Card from "./Card";
import { FadersHorizontal, MagnifyingGlass } from "phosphor-react-native";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase_config";

const screenWidth = Dimensions.get("window").width;

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const FilterComponent = () => {
    return (
      <Pressable onPress={toggleModal}>
        <FadersHorizontal size={24} />
      </Pressable>
    );
  };

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) => {
      const categoryData = snapshot.docs.map((doc) => doc.data());
      setCategories(categoryData);
    });

    onSnapshot(collection(db, "products"), (snapshot) => {
      const productData = snapshot.docs.map((doc) => doc.data());
      console.log("Product data:", productData);

      setProducts(productData);
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppScreen
        customStyles={{ paddingHorizontal: 10, backgroundColor: "#fff" }}
      >
        <AppInput
          placeholder={"Search"}
          iconLeft={<MagnifyingGlass size={24} />}
          iconRight={<FilterComponent />}
          iconSize={25}
          customStyles={{ marginTop: 0 }}
        />

        <View style={styles.specialOffer}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Special Offers
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>See All</Text>
        </View>
        <View style={styles.specialOfferCarousal}>
          <FlatList
            data={Cars}
            horizontal
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item }) => <CarousalItem item={item} />}
            keyExtractor={(i)=>i.id}
          />
        </View>
        <CarsCategoryGrid />
        <View style={styles.specialOffer}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Top Deals</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>See All</Text>
        </View>
        <FlatList
          data={categories}
          horizontal
          contentContainerStyle={{
            marginTop: 12,
            gap: 10,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
          renderItem={({ item }) => <CompanyItem item={item} />}
          keyExtractor={(i)=>i.id}
        />
        <FlatList
          style={{ marginTop: 20 }}
          data={products}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{
            // padding: 10,
            gap: 15,
          }}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(i)=>i.id}
        />
        <Modal
          isVisible={isModalVisible}
          backdropColor="#fff"
          backdropOpacity={1}
          animationIn={"slideInUp"}
        >
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </AppScreen>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  specialOffer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  specialOfferCarousal: {
    width: screenWidth - 20,
    height: 200,
    backgroundColor: "#f3f3f3",
    marginTop: 20,
    borderRadius: 35,
  },
});
