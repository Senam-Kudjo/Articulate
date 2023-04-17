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
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import {
  EvilIcons,
  Octicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import pictures from "../components/pictures";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2;
export default function HomeScreen({ navigation }) {
  const categories = ["Top", "New", "Artist", "Discount", "Cheapest", "Unique"];
  const [selectedCategoryIndex, setSelectedCategoryindex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  function CategoryList() {
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryindex(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListtext,
                  color: selectedCategoryIndex == index ? "white" : "grey",
                  backgroundColor:
                    selectedCategoryIndex == index ? "#D1AD52" : "white",
                  borderWidth: selectedCategoryIndex == index ? 0 : 1,
                }}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  const Card = ({ picture, index }) => {
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 0, 0],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
    });

    return (
      <View style={{ ...styles.card, transform: [{ scale }] }}>
        <Animated.View style={{ ...styles.cardOverlay, opacity }} />
        <View style={styles.priceTag}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            $15
          </Text>
        </View>
        <Image source={picture.image} style={styles.cardImage} />
        <View style={styles.cardDetails}></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                paddingLeft: 10,
                marginTop: 5,
                marginBottom: 2,
              }}
            >
              {picture.name}
            </Text>
            <Text style={{ fontSize: 12, paddingLeft: 10, padding: 1 }}>
              Artiste: {picture.artiste}
            </Text>
            <Text style={{ fontSize: 12, paddingLeft: 10 }}>
              Sales: {picture.sales}
            </Text>
          </View>
          <MaterialIcons
            name="favorite-outline"
            size={24}
            color="red"
            style={{
              marginRight: 13,
              marginTop: 2,
            }}
          />
        </View>
      </View>
    );
  };
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
        <View style={{ marginTop: 15, marginLeft: 20, zIndex: 999 }}>
          <Text style={{ fontSize: 23, fontWeight: "600", color: "#A38126" }}>
            Discover Art
          </Text>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CategoryList />
        </ScrollView>
        <View>
          <Animated.FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            data={pictures}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card picture={item} index={index} />
            )}
          />
        </View>
        <View>
          <Animated.FlatList
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            data={pictures}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card picture={item} index={index} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  barView: {
    marginTop: 50,
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
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListtext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "grey",
    borderWidth: 1,
    marginRight: 20,
    alignSelf: "center",
    textAlign: "center",
    padding: 4,
    height: 30,
    width: 85,
    borderRadius: 7,
    borderColor: "#D0D0D0",
  },
  card: {
    height: 265,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
  },
  cardImage: {
    width: "100%",
    height: 190,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  priceTag: {
    height: 30,
    width: 40,
    zIndex: 1,
    position: "absolute",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    opacity: 0.6,
  },
  cardDetails: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  cardOverlay: {
    height: 265,
    width: cardWidth,
    backgroundColor: "white",
    zIndex: 100,
    position: "absolute",
    borderRadius: 15,
  },
});
