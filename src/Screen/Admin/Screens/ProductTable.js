import React from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const ProductTable = ({ products, handleEdit, handleDelete }) => {
  const renderItem = ({ item }) => (
    <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        <Text style={[styles.columnText, styles.heading]}>Name</Text>
        <Text style={[styles.columnText, styles.heading]}>Type</Text>
        <Text style={[styles.columnText, styles.heading]}>Price</Text>
        <Text style={[styles.columnText, styles.heading]}>Rating</Text>
        <Text style={[styles.columnText, styles.heading]}>Image</Text>
        <Text style={[styles.columnText, styles.heading]}>Actions</Text>
      </View>
      {products.map((item) => (
        <View key={item.id} style={styles.tableRow}>
          <Text style={styles.columnText}>{item.productName}</Text>
          <Text style={styles.columnText}>{item.productType}</Text>
          <Text style={styles.columnText}>{item.price}</Text>
          <Text style={styles.columnText}>{item.rating}</Text>
          <Image

            source={{ uri: item.productImage }}
            style={styles.thumbnailImage}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEdit(item.id)}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductTable;
const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  columnText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  heading: {
    fontWeight: "bold",
  },
  thumbnailImage: {
    width: 50,
    height: 50,
    borderRadius:100,
    resizeMode: "cover",
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
