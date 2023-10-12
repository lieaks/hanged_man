import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Hangman</Text>
      <Text style={styles.text}>Guess or die</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
});
