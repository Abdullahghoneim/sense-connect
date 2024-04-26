import React from "react";
import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text style={{ fontSize: 20, padding: 5 }}>
        مشروع التخرج ٢٠٢٤ الفرقة الرابعة تكنولوجيا التعليم الشعبة العامة
      </Text>
      <Pressable
        onPress={() => {
          router.push("/mainBuilding");
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/images/WhatsApp Image 2024-04-13 at 7.55.08 PM.jpeg")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500,
    borderRadius: 10,
  },
});
