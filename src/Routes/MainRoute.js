import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import HomePageBottomNav from "./HomePageBottomNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WishListPage from "../Screen/WishListPage/WishListPage";
import NotificationPage from "../Screen/NotificationPage/NotificationPage";
import ForgetPage from "../Screen/ForgetPage/ForgetPage";
import SignInScreen from "../Screen/SignInScreen";
import SignupScreen from "../Screen/SignupScreen";
import OnboardingScreen from "../Screen/OnboardingScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import ProductDetails from "../Screen/ProductDetails/ProductDetails";
import { DotsThreeCircle, Heart, Phone } from "phosphor-react-native";
import WelcomeScreen from "../Screen/WelcomeScreen";
import LabTask from "../LabTask";
import Chat from "../Screen/Homepage/Inbox/Chat";
import { Pressable } from "react-native";
import CallScreen from "../Screen/Homepage/Inbox/CallScreen";
import Admin from "../Screen/Admin/Admin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase_config";
import Context, { useMyContext } from "../config/Context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddCategory from "../Screen/Admin/Screens/AddCategory";
import AddProduct from "../Screen/Admin/Screens/AddProduct";
import AddStore from "../Screen/Admin/Screens/AddStore";
import AddColors from "../Screen/Admin/Screens/AddColors";
import ProfileTab from "../Screen/Homepage/Tabs/ProfileTabs/ProfileTab";
import PrivacyPolicy from "../Screen/Homepage/Tabs/ProfileTabs/PrivacyPolicy";
import HelpCenter from "../Screen/Homepage/Tabs/ProfileTabs/HelpCenter";
import InviteFriends from "../Screen/Homepage/Tabs/ProfileTabs/InviteFriends";
import Security from "../Screen/Homepage/Tabs/ProfileTabs/Security";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Admin" component={Admin} />
      <Drawer.Screen name="AddProduct" component={AddProduct} />
      <Drawer.Screen name="AddCategory" component={AddCategory} />
      <Drawer.Screen name="AddColor" component={AddColors} />
      <Drawer.Screen name="AddStore" component={AddStore} />
    </Drawer.Navigator>
  );
}

const MainRoute = () => {
  const { navigate } = useNavigation();
  const {
    state: { user },
    dispatch,
  } = useMyContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        animation: "none",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="HomePageBottomNav"
        component={HomePageBottomNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Wishlist" component={WishListPage} />

      <Stack.Screen
        name="Notification"
        options={{
          headerRight: () => <DotsThreeCircle size={28} />,
        }}
        component={NotificationPage}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerTitleStyle: {
            fontSize: 26,
            fontWeight: "bold",
          },
          headerRight: () => {
            const navigation = useNavigation();
            const route = useRoute();
            const { item } = route.params;
            console.log("🚀 ~ file: MainRoute.js:51 ~ MainRoute ~ item:", item);
            return (
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CallScreen", { item })}
                >
                  <Phone size={30} />
                </TouchableOpacity>
                <DotsThreeCircle size={30} />
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="CallScreen"
        component={CallScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerTitle: "",
          headerRight: () => <Heart size={24} />,
        }}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen
        name="OnboardingScreen"
        options={{
          headerShown: false,
        }}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ForgetPage" component={ForgetPage} />
      <Stack.Screen name="ProfileTab" component={ProfileTab} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
      <Stack.Screen name="Security" component={Security} />

      
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{
          headerShown: false,
          headerTitle: "Employee Data",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainRoute;

const styles = StyleSheet.create({});
