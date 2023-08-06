import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import AppScreen from "../../../../Components/AppScreen";

const PrivacyPolicy = () => {
  return (
    <AppScreen customStyles={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          At Carea Ecommerce, we take your privacy seriously. This Privacy Policy
          outlines the types of information we collect from our users, how we use
          it, and how we protect your personal data.
        </Text>

        <Text style={styles.heading}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          We may collect personal information such as your name, email address,
          phone number, and shipping address when you create an account or place
          an order on our app.
        </Text>

        <Text style={styles.heading}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          We use the information you provide to process your orders, deliver your
          purchases, and communicate with you about your account and orders. We
          may also use your email address to send you promotional offers and
          updates about our products and services, but you can opt-out at any time.
        </Text>

        <Text style={styles.heading}>Data Security</Text>
        <Text style={styles.paragraph}>
          We implement security measures to protect your personal information
          from unauthorized access and misuse. However, please understand that no
          data transmission over the internet or any wireless network is 100%
          secure. We cannot guarantee the security of your information.
        </Text>

        <Text style={styles.heading}>Third-Party Services</Text>
        <Text style={styles.paragraph}>
          We may use third-party services that collect, monitor, and analyze
          user data for analytics purposes. These services have their own privacy
          policies that govern how they use and protect your information.
        </Text>

        <Text style={styles.heading}>Changes to this Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </Text>
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default PrivacyPolicy;
