import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

interface HydrationScoreProps {
  progress: number; // entre 0 et 1
  dayLabel: string; // nom du jour en toutes lettres (ex: "Vendredi")
}

export const HydrationScore: React.FC<HydrationScoreProps> = ({
  progress,
  dayLabel,
}) => {
  return (
    <View style={styles.hydrationScoreContainer}>
      <Text style={styles.hydrationTitle}>
        ✅ Score d'Hydratation Journalier
      </Text>
      <Text style={styles.hydrationScore}>
        {Math.round(progress * 100)}% atteint ({dayLabel})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hydrationScoreContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#1C2D4A",
    padding: 15,
    borderRadius: 10,
    width: screenWidth * 0.9,
  },
  hydrationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00FF85",
    marginBottom: 5,
  },
  hydrationScore: {
    fontSize: 16,
    color: "#A0B1C5",
  },
});
