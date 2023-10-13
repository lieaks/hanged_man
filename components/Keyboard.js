import { View, Pressable, StyleSheet, Text } from "react-native";
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

// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//
// const Keyboard = ({ onPress }) => {
//   const keyboardLayout = [
//     ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//     ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
//     ["Z", "X", "C", "V", "B", "N", "M"],
//   ];
//
//   return (
//     <View style={styles.keyboard}>
//       {keyboardLayout.map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((key, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.button}
//               onPress={() => onPress(key)}
//             >
//               <Text style={styles.buttonText}>{key}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   keyboard: {
//     flexDirection: "column",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   button: {
//     width: "12%", // Adjust as needed for spacing
//     aspectRatio: 1, // Maintain square aspect ratio
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#000",
//     borderWidth: 1,
//   },
//   buttonText: {
//     fontSize: 20,
//   },
// });
//
// export default Keyboard;
