import React from "react";
import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
export default function MainBuilding() {
  return (
    <View>
      <Link
        href="/tobuilding"
        style={{
          width: "500",
          height: "500",
        }}
      >
        <Image
          style={{ width: 500, height: 500, borderRadius: 10 }}
          source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.01.10 PM.jpeg")}
        />
      </Link>
    </View>
  );
}
