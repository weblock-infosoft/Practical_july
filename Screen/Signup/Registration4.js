import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import UserButton from "../../Component/UserButton";
import UserInput from "../../Component/UserInput";
import MultiSelection from "../../Component/MultiSelection";
import { useRecoilState } from "recoil";
import { formState } from "../../StateData/atom";

export default function Registration4({ navigation }) {

  const [form, setForm] = useRecoilState(formState);
  const [eventList, setEventList] = useState([
    {
      id: 1,
      title: "Linkedin",
      isEnable: false,
    },
    {
      id: 2,
      title: "Instagram",
      isEnable: false,
    },
    {
      id: 3,
      title: "Twitter",
      isEnable: false,
    },
    {
      id: 4,
      title: "Facebook",
      isEnable: false,
    },
  ]);

  const UpdateArray = (data) => {
    if (data.isEnable) {
      const newData = eventList.map((item) =>
        item.id === data.id ? { ...item, isEnable: false } : item
      );
      setEventList(newData);
    } else {
      const newData = eventList.map((item) =>
        item.id === data.id ? { ...item, isEnable: true } : item
      );
      setEventList(newData);
    }
  };

  submitData=()=>{
    const UpdateArray=eventList.filter((item)=>item.isEnable==true)
    setForm({ ...form, eventSource: UpdateArray }) 
    navigation.navigate("EventView")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Gradient.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.text1}> QUESTION 4 OF 4</Text>
          <Text style={styles.questionText}>
            Where did you hear about this event?:
          </Text>
          {eventList.map((item) => {
            return (
              <View 
              key={item.id}
              style={styles.inputView}>
                <MultiSelection
                  onPress={() => UpdateArray(item)}
                  title={item.title}
                  isEnabled={item.isEnable}
                />
              </View>
            );
          })}

          <View style={styles.buttonView}>
            <UserButton
              onPress={() =>submitData() }
              title="Claim ticket"
            />
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
    paddingRight: 40,
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
