import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

const screenWidth = Dimensions.get("window").width;
const circleSize = screenWidth * 0.6;
const radius = (circleSize - 20) / 2;
const circumference = 2 * Math.PI * radius;

interface HydrationProgressProps {
  progress: number; // entre 0 et 1
  goal?: number; // valeur max à afficher
}

export const HydrationProgress: React.FC<HydrationProgressProps> = ({
  progress,
  goal = 1200,
}) => {
  return (
    <View style={styles.progressContainer}>
      <Svg height={circleSize} width={circleSize}>
        <Circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke="#1C2D4A"
          strokeWidth={10}
          fill="none"
        />
        <Circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke="#00FF85"
          strokeWidth={10}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress * circumference}
          strokeLinecap="round"
          rotation="-90"
          originX={circleSize / 2}
          originY={circleSize / 2}
        />
      </Svg>
      <Text style={styles.progressText}>{Math.round(progress * goal)} ml</Text>
      <Text style={styles.goalText}>Goal {goal}ml</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  progressText: {
    position: "absolute",
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  goalText: {
    position: "absolute",
    top: 80,
    fontSize: 16,
    color: "#A0B1C5",
  },
});
