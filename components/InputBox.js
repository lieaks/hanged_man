import { StyleSheet, Text, View, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function InputBox({
  answer,
  correctLetters,
  input,
  storeLetters,
}) {
  const handlePressConfirm = () => {
    if (!input) return;
    storeLetters(input);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.btnText}>{input}</Text>
      </View>
      <View style={styles.wordBoxContainer}>
        {answer.split("").map((letter, index) => (
          <Text style={styles.text} key={index}>
            {correctLetters.includes(letter) ? letter : "_"}
          </Text>
        ))}
      </View>
      <View style={input ? styles.btn : styles.btnDisable}>
        <Pressable onPress={() => handlePressConfirm()}>
          <FontAwesome name="send" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  inputContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: "auto",
    width: "12%",
    height: 55,
  },
  wordBoxContainer: {
    backgroundColor: "white",
    width: "65%",
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
  btn: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "12%",
    height: 55,
  },
  btnDisable: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "12%",
    height: 55,
    opacity: 0.5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
