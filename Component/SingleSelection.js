import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const SingleSelection = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.buttonView}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SingleSelection;

const styles = StyleSheet.create({
  buttonView: {
    height: 55,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#8D86FE",
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
});
