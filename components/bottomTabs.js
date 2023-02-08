import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Discovertab from "./btabs/discovertab";
// import Transtab from "./btabs/transactiontab";
// import Home from "./btabs/home";
// import Homeo from "./homeo";
// import EntypoIcon from "react-native-vector-icons/Entypo";
// import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
// import MaterialComunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Category from "./btabs/category";
// import Favourite from "./btabs/favourite";
const Tab = createBottomTabNavigator();

export default function Hometab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#3EE4B7",
          top: 0,
          height: 60,
          borderTopStartRadius: 18,
          borderTopEndRadius: 18,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homeo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="home" color="white" size={27} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Discover"
        component={Discovertab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="search" color="white" size={27} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favourites"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="heart" color="red" size={30} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="list" color="white" size={27} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Transactions"
        component={Transtab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons
              name="point-of-sale"
              color="white"
              size={27}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3EE4B7",
    flexDirection: "column",
  },
});
