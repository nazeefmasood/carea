import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import { UsersThree } from "phosphor-react-native";
import AppScreen from "../../../../Components/AppScreen";
import AppButton from "../../../../Components/AppButton";

const InviteFriends = () => {
  const handleInvite = () => {
    alert("Invitation Sent!");
  };

  return (
    <AppScreen customStyles={styles.container}>
      <ScrollView>
        <View style={styles.iconContainer}>
          <UsersThree size={80} />
        </View>
        <Text style={styles.title}>Invite Friends</Text>
        <Text style={styles.description}>
          Invite your friends to join Carea Ecommerce and get amazing rewards!
        </Text>
        <AppButton
          title="Invite via Email"
          customStyles={styles.inviteButton}
          onPress={handleInvite}
        />
        <AppButton
          title="Invite via Social Media"
          customStyles={styles.inviteButton}
          onPress={handleInvite}
        />
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign:"center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  inviteButton: {
    marginBottom: 15,
  },
});

export default InviteFriends;
