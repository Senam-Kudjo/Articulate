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
} from "react-native";
import { EvilIcons, Octicons, Feather } from "@expo/vector-icons";
import pictures from "../components/pictures";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2;
export default function HomeScreen({ navigation }) {
  const categories = ["Top", "New", "Artist", "Discount", "Cheapest", "Unique"];
  const [selectedCategoryIndex, setSelectedCategoryindex] = React.useState(0);

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
    return (
      <View style={{ ...styles.card }}>
        <Image source={picture.image} style={styles.cardImage} />
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
          <FlatList
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
    height: 240,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: "white",
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
