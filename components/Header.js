import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>HANGMAN</Text>
      <Text style={styles.text}>Guess or die</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
});
