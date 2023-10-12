import { StyleSheet, View, Image } from "react-native";
import Svg, { Line, Circle, Rect } from "react-native-svg";

export default function HangmanFigure({ wrongLetters }) {
  const Base = <Rect fill={"white"} width="250" height="40" x="0" y="350" />;
  const Pole = <Rect fill={"white"} width="10" height="350" x="20" y="0" />;
  const PoleArm = <Rect fill={"white"} width="250" height="10" x="5" y="15" />;
  const Rope = (
    <Line x1="200" y1="0" x2="200" y2="140" stroke="white" strokeWidth="5" />
  );
  const Head = (
    <Circle cx="200" cy="150" r="30" strokeWidth="5" fill={"#fff"} />
  );
  const Neck = (
    <Line x1="200" y1="180" x2="200" y2="220" stroke="white" strokeWidth="10" />
  );
  const Body = <Rect x="195" y="200" width="10" height="70" fill="white" />;
  const LeftArm = (
    <Line x1="100" y1="180" x2="200" y2="220" stroke="white" strokeWidth="10" />
  );
  const RightArm = (
    <Line x1="300" y1="180" x2="200" y2="220" stroke="white" strokeWidth="10" />
  );
  const LeftLeg = (
    <Line x1="200" y1="270" x2="100" y2="350" stroke="white" strokeWidth="10" />
  );

  const RightLeg = (
    <Line x1="200" y1="270" x2="300" y2="350" stroke="white" strokeWidth="10" />
  );

  return (
    <View style={styles.container}>
      <Svg
        viewBox="0 0 300 400"
        preserveAspectRatio="xMinYMin meet"
        width="140"
        height="200"
      >
        {/* {Base} */}
        {Rope}
        {Pole}
        {PoleArm}
        {wrongLetters > 0 ? Head : null}
        {wrongLetters > 1 ? Neck : null}
        {wrongLetters > 2 ? Body : null}
        {wrongLetters > 3 ? LeftArm : null}
        {wrongLetters > 4 ? RightArm : null}
        {wrongLetters > 5 ? LeftLeg : null}
        {wrongLetters > 6 ? RightLeg : null}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
