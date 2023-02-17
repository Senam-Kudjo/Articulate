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
        backgroundColor: "white",
        display: "flex",
        // height: "100%",
      }}
    >
      <ScrollView>
        <View style={styles.mainScreen}>
          <View>
            <TouchableOpacity>
              <TextInput placeholder="Search" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainScreen: {},
});
