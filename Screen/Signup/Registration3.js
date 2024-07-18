import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SingleSelection from "../../Component/SingleSelection";
import { useRecoilState } from "recoil";
import { formState } from "../../StateData/atom";

export default function Registration3({ navigation }) {
  const [form, setForm] = useRecoilState(formState);
  submitData=(data)=>{
    setForm({ ...form, isStudent: data }) 
    navigation.navigate("Registration4")
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Gradient.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.text1}> QUESTION 3 OF 4</Text>
          <Text style={styles.questionText}>Are you a current student?:</Text>
          <View style={styles.inputView}>
            <SingleSelection
             onPress={() => submitData(true)}
             title="Yes" />
          </View>
          <View style={styles.inputView}>
            <SingleSelection 
             onPress={() => submitData(false)}
            title="No" />
          </View>
          
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginTop: 150,
    paddingLeft: 40,
    flex: 1,
  },
  text1: {
    color: "#6C63FF",
    fontWeight: "600",
    fontSize: 14,
  },
  questionText: {
    color: "#2F2E41",
    fontWeight: "600",
    fontSize: 26,
    marginTop: 10,
    paddingBottom: 20,
  },
  buttonView: {
    bottom: 100,
    position: "absolute",
    width: "80%",
    alignSelf: "center",
  },
  inputView: {
    marginTop: 20,
    width: "85%",
  },
});
