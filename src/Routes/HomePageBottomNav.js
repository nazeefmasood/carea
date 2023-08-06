import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Pressable,
  View,
} from "react-native";
import React from "react";
import Homepage from "../Screen/Homepage/Homepage";
import Orders from "../Screen/Homepage/Tabs/Orders";
import Inbox from "../Screen/Homepage/Tabs/Inbox";
import WalletTab from "../Screen/Homepage/Tabs/Wallet";
import Profile from "../Screen/Homepage/Tabs/Profile";
import { FontAwesome } from "@expo/vector-icons";
import {
  Bell,
  Wallet,
  CarSimple,
  ChatTeardropDots,
  Heart,
  House,
  HouseSimple,
  ShoppingCart,
  User,
  MagnifyingGlass,
  DotsThreeCircle,
} from "phosphor-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActiveOrders from "../Screen/Homepage/Orders/ActiveOrders";
import CompletedOrders from "../Screen/Homepage/Orders/CompletedOrders";
import ChatsList from "../Screen/Homepage/Inbox/ChatsList";
import Calls from "../Screen/Homepage/Inbox/Calls";
import { useMyContext } from "../config/Context";

const Tab = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();
const HeaderLeft = () => {
  const { state } = useMyContext()
  const getInitial = () => {
    if (state.user) {
      const name = state.user.displayName || state.user.email || "";
      return name.charAt(0).toUpperCase();
    }
    return "";
  };
  const imageUrl =
    "https://www.magpakistan.com/wp-content/uploads/2023/03/chahat-fateh-ali-khan-biography.webp";
  return (
    <View style={styles.userProfile}>
      <View style={styles.userImage}>
        <View
      
          style={{
            width: 60,
            height: 60,
            justifyContent:"center",
            alignItems:"center",
            borderWidth:1,
            // backgroundColor: "#000",
            borderRadius: 100,
          }}
          resizeMode="contain"
        >
        <Text style={{fontSize:21,}}>{getInitial()}</Text>
  
        </View>
      </View>
      <View style={styles.userName}>
        <Text style={styles.goodMorningText}>Good morning👋</Text>
        <Text style={styles.userNameText}>Nazeef Masood</Text>
      </View>
    </View>
  );
};

const HeaderRight = ({ navigation }) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.statusBarIcons}>
      <Pressable onPress={() => navigate("Notification")}>
        <Bell size={30} />
      </Pressable>
      <Pressable onPress={() => navigate("Wishlist")}>
        <Heart size={30} />
      </Pressable>
    </View>
  );
};

const HeaderLeftProfile = () => {
  return <CarSimple size={30} />;
};
const HeaderLeftOrder = () => {
  return <CarSimple size={30} />;
};
const HeaderRightOrder = () => {
  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <MagnifyingGlass size={30} />
      <DotsThreeCircle size={30} />
    </View>
  );
};

const TopTabsGroupInbox = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 4,
          backgroundColor: "#000",
          borderRadius: 4,
        },

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
    >
      <TopTabs.Screen name="Chats" component={ChatsList} />
      <TopTabs.Screen name="Calls" component={Calls} />
    </TopTabs.Navigator>
  );
};
const TopTabsGroup = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 4,
          backgroundColor: "#000",
          borderRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
    >
      <TopTabs.Screen name="Active" component={ActiveOrders} />
      <TopTabs.Screen name="Completed" component={CompletedOrders} />
    </TopTabs.Navigator>
  );
};
const HomePageBottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShadowVisible: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home") {
            return focused ? (
              <House size={32} color="#000" weight={"fill"} />
            ) : (
              <House size={32} color="#9c9c9c" />
            );
          } else if (route.name == "Orders") {
            return focused ? (
              <ShoppingCart size={32} color="#000" weight={"fill"} />
            ) : (
              <ShoppingCart size={32} color="#9c9c9c" />
            );
          } else if (route.name == "Inbox") {
            return focused ? (
              <ChatTeardropDots size={32} color="#000" weight={"fill"} />
            ) : (
              <ChatTeardropDots size={32} color="#9c9c9c" />
            );
          
          } else if (route.name == "Profile") {
            return focused ? (
              <User size={32} color="#000" weight={"fill"} />
            ) : (
              <User size={32} color="#9c9c9c" />
            );
          }
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#9c9c9c",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={({ route }) => ({
          headerLeftContainerStyle: {
            // height:70,
            // backgroundColor: "#000",
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 10,
          },

          headerStyle: {
            height: 120,
          },
          headerShadowVisible: false,
          headerLeft: ({ navigation }) => (
            <HeaderLeft navigation={navigation} />
          ),
          headerRight: ({ navigation }) => (
            <HeaderRight navigation={navigation} />
          ),
          headerTitle: "",
        })}
      />
      <Tab.Screen
        name="Orders"
        component={TopTabsGroup}
        options={{
          headerLeftContainerStyle: {
            // height:70,
            // backgroundColor: "#000",
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          headerLeft: ({ navigation }) => (
            <HeaderLeftOrder navigation={navigation} />
          ),
          headerTitle: "My Orders",
          headerRight: ({ navigation }) => (
            <HeaderRightOrder navigation={navigation} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={TopTabsGroupInbox}
        options={{
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          headerLeft: ({ navigation }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/ios-filled/100/sedan.png",
              }}
              style={{ width: 35, height: 35 }}
              resizeMode="contain"
            />
          ),
          headerRight: ({ navigation }) => (
            <View style={{ flexDirection: "row", gap: 10 }}>
              <MagnifyingGlass size={30} />
              <DotsThreeCircle size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },

          headerLeft: ({ navigation }) => (
            <HeaderLeftProfile navigation={navigation} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePageBottomNav;

const styles = StyleSheet.create({
  statusBarContainer: {
    width: "100%",
    height: 70,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#000",
    gap: 5,
  },
  userImage: {},
  userName: {
    gap: 3,
  },
  statusBarIcons: {
    flexDirection: "row",
    gap: 10,
  },
  goodMorningText: {
    fontSize: 18,
  },
  userNameText: {
    fontSize: 22,
    fontWeight: "900",
  },
});
