import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardEventName,
  ScrollView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        // height: "100%",
      }}
    >
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          {/* SEARCH BUTTONNNNN */}
          <TouchableOpacity style={styles.searchButton}>
            <TextInput
              placeholder="search"
              placeholderTextColor={"grey"}
              style={{ width: "85%" }}
            />
            <MaterialIcons name="search" color={"grey"} size={30} />
          </TouchableOpacity>

          {/* BODYYYYYYYYYYYY */}
        </View>

        <View style={styles.content}>
          <Text style={{ fontWeight: "bold", color: "white" }}>HOT PICKS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    height: 40,
    width: "85%",
    backgroundColor: "#CFD2D1",
    borderRadius: 30,
    // bottom: "82%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    // position: "absolute",
    // zIndex: 999,
  },
  content: {
    height: 500,
    backgroundColor: "red",
    top: 40,
  },
});
