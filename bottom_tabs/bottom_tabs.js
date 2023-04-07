import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/home";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
export default function Hometab({ navigation }) {
  return (
    <View style={{ width, height }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "cyan",
          tabBarStyle: {
            backgroundColor: "black",
            top: 0,
            height: 65,
            borderRadius: 0,
            // paddingBottom: 10,
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
          name="Live"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="live-tv" color="white" size={25} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialComunityIcons name="newspaper" color="white" size={25} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Appointments"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <EntypoIcon name="bookmarks" color="white" size={25} />
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
