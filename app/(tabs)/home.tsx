import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DaySelector } from "../../components/DaySelector";
import { HydrationProgress } from "../../components/HydratationProgress";
import { HydrationScore } from "../../components/HydratationScore";
import { TrophyList, Trophy } from "../../components/TrophyList";

const days = ["L", "M", "M", "J", "V", "S", "D"];
const daysFullName = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export default function HomeScreen() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(4); // Vendredi par défaut
  const [progress, setProgress] = useState(1525 / 1200); // Progression dynamique de test

  const trophies: Trophy[] = [
    {
      id: "1",
      name: "Débutant Hydraté 💧",
      description: "Buvez 1L d'eau en une journée",
    },
    {
      id: "2",
      name: "Marathonien de l'Eau 🏃‍♂️",
      description: "Buvez 2L d'eau en une journée",
    },
    {
      id: "3",
      name: "Hydro Master 🌊",
      description: "Buvez 3L d'eau en une journée",
    },
  ];

  return (
    <View style={styles.container}>
      <DaySelector
        days={days}
        selectedDayIndex={selectedDayIndex}
        onDayPress={setSelectedDayIndex}
      />

      <HydrationProgress progress={progress} />

      <HydrationScore
        progress={progress}
        dayLabel={daysFullName[selectedDayIndex]}
      />

      <TrophyList trophies={trophies} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#113A5D",
    paddingTop: 50,
  },
});
