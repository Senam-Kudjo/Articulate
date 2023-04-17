import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import LottieView from "lottie-react-native";
import SignIn from "./signIn";
import * as Animatable from "react-native-animatable";

export default function OnboardingScreen({ navigation }) {
  return (
    <Swiper style={styles.wrapper}>
      {/* SLIDEEEEEEEEE 11111111 */}
      <View style={styles.slide1}>
        <ImageBackground
          source={require("../assets/a1.jpg")}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              height: 250,
              width: 250,
              opacity: 0.75,
              borderRadius: 360,
              top: 100,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              iMullar
            </Text>

            <Text
              style={{
                fontSize: 25,
                paddingTop: 0,
                fontWeight: "bold",
                // backgroundColor: "white",
                marginTop: 10,
                borderRadius: 5,
                color: "white",
              }}
            >
              Welcome Onboard
            </Text>
            <Text
              style={{
                color: "grey",
                marginTop: 15,
                fontWeight: "bold",
                // backgroundColor: "white",
              }}
            >
              Enjoy Your Stay.
            </Text>
          </View>
        </ImageBackground>
      </View>
      {/* END OF SLIDE 1 */}

      {/* SLIDEEEEEEEEEEEE 222222222 */}
      <View style={styles.slide2}>
        <LottieView source={require("../lottiefiles/mobile.json")} autoPlay />
        <Text
          style={{
            fontSize: 17,
            paddingTop: 300,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Get In Touch With Current Trends in The World of African Entertainment
        </Text>
        <Text style={{ color: "grey", marginTop: 15 }}>
          News, Music blogs, Artiste News etc
        </Text>
      </View>
      {/* END OF SLIDEEEEEEEE 2 */}

      {/* SLIDEEEEEEEEEEEE 333333333 */}
      <View style={styles.slide3}>
        <LottieView source={require("../lottiefiles/song.json")} autoPlay />
        <Text
          style={{
            fontSize: 17,
            paddingTop: 300,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 80,
            color: "white",
          }}
        >
          Enjoy Your favourite songs from your favuorite Artiste and Genre of
          African Music
        </Text>
        <Text style={{ color: "grey", marginTop: 15 }}>
          News, Music blogs, Artiste News etc
        </Text>
      </View>
      {/* END OF SLIDE 3 */}

      {/* SLIDEEEEEEEEEEEE 44444444444444444 */}
      <View style={styles.slide4}>
        <Image
          source={require("../assets/a3.jpg")}
          style={{ height: "100%", width: "100%", position: "absolute" }}
        />
        <TouchableOpacity
          style={styles.letsGo}
          onPress={() => {
            navigation.navigate(SignIn);
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Let's Go
          </Text>
        </TouchableOpacity>
      </View>
      {/* END OF SLIDE 4 */}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "column",
    marginTop: 0,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C3C2C3",
    flexDirection: "column",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  letsGo: {
    borderRadius: 15,
    height: 45,
    width: 150,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    top: 200,
    right: 20,
  },
});
