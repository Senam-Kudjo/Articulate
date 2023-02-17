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
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <View
        style={{
          height: "50%",
          width: "90%",
          borderRadius: 20,
          backgroundColor: "white",
          opacity: 0.7,
          justifyContent: "center",
          alignItems: "center",
          top: "5%",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Log Into Your Account.
        </Text>
        <TouchableOpacity style={styles.input}>
          <TextInput
            placeholder="Email or Username"
            placeholderTextColor={"grey"}
            style={styles.inputText}
          ></TextInput>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.inputText}
            autoCapitalize={"none"}
            onChangeText={(val) => handlePasswordChange(val)}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={updateSecureTextEntry} style={styles.eye}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color={"grey"} size={25} />
          ) : (
            <Feather name="eye" color={"grey"} size={25} />
          )}
        </TouchableOpacity>

        {/* LOGGGGGGGGGGGGGGGGGGGGGGGG INNNNNNNN */}
        <TouchableOpacity
          style={styles.logIn}
          onPress={() => {
            navigation.navigate(Hometab);
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Log In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SignUp);
        }}
        style={{ marginTop: -40 }}
      >
        <Text style={{ textDecorationLine: "underline", fontWeight: "500" }}>
          Don't Have an Account? Sign Up.
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  boxKun: {},
  input: {
    backgroundColor: "#D9DDDB",
    height: 45,
    width: "80%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  inputText: {
    fontWeight: "bold",
    width: 250,
  },
  logIn: {
    backgroundColor: "black",
    height: 42,
    width: "35%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  action: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  eye: {
    bottom: 45,
    left: 100,
  },
});
