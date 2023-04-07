import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Entypo, AntDesign, EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Hometab from "../bottom_tabs/bottom_tabs";

const { width, height } = Dimensions.get("window");
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainScreen}>
      <View style={styles.barView}>
        <Octicons name="three-bars" size={22} color="black" />
        <View style={styles.cartLane}>
          <Feather name="shopping-bag" size={22} color="black" />
          <Octicons
            name="person"
            size={22}
            color="black"
            style={{ marginLeft: 25 }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{ paddingTop: 25, paddingLeft: 20 }}>
          <Text style={{ fontSize: 23, fontWeight: "600" }}>Discover Art</Text>
        </View>
        <View style={styles.searchBar}>
          <EvilIcons
            name="search"
            size={23}
            color="black"
            style={{ paddingBottom: 4 }}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Items"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.tabView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.mainTab}>
              <Text style={styles.mainTabText}>Top</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
              <Text style={styles.tabsText}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
              <Text style={styles.tabsText}>Artist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
              <Text style={styles.tabsText}>Discount</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
              <Text style={styles.tabsText}>Cheapest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
              <Text style={styles.tabsText}>Unique</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 15,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.example}>
            <Image
              source={require("../assets/bg2.jpg")}
              style={styles.example}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.example}>
            <Image
              source={require("../assets/bg2.jpg")}
              style={styles.example}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.example}>
            <Image
              source={require("../assets/bg2.jpg")}
              style={styles.example}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.example}>
            <Image
              source={require("../assets/bg2.jpg")}
              style={styles.example}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.example}>
            <Image
              source={require("../assets/bg2.jpg")}
              style={styles.example}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.example}>
            <Image
              source={require("../assets/bg2.jpg")}
              style={styles.example}
            ></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: "white",
    flex: 1,
    width,
    height,
  },
  barView: {
    marginTop: 60,
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
    height: 40,
  },
  cartLane: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
  },
  searchBar: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0.3,
    borderColor: "grey",
    width: "85%",
    borderRadius: 6,
    marginLeft: 20,
  },
  searchInput: {
    height: 40,
    width: "80%",
    backgroundColor: "white",
    paddingLeft: 5,
  },
  tabView: {
    flexDirection: "row",
    marginTop: 35,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  mainTab: {
    marginLeft: 20,
    height: 30,
    textAlign: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginRight: 10,
    backgroundColor: "black",
    width: 70,
  },
  mainTabText: {
    textAlign: "center",
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
  tabs: {
    marginLeft: 10,
    height: 28,
    textAlign: "center",
    borderRadius: 7,
    width: 75,
    borderWidth: 0.4,
    borderColor: "grey",
    marginRight: 10,
    alignSelf: "center",
  },
  tabsText: {
    textAlign: "center",
    padding: 4,
  },
  example: {
    height: 200,
    width: 155,
    backgroundColor: "white",
    marginBottom: 20,
    // borderWidth: 0.3,
    // borderColor: "grey",
    borderRadius: 15,
  },
});
