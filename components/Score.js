import { View, Text, StyleSheet } from "react-native";

export default function Score({ score, maxScore, moveCounter }) {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.text}>Max</Text>
        <Text style={styles.text}>{maxScore}</Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.text}>Score</Text>
        <Text style={styles.text}>{score}</Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.text}>Moves</Text>
        <Text style={styles.text}>{moveCounter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  counter: {
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    width: "60%",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
});
