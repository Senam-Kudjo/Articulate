import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    // <SafeAreaView style={styles.mainScreen}>
    <View style={styles.homeScreen}>
      <View style={styles.firstLane}>
        <Entypo name="bell" size={24} color="black" />
      </View>
      <View>
        <TouchableOpacity style={styles.searchBar}>
          <TextInput placeholder="Search ..." style={styles.searchBarText} />
          <Ionicons
            name="ios-search-outline"
            size={24}
            color="grey"
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ height: 530 }}></View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#040009",
    backgroundColor: "white",
    position: "absolute",
  },
  searchBar: {
    backgroundColor: "#F0F0F0",
    width: "90%",
    height: 40,
    justifyContent: "center",
    borderRadius: 7,
    shadowRadius: 5,
    shadowColor: "silver",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarText: {
    paddingLeft: 10,
    width: "90%",
    paddingTop: 0,
  },
  firstLane: {
    marginBottom: 27,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    paddingRight: 20,
  },
});
