import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./home";
import Hometab from "../bottom_tabs/bottom_tabs";

export default function SignUp({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

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
      source={require("../assets/bg1.jpg")}
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100%",
        width: "100%",
      }}
      resizeMode="repeat"
    >
      <View
        style={{
          height: "60%",
          width: "90%",
          borderRadius: 20,
          backgroundColor: "white",
          opacity: 0.9,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 20,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Create An Account
        </Text>
        {/* <KeyboardAvoidingView behavior="padding"> */}
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
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => {
            navigation.navigate(Hometab);
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>
        <Text> Forgot Password?</Text>
        {/* </KeyboardAvoidingView> */}
      </View>
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
    marginBottom: 20,
  },
  inputText: {
    fontWeight: "bold",
    width: 200,
  },
  signUp: {
    backgroundColor: "yellow",
    height: 45,
    width: "40%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
  eye: {
    bottom: 55,
    left: 100,
  },
});
