import { StyleSheet, Modal, Text, View, Pressable } from "react-native";
import React from "react";

export default function StatusPopup({ status, onPress }) {
  const msg = status === "winner" ? "You win!" : "You lose!";
  const btnMsg = status === "winner" ? "Play again" : "Try again";

  return (
    <Modal
      visible={status !== "playing"}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.text}>{msg}</Text>
          <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>{btnMsg}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "gray",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
    color: "white",
  },
  btn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  btnText: {},
});
