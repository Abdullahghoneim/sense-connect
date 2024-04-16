import React from "react";
import { View, Image, Pressable } from "react-native";
import { router } from "expo-router";
export default function MainBuilding() {
  return (
    <View>
      <Pressable
        onPress={() => {
          router.push("/tobuilding");
        }}
      >
        <Image
          style={{ width: 500, height: 500, borderRadius: 10 }}
          source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.01.10 PM.jpeg")}
        />
      </Pressable>
    </View>
  );
}
