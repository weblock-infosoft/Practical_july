import { StyleSheet, TextInput } from "react-native";
import React from "react";

const UserInput = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      placeholderTextColor={"rgba(108, 99, 255, 0.3)"}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default UserInput;

const styles = StyleSheet.create({
  input: {
    color: "rgba(108, 99, 255, 0.3)",
    fontWeight: "600",
    paddingVertical: 30,
    width: "80%",
    fontSize: 26,
  },
});
