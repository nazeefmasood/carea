import { Image, Text, StyleSheet, View } from "react-native";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import ProgressBar from "./ProgressBar";

import AppButton from "./AppButton";

const AppUpload = ({ image, progress }) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          zIndex: 1,
          backgroundColor: "#FFF",
        },
      ]}
    >
      {/* Background blur */}
      <View
        style={[StyleSheet.absoluteFill, { backgroundColor: "#FFF" }]}
      ></View>
      {/* // Content blur */}
      <View
        style={{
          width: "70%",
          alignItems: "center",
          paddingVertical: 16,
          rowGap: 12,
          borderRadius: 14,
          backgroundColor: "#FFF",
          borderColor: "#000",
          borderWidth:1,
          padding: 12,
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 6,
            }}
          />
        )}

        <Text style={{ fontSize: 12 }}>Uploading...</Text>
        <ProgressBar progress={progress} />
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#00000020",
          }}
        />

        <AppButton title={"Cancel"} textColor="#3478F6" />
      </View>
    </View>
  );
};

export default AppUpload;

const styles = StyleSheet.create({});
