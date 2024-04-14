import React from "react";
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
export default function Home() {
  const handleImageClick = () => {
    console.log("Image Clicked");
  };

  return (
    <View style={styles.container}>
      <Link
        href="/mainBuilding"
        style={{
          width: "500",
          height: "500",
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/WhatsApp Image 2024-04-13 at 7.55.08 PM.jpeg")}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // width: 500,
    // height: 500,
    // borderRadius: 10,
  },
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
