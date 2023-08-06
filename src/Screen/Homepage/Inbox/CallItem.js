import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowDown, ArrowUp, Phone, X } from "phosphor-react-native";
import moment from "moment";

const CallItem = ({ item }) => {
  const formattedTime = moment(item.dateTime).format("dddd d, yyyy");
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          paddingVertical: 8,
          borderRadius: 50,
          paddingHorizontal: 8,
          alignContent: "space-between",
          gap: 5,
        }}
      >
        <View style={{ flex: 0.2 }}>
          <View
            style={{
              width: 65,
              padding: 8,
              height: 65,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f3f3f3",
            }}
          >
            <Image
              source={item.chatImage}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
        </View>
        <View style={{ flex: 0.6, justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 20, fontWeight: "900" }}>
            {item.callerName}
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <View
              style={{
                width: 15,
                alignItems: "center",
                justifyContent:"center",
                height: 15,
                backgroundColor:
                  item.type === "missed"
                    ? "#f75c5c"
                    : item.type === "incoming"
                    ? "#246bfd"
                    : "#65e293",
                borderRadius: 3,
              }}
            >
              {item.type === "missed" && <X size={15} color={"#fff"} />}
              {item.type === "incoming" && <ArrowDown size={15} color={"#fff"}  />}
              {item.type === "outgoing" && <ArrowUp size={15} color={"#fff"}  />}
            </View>
            <Text>
              {item.type} | {formattedTime}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <Phone size={30} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CallItem;

const styles = StyleSheet.create({});
