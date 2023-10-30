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
  const reset = () => {
    save("maxScore", "0");
    setMaxScore(0);
    save("score", "0");
    setScore(0);
    save("moveCounter", "0");
    setMoveCounter(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.reset}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            reset();
          }}
        >
          <Text style={styles.text}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Pressable style={styles.btn}>
          <Text style={styles.text}>Max</Text>
          <Text style={styles.text}>{maxScore}</Text>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Pressable style={styles.btn}>
          <Text style={styles.text}>Score</Text>
          <Text style={styles.text}>{score}</Text>
        </Pressable>
      </View>
      <View style={styles.counter}>
        <Pressable style={styles.btn}>
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
  reset: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "60%",
    height: "16%",
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
