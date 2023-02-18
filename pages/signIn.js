import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

import SignUp from "./signUp";
import { Feather, FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./home";
import Hometab from "../bottom_tabs/bottom_tabs";

export default function SignIn({ navigation }) {
  // Handling Email change
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  // Handling Password Change

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={styles.boxKun}>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>
          Log Into Your Account
        </Text>

        <View style={styles.inputBox}>
          <TextInput
            placeholder="Email or Username"
            placeholderTextColor="grey"
            style={{ fontSize: 14 }}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            maxLength={25}
            style={{ fontSize: 14, width: "85%", paddingTop: 5 }}
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry} style={styles.eye}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={"grey"} size={25} />
            ) : (
              <Feather name="eye" color={"grey"} size={25} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Hometab")}
        >
          <Text style={{ fontWeight: "600" }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              textDecorationLine: "underline",
              fontWeight: "bold",
              color: "grey",
              letterSpacing: 1.5,
            }}
          >
            Don't have an Account? Sign Up.
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  boxKun: {
    height: 350,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    opacity: 0.97,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  inputBox: {
    height: 50,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingLeft: 10,
    alignItems: "center",
    width: "80%",
    marginTop: 25,
    borderRadius: 5,
    flexDirection: "row",
  },
  signInButton: {
    borderRadius: 10,
    marginTop: 30,
    height: 45,
    width: "55%",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});
