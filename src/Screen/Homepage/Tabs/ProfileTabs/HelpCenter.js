import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import AppScreen from "../../../../Components/AppScreen";

const HelpCenter = () => {
  return (
    <AppScreen customStyles={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Frequently Asked Questions</Text>
        <Text style={styles.question}>Q: How can I track my order?</Text>
        <Text style={styles.answer}>
          A: You can track your order by going to the "Orders" section in your
          account. Click on the order you want to track, and you'll find the
          tracking details there.
        </Text>

        <Text style={styles.question}>Q: How can I change my shipping address?</Text>
        <Text style={styles.answer}>
          A: If you need to change your shipping address, please contact our
          customer support team as soon as possible. They will assist you with
          updating your shipping address.
        </Text>

        <Text style={styles.question}>Q: What payment methods do you accept?</Text>
        <Text style={styles.answer}>
          A: We accept various payment methods, including credit/debit cards,
          PayPal, and more. You can choose your preferred payment option during
          the checkout process.
        </Text>

        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.contact}>
          For any further assistance or inquiries, you can reach out to our
          customer support team at:
        </Text>
        <Text style={styles.contact}>Email: support@careaecommerce.com</Text>
        <Text style={styles.contact}>Phone: +1 (123) 456-7890</Text>
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
  question: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
    marginBottom: 15,
  },
  contact: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HelpCenter;
