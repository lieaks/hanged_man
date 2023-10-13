import { View, Pressable, StyleSheet, Text } from "react-native";

export default function LetterButton({ index, letterLabel, onPress, input }) {
  return (
    <Pressable
      key={index}
      style={styles.button}
      onPress={() => onPress(letterLabel)}
      // onPress={() => console.log(letterLabel)}
    >
      <Text
        style={input === letterLabel ? styles.btnTextActive : styles.btnText}
      >
        {letterLabel}
      </Text>
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
  btnText: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  btnTextActive: {
    fontSize: 24,
    fontWeight: "800",
    color: "red",
  },
});
