import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { ScrollView } from "react-native";
import { router } from "expo-router";

export default function AlImages() {
  return (
    <ScrollView>
      <View>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            مدرج
          </Text>
          <Pressable
            onPress={() => {
              router.push("/one");
            }}
          >
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.41.09 PM.jpeg")}
            />
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            قاعه
          </Text>
          <Pressable
            onPress={() => {
              router.push("/two");
            }}
          >
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.42.14 PM.jpeg")}
            />
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            مسجد
          </Text>
          <Pressable
            onPress={() => {
              router.push("/three");
            }}
          >
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.42.14 PM (1).jpeg")}
            />
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            معمل حاسب الي
          </Text>
          <Pressable
            onPress={() => {
              router.push("/for");
            }}
          >
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.42.14 PM (2).jpeg")}
            />
          </Pressable>
        </View>

        <View style={{ marginTop: 10 }}>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.43.16 PM.jpeg")}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Image
            style={{ width: 300, height: 800 }}
            source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.43.17 PM.jpeg")}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Image
            style={{ width: 300, height: 800 }}
            source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.43.54 PM.jpeg")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
