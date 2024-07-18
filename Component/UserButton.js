import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const UserButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.buttonView}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default UserButton;

const styles = StyleSheet.create({
  buttonView: {
    height: 45,
    borderRadius: 30,
    width: "100%",
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
  },
});
