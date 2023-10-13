import { View, Text, StyleSheet } from "react-native";

export default function Score({ score }) {
  return (
    <View style={styles.container}>
      <Text>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    height: "5%",
  },
  text: {},
});
