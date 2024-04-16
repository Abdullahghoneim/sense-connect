import React from "react";
import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import { router } from "expo-router";

export default function Home() {
  const handleImageClick = () => {
    console.log("Image Clicked");
  };

  return (
    <View style={styles.container}>
      {/* <Link
        href="/mainBuilding"
        style={{
          width: "500",
          height: "500",
        }}
      > */}
      <Text style={{ fontSize: 20, padding: 5 }}>
        مشروع التخرج ٢٠٢٤ الفرقة الرابعة تكنولوجيا التعليم الشعبة العامة
      </Text>
      <Pressable
        onPress={() => {
          // "/mainBuilding"
          router.push("/mainBuilding");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/WhatsApp Image 2024-04-13 at 7.55.08 PM.jpeg")}
        />
      </Pressable>
      {/* </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
    borderRadius: 10,
  },
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
