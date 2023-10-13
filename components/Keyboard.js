import { View, StyleSheet } from "react-native";
import LetterButton from "./LetterButton";

export default function Keyboard({ letters, onPress, input }) {
  const qwertyLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <View style={styles.keyboard}>
      {qwertyLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key, index) => (
            <LetterButton
              key={index}
              letterLabel={letters.includes(key) ? "" : key}
              onPress={onPress}
              input={input}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 2,
    marginVertical: 20,
    flexDirection: "column",
    gap: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
  },
});
