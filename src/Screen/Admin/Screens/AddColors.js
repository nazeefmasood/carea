// AddColor.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("colors.db");

const AddColor = () => {
  const [id, setId] = useState("");
  const [colorHexCode, setColorHexCode] = useState("");
  const [carModel, setCarModel] = useState("");
  const [colors, setColors] = useState([]);

  useEffect(() => {
    checkAndCreateDatabase();
    fetchColors();
  }, []);

  const checkAndCreateDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS colors (id INTEGER PRIMARY KEY AUTOINCREMENT, colorHexCode TEXT NOT NULL, carModel TEXT NOT NULL);"
      );
    });
  };

  const fetchColors = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM colors;",
        [],
        (_, result) => {
          setColors(result.rows._array);
        },
        (_, error) => console.error("Error fetching data: ", error)
      );
    });
  };

  const handleSave = () => {
    if (colorHexCode && carModel) {
      if (id) {
        // If id exists, perform an update
        db.transaction((tx) => {
          tx.executeSql(
            "UPDATE colors SET colorHexCode = ?, carModel = ? WHERE id = ?;",
            [colorHexCode, carModel, id],
            () => {
              setId("");
              setColorHexCode("");
              setCarModel("");
              fetchColors();
            },
            (_, error) => console.error("Error updating data: ", error)
          );
        });
      } else {
        // If id does not exist, perform an insert
        db.transaction((tx) => {
          tx.executeSql(
            "INSERT INTO colors (colorHexCode, carModel) VALUES (?, ?);",
            [colorHexCode, carModel],
            () => {
              setColorHexCode("");
              setCarModel("");
              fetchColors();
            },
            (_, error) => console.error("Error inserting data: ", error)
          );
        });
      }
    }
  };

  const handleEdit = (item) => {
    setId(item.id);
    setColorHexCode(item.colorHexCode);
    setCarModel(item.carModel);
  };

  const handleDelete = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM colors WHERE id = ?;",
        [id],
        () => {
          fetchColors();
        },
        (_, error) => console.error("Error deleting data: ", error)
      );
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <View
          style={{
            backgroundColor: item.colorHexCode,
            width: 20,
            height: 20,
            borderRadius: 100,
            borderWidth:1,
            borderColor:'#ccc'
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.carModel}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEdit(item)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Color</Text>
      <TextInput
        style={styles.input}
        placeholder="Color Hex Code"
        value={colorHexCode}
        onChangeText={setColorHexCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Car Model"
        value={carModel}
        onChangeText={setCarModel}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{id ? "Update" : "Save"}</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, styles.tableHeaderText]}>
            Color Hex Code
          </Text>
          <Text style={[styles.headerText, styles.tableHeaderText]}>
            Car Model
          </Text>
        </View>
        <FlatList
          data={colors}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white", // Set background color to white
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  tableContainer: {
    marginTop: 16,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "white", // Set background color to white
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#f2f2f2", // Set background color for table header
  },
  tableHeaderText: {
    flex: 1,
  },
  list: {
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  editButton: {
    backgroundColor: "orange",
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 4,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddColor;
