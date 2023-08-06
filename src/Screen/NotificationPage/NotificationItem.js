import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import DropShadow from "react-native-drop-shadow";

const screenWidth = Dimensions.get("window").width;
const NotificationItem = ({ item }) => {
  return (
    <View
      style={[
        styles.notificationContainer,
        {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 1,

          elevation: 3,
        },
      ]}
    >
      <View style={styles.notificationIconContainer}>
        <View style={styles.notificationIcon}>{item.iconNotification}</View>
      </View>
      <View style={styles.notificationDetailsContainer}>
        <Text style={styles.notificationTitleText}>
          {item.notificationTitle}
        </Text>
        <Text style={styles.notificationDetailsText}>
          {item.notificationDetails}
        </Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  notificationContainer: {
    // width: screenWidth-30,
    flexDirection: "row",
    gap: 5,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexWrap: "wrap",
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  notificationIconContainer: {
    flex: 0.2,
  },
  notificationIcon: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#000",
  },
  notificationDetailsContainer: {
    flex: 0.8,
    gap: 3,
  },
  notificationTitleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationDetailsText: {
    color: "#9c9c9c",
    fontSize: 14,
  },
});
