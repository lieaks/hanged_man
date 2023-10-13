import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { WordList } from "./assets/data";
import * as Utils from "./components/Utils";
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
  const [status, setStatus] = useState("playing");
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [moveCounter, setMoveCounter] = useState(0);

  const answer = WordList[randNum].toUpperCase();

  useEffect(() => {
    const num = Utils.shuffleRandNum(WordList.length);
    setRandNum(num);
    setUsedRandNums([...usedRandNums, num]);
    Utils.getValueFor("score", setScore);
    Utils.getValueFor("maxScore", setMaxScore);
    Utils.getValueFor("moveCounter", setMoveCounter);
  }, []);

  const storeLetter = (keyInput) => {
    if (answer.includes(keyInput) && !correctLetters.includes(keyInput)) {
      const newCorrectLetters = correctLetters + keyInput;
      setCorrectLetters(newCorrectLetters);
      isWinner(newCorrectLetters);
    } else if (!wrongLetters.includes(keyInput))
      setWrongLetters(wrongLetters + keyInput);
    if (wrongLetters.length > 5) {
      setScore(0);
      Utils.save("score", "0");
      setStatus("lost");
    }
    setMoveCounter(moveCounter + 1);
    Utils.save("moveCounter", (moveCounter + 1).toString());
    setInput("");
  };

  const isWinner = (word) => {
    let status = "winner";
    answer.split("").forEach((letter) => {
      if (!word.includes(letter)) status = "playing";
    });
    setStatus(status);
    if (status === "winner") {
      setScore(score + 1);
      Utils.save("score", (score + 1).toString());
      if (score + 1 > maxScore) {
        setMaxScore(score + 1);
        Utils.save("maxScore", (score + 1).toString());
      }
    }
  };

  const handlePressPopup = () => {
    setStatus("playing");
    newGame();
    setCorrectLetters("");
    setWrongLetters("");
  };

  const newGame = () => {
    let num = Utils.shuffleRandNum(WordList.length);
    if (usedRandNums.length === WordList.length) {
      alert("You've played all the words!");
      setUsedRandNums([num]);
      setRandNum(num);
      return;
    }
    while (usedRandNums.includes(num)) {
      num = Utils.shuffleRandNum(WordList.length);
    }
    setRandNum(num);
    setUsedRandNums([...usedRandNums, num]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Life wrongLetters={wrongLetters.length} />
      <View style={styles.row}>
        <HangmanFigure wrongLetters={wrongLetters.length} />
        <Score score={score} maxScore={maxScore} moveCounter={moveCounter} />
      </View>
      <InputBox
        answer={answer}
        correctLetters={correctLetters}
        input={input}
        storeLetters={storeLetter}
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
