import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/home";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

// const { width, height } = Dimensions.get("window");
export default function Hometab({ navigation }) {
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#E0E0E0",
          tabBarStyle: {
            backgroundColor: "#BB9C4D",
            height: 65,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            paddingBottom: 10,
            padding: 10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <EntypoIcon name="home" color="white" size={25} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Category"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="list" color="#E0E0E0" size={25} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Downloads"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialComunityIcons
                name="download"
                color="#E0E0E0"
                size={25}
              />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Favourites"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <EntypoIcon name="heart" color="#E0E0E0" size={25} />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
