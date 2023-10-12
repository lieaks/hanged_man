import { StyleSheet, Pressable, Text, View } from "react-native";
import { useState } from "react";

export default function HintBox({ hint, hintClicked, setHintClicked }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setHintClicked(true)}>
        <Text style={styles.text}>
          {hintClicked ? hint : "Do you need a hint?"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  text: {},
});
