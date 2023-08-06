import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("employeesInformation.db");

const Labtaskmad = () => {
  const [eData, setEData] = useState({
    eName: "",
    eAge: "",
    eStatus: "",
  });
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS employeesData (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER, status TEXT);",
        [],
        () => {
          console.log("Table created successfully!");
        },
        (_, error) => {
          console.error("Error creating table:", error);
        }
      );
    });
  };

  const writeData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO employeesData (name, age, status) VALUES (?, ?, ?);",
        [eData.eName, eData.eAge, eData.eStatus],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log("Data written successfully!");
            setEData({
              eName: "",
              eAge: "",
              eStatus: "",
            });
            getData();
          } else {
            console.error("Failed to write data.");
          }
        },
        (_, error) => {
          console.error("Error adding data:", error);
        }
      );
    });
  };

  const getData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM employeesData;",
        [],
        (_, { rows }) => {
          const data = rows._array;
          setEmployeeData(data);
        },
        (_, error) => {
          console.log("Error:", error);
        }
      );
    });
  };

  const deleteData = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM employeesData WHERE id = ?;",
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log("Data deleted successfully!");
            getData();
          } else {
            console.error("Failed to delete data.");
          }
        },
        (_, error) => {
          console.error("Error deleting data:", error);
        }
      );
    });
  };

  const updateData = (id, newName) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE employeesData SET name = ? WHERE id = ?;",
        [newName, id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log("Data updated successfully!");
            getData();
          } else {
            console.error("Failed to update data.");
          }
        },
        (_, error) => {
          console.error("Error updating data:", error);
        }
      );
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.employeeItem}>
    <View>
      <Text style={styles.employeeText}>Name: {item.name}</Text>
      <Text style={styles.employeeText}>Age: {item.age}</Text>
      <Text style={styles.employeeText}>Status: {item.status}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteData(item.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => updateData(item.id, "Updated Name")}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={eData.eName}
        onChangeText={(text) => setEData({ ...eData, eName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={eData.eAge}
        onChangeText={(text) => setEData({ ...eData, eAge: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={eData.eStatus}
        onChangeText={(text) => setEData({ ...eData, eStatus: text })}
      />
      <TouchableOpacity style={styles.button} onPress={writeData}>
        <Text style={styles.buttonText}>Add Employee</Text>
      </TouchableOpacity>
      <FlatList
        data={employeeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 30,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 40,

    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  employeeItem: {
    marginBottom: 16,
    borderWidth: 1,
    flexDirection: "row",
    gap:5,
    padding: 5,
    justifyContent:"space-between",
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  employeeText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  updateButton: {
    backgroundColor: "green",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
});
export default Labtaskmad;
