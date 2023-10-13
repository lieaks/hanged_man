import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { WordList } from "./assets/data";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Score from "./components/Score";
import Life from "./components/Life";
import Keyboard from "./components/Keyboard";
import StatusPopup from "./components/StatusPopup";
import HangmanFigure from "./components/HangmanFigure";

export default function App() {
  const [input, setInput] = useState("");
  const [correctLetters, setCorrectLetters] = useState("");
  const [wrongLetters, setWrongLetters] = useState("");
  const [usedRandNums, setUsedRandNums] = useState([]);
  const [randNum, setRandNum] = useState(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("playing");

  const answer = WordList[randNum].toUpperCase();

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
    setInput("");
  };

  const isWinner = (word) => {
    let status = "winner";
    answer.split("").forEach((letter) => {
      if (!word.includes(letter)) status = "playing";
    });
    setStatus(status);
    status === "winner" && setScore(score + 1);
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
  };

  return (
    <View style={styles.container}>
      <Header />
      <Life wrongLetters={wrongLetters.length} />
      <Score score={score} />
      <HangmanFigure wrongLetters={wrongLetters.length} />
      {/* <View style={styles.letterContainer}> */}
      {/* </View> */}
      <InputBox
        answer={answer}
        correctLetters={correctLetters}
        input={input}
        storeLetters={storeCorrectLetter}
      />
      <Keyboard
        letters={wrongLetters + correctLetters}
        onPress={(keyInput) => setInput(keyInput)}
        input={input}
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
