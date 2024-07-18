import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItem = ({ imageIcon, text1, description, color1 }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 15 }}>
        <Image source={imageIcon} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text1data}>{text1}</Text>
        <Text style={[styles.text2data, { color: color1 }]}>{description}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  text1data: {
    color: "#2F2E41",
    fontWeight: "500",
    fontSize: 16,
  },
  text2data: {
    fontWeight: "500",
    fontSize: 12,
  },
});
