import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";

import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import UserButton from "../Component/UserButton";
import ListItem from "../Component/ListItem";
import { formState } from "../StateData/atom";
import { useRecoilState } from "recoil";
const Wight = Dimensions.get("window").width;
export default function EventView() {
  const [form, setForm] = useRecoilState(formState);

  console.log("form value", form);
  const snapPoints = useMemo(() => ["65%", "80%"], []);

  const bottomSheetRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/ImageBG.png")}
        style={{ height: Wight - 1, width: Wight }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleIndicatorStyle={styles.divider}
        backgroundStyle={styles.boxView}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.container1}>
            <Text style={styles.title}>Art Show 🎨</Text>
            <Text style={{ paddingTop: 5 }}>by Olivia Adams</Text>
            <ListItem
              imageIcon={require("../assets/calendar.png")}
              text1={"Monday, Nov 13 2023"}
              description={"6:00 PM - 10:00 PM"}
              color1={"#A5A5A5"}
            />
            <ListItem
              imageIcon={require("../assets/location_.png")}
              text1={"Lower Manhattan"}
              description={"Join to see full address"}
              color1={"#6C63FF"}
            />
            <ListItem
              imageIcon={require("../assets/Exclude.png")}
              text1={"78/100 tickets left"}
              description={"100+ invited"}
              color1={"#A5A5A5"}
            />
            <ListItem
              imageIcon={require("../assets/price.png")}
              text1={"$10.00 - $50.00"}
            />

            <View style={{ width: "90%" }}>
              <Text style={styles.titleText}>About this event</Text>
              <Text style={styles.descriptionText}>
                Come join me in celebrating my 25th birthday! I can't wait to
                celebrate with all of you, so let's make it a night to remember.
                See you at the party!
              </Text>

              <Text style={styles.title1}>Find this event</Text>
              <Image
                source={require("../assets/map.png")}
                style={styles.image1}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
      <View style={styles.bottomView}>
        <View style={styles.buttonView}>
          <UserButton onPress={() => alert("Success")} title={"Buy Tickets"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  divider: {
    height: 5,
    width: 50,
    backgroundColor: "#E0E0E0",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  bottomView: {
    bottom: 0,
    height: 100,
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  buttonView: {
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
  },
  boxView: {
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image1: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
  },
  titleText: {
    color: "#2F2E41",
    fontWeight: "600",
    fontSize: 18,
    paddingBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2F2E41",
    lineHeight: 25,
  },
  title1: {
    color: "#2F2E41",
    fontWeight: "600",
    fontSize: 18,
    paddingBottom: 10,
    marginTop: 10,
  },
});
