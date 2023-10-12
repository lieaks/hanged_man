import { StyleSheet, Text, View } from "react-native";

export default function InputBox({ answer, correctLetters }) {
  return (
    <View style={styles.inputContainer}>
      {answer.split("").map((letter, index) => (
        <Text style={styles.text} key={index}>
          {correctLetters.includes(letter) ? letter : "_"}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 3,
  },
});
