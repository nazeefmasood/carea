import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const AppCheckBox = ({
  checkBoxSize = 20,
  unFillColor = "#fff",
  checkBoxText = "#000",
  fillColor = "#000",
  borderColor = "#000",
  borderWidth = 2,
  borderRadius = 5,
  onPress,
  isChecked,
}) => {
  return (
    <View style={{ width: "100%", paddingLeft: 10, marginTop:15 }}>
      <BouncyCheckbox
        size={checkBoxSize}
        isChecked={isChecked}
        fillColor={fillColor}
        unfillColor={unFillColor}
        text={checkBoxText}
        iconStyle={{ borderColor: borderColor, borderRadius: borderRadius }}
        onPress={onPress}
        innerIconStyle={{
          borderWidth: borderWidth,
          borderRadius: borderRadius,
        }}
        textStyle={{ textDecorationLine: "none" }}
      />
    </View>
  );
};

export default AppCheckBox;
