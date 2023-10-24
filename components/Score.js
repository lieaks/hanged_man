import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Score({
  score,
  maxScore,
  moveCounter,
  save,
  setScore,
  setMaxScore,
  setMoveCounter,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            save("maxScore", "0");
            setMaxScore(0);
          }}
        >
          <Text style={styles.text}>Max</Text>
          <Text style={styles.text}>{maxScore}</Text>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            save("score", "0");
            setScore(0);
          }}
        >
          <Text style={styles.text}>Score</Text>
          <Text style={styles.text}>{score}</Text>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            save("moveCounter", "0");
            setMoveCounter(0);
          }}
        >
          <Text style={styles.text}>Moves</Text>
          <Text style={styles.text}>{moveCounter}</Text>
        </Pressable>
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
  btn: {
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
});
