import { View, Text, StyleSheet } from "react-native";

export default function Life({ wrongLetters }) {
  const fullLife = 7 - wrongLetters;
  const getLife = (fullLife) => {
    let content = [];
    for (let i = 0; i < fullLife; i++) {
      content.push(
        <Text key={i} style={styles.text}>
          ❤️
        </Text>
      );
    }
    return content;
  };
  return <View style={styles.container}>{getLife(fullLife)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    height: "5%",
  },
  text: {},
});
