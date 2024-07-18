import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MultiSelection = ({ title, onPress, isEnabled }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.buttonView}>
      <View style={styles.firstView}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
      <View style={styles.secondView}>
        {isEnabled && (
          <Image source={require("../assets/check.png")} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MultiSelection;

const styles = StyleSheet.create({
  buttonView: {
    height: 55,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  buttonTitle: {
    color: "#8D86FE",
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
    paddingLeft: 50,
  },
  firstView: {
    width: "80%",
    justifyContent: "center",
  },
  secondView: {
    width: "20%",
    justifyContent: "center",
  },
  image: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
