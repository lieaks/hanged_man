import { View, Pressable, StyleSheet, Text } from "react-native";

export default function LetterButton({ index, letterLabel, onPress }) {
  return (
    <Pressable
      key={index}
      style={styles.button}
      onPress={() => onPress(letterLabel)}
      // onPress={() => console.log(letterLabel)}
    >
      <Text style={styles.buttonText}>{letterLabel}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "9%", // Adjust as needed for spacing
    aspectRatio: 0.7, // Maintain square aspect ratio
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#000",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});
