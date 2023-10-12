import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { WordList } from "./assets/data";
import Header from "./components/Header";
import HintBox from "./components/HintBox";
import InputBox from "./components/InputBox";
import Keyboard from "./components/Keyboard";
import StatusPopup from "./components/StatusPopup";
import HangmanFigure from "./components/HangmanFigure";

export default function App() {
  const [correctLetters, setCorrectLetters] = useState("");
  const [wrongLetters, setWrongLetters] = useState("");
  const [usedRandNums, setUsedRandNums] = useState([]);
  const [randNum, setRandNum] = useState(0);
  const [status, setStatus] = useState("playing");
  const [hintClicked, setHintClicked] = useState(false);

  const answer = WordList[randNum].word.toUpperCase();
  const hint = WordList[randNum].hint.toUpperCase();

  useEffect(() => {
    const num = shuffleRandNum();
    setRandNum(num);
    setUsedRandNums([...usedRandNums, num]);
  }, []);

  const shuffleRandNum = () => {
    return Math.floor(Math.random() * WordList.length);
  };

  const storeCorrectLetter = (keyInput) => {
    if (answer.includes(keyInput) && !correctLetters.includes(keyInput)) {
      const newCorrectLetters = correctLetters + keyInput;
      setCorrectLetters(newCorrectLetters);
      isWinner(newCorrectLetters);
    } else if (!wrongLetters.includes(keyInput))
      setWrongLetters(wrongLetters + keyInput);
    if (wrongLetters.length > 5) setStatus("lost");
  };

  const isWinner = (word) => {
    let status = "winner";
    answer.split("").forEach((letter) => {
      if (!word.includes(letter)) status = "playing";
    });
    setStatus(status);
  };

  const newGame = () => {
    let num = randNum;
    if (usedRandNums.length === WordList.length) {
      alert("You've played all the words!");
      setUsedRandNums([]);
    }
    while (usedRandNums.includes(num)) {
      num = shuffleRandNum();
    }
    setRandNum(num);
    setUsedRandNums([...usedRandNums, num]);
  };

  const handlePressPopup = () => {
    if (status === "winner") newGame();
    setCorrectLetters("");
    setWrongLetters("");
    setStatus("playing");
    setHintClicked(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <HangmanFigure wrongLetters={wrongLetters.length} />
      {/* <View style={styles.letterContainer}> */}
      <HintBox
        hint={hint}
        hintClicked={hintClicked}
        setHintClicked={setHintClicked}
      />
      {/* </View> */}
      <InputBox answer={answer} correctLetters={correctLetters} />
      <Keyboard
        letters={wrongLetters + correctLetters}
        onPress={(keyInput) => storeCorrectLetter(keyInput)}
      />
      <StatusPopup status={status} onPress={handlePressPopup} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  letterContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    paddingTop: 58,
  },
});
