import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function One() {
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
                source={require("../assets/WhatsApp Video 2024-04-13 at 9.11.17 PM.mp4")}
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
                source={require("../assets/WhatsApp Video 2024-04-13 at 9.22.57 PM.mp4")}
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
                source={require("../assets/WhatsApp Video 2024-04-13 at 9.22.57 PM (1).mp4")}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            ) : srcVideo === "4" ? (
              <Video
                style={{
                  width: 500,
                  height: 500,
                }}
                ref={video}
                source={require("../assets/WhatsApp Video 2024-04-13 at 9.22.58 PM.mp4")}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            ) : null}
          </View>
        </View>
      </Modal>
      <View>
        <Image
          style={{ width: 400, height: 500, borderRadius: 10 }}
          source={require("../assets/WhatsApp Image 2024-04-14 at 5.24.49 PM.jpeg")}
        />
        {/* <Pressable
          onPress={() => {
            setShowModal(true);
            setVideo("1");
          }}
        >
          <Image
            style={{ width: 400, height: 500, borderRadius: 10, marginTop: 10 }}
            source={require("../assets/images/WhatsApp Image 2024-04-13 at 9.04.50 PM.jpeg")}
          />
        </Pressable> */}

        <Pressable
          onPress={() => {
            setShowModal(true);
            setVideo("2");
          }}
        >
          <Image
            style={{ width: 400, height: 400, borderRadius: 10, marginTop: 10 }}
            source={require("../assets/WhatsApp Image 2024-04-14 at 5.24.49 PM (1).jpeg")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setShowModal(true);
            setVideo("3");
          }}
        >
          <Image
            style={{ width: 400, height: 500, borderRadius: 10, marginTop: 10 }}
            source={require("../assets/images/WhatsApp Image 2024-04-13 at 9.04.51 PM (1).jpeg")}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setShowModal(true);
            setVideo("4");
          }}
        >
          <Image
            style={{ width: 400, height: 500, borderRadius: 10, marginTop: 10 }}
            source={require("../assets/WhatsApp Image 2024-04-14 at 5.24.49 PM (2).jpeg")}
          />
        </Pressable>
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
