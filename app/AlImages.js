import React, { useState } from "react";
import { Text, View, Image, Pressable, Modal, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { router } from "expo-router";
import { Video, ResizeMode } from "expo-av";

export default function AlImages() {
  const [showModal, setShowModal] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [srcVideo, setVideo] = React.useState(null);

  React.useEffect(() => {
    if (status.didJustFinish) {
      setShowModal(false);
    }
  }, [status]);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          //
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {srcVideo === "1" ? (
              <Video
                style={{
                  width: 500,
                  height: 500,
                }}
                ref={video}
                source={require("../assets/WhatsApp Video 2024-04-14 at 6.06.53 PM.mp4")}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            ) : srcVideo === "2" ? (
              <Video
                style={{
                  width: 500,
                  height: 500,
                }}
                ref={video}
                source={require("../assets/WhatsApp Video 2024-04-14 at 6.06.57 PM.mp4")}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            ) : srcVideo === "3" ? (
              <Video
                style={{
                  width: 500,
                  height: 500,
                }}
                ref={video}
                source={require("../assets/WhatsApp Video 2024-04-14 at 6.07.46 PM.mp4")}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            ) : null}
          </View>
        </View>
      </Modal>
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
          <Pressable
            onPress={() => {
              setShowModal(true);
              setVideo("1");
            }}
          >
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.43.16 PM.jpeg")}
            />
          </Pressable>
        </View>

        <View style={{ marginTop: 10 }}>
          <Pressable
            onPress={() => {
              setShowModal(true);
              setVideo("2");
            }}
          >
            <Image
              style={{ width: 300, height: 800 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.43.17 PM.jpeg")}
            />
          </Pressable>
        </View>
        <View style={{ marginTop: 10 }}>
          <Pressable
            onPress={() => {
              setShowModal(true);
              setVideo("3");
            }}
          >
            <Image
              style={{ width: 300, height: 800 }}
              source={require("../assets/images/WhatsApp Image 2024-04-13 at 8.43.54 PM.jpeg")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 500,
    height: 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
