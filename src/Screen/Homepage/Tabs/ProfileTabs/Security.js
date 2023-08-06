import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import { ShieldCheck } from "phosphor-react-native";
import AppScreen from "../../../../Components/AppScreen";
import AppButton from "../../../../Components/AppButton";

const Security = () => {
  const handleUpdatePassword = () => {
    
    alert("Password Updated!");
  };

  const handleTwoFactorAuth = () => {
    
    alert("Two-Factor Authentication Enabled!");
  };

  return (
    <AppScreen customStyles={styles.container}>
      <ScrollView>
        <View style={styles.iconContainer}>
          <ShieldCheck size={80} />
        </View>
        <Text style={styles.title}>Security</Text>
        <Text style={styles.description}>
          Keep your account secure with these security settings.
        </Text>
        <AppButton
          title="Update Password"
          customStyles={styles.securityButton}
          onPress={handleUpdatePassword}
        />
        <AppButton
          title="Enable Two-Factor Authentication"
          customStyles={styles.securityButton}
          onPress={handleTwoFactorAuth}
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
  securityButton: {
    marginBottom: 15,
  },
});

export default Security;
