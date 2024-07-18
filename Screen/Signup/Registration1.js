import  React ,{useState,useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground,Keyboard } from "react-native";
import UserButton from "../../Component/UserButton";
import UserInput from "../../Component/UserInput";
import { formState } from "../../StateData/atom";
import { useRecoilState } from "recoil";

export default function Registration1({ navigation }) {
  const [form, setForm] = useRecoilState(formState);
  const [companyName ,setCompanyName]=useState("")

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  submitData=()=>{
    setForm({ ...form, company: companyName }) 
    navigation.navigate("Registration2")
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Gradient.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.text1}> QUESTION 1 OF 4</Text>
          <Text style={styles.questionText}>Company/Organization:</Text>
          <View style={styles.inputView}>
            <UserInput 
              onChangeText={(text)=>setCompanyName(text)}
            placeholder={"Write your answer here"} />
          </View>
          {
            !keyboardStatus &&
          <View style={styles.buttonView}>
            <UserButton
              onPress={() => submitData()}
              title="Next question"
            />
          </View>
          }
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
  },
  buttonView: {
    bottom: 100,
    position: "absolute",
    width: "80%",
    alignSelf: "center",
  },
  inputView: {
    marginTop: 20,
  },
});
