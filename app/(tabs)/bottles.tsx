import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AmountSelector } from "../../components/bottles/AmountSelector";
import { DrinkTypeSelector } from "../../components/bottles/DrinkTypeSelector";
import { ToggleGoalSwitch } from "../../components/bottles/ToggleGoalSwitch";
import { SaveButton } from "../../components/bottles/SaveButton";

export default function BottlesScreen() {
  const [selectedAmount, setSelectedAmount] = useState(355);
  const [drinkType, setDrinkType] = useState("water");
  const [countTowardsGoal, setCountTowardsGoal] = useState(true);

  const amounts = [240, 355, 500];
  const drinkOptions = [
    { key: "water", label: "Water" },
    { key: "sparkling", label: "Sparkling Water" },
    { key: "decaf", label: "Decaf Coffee" },
  ];

  const handleSave = () => {
    // TODO: Add save logic (e.g., send to Firebase)
    console.log({ selectedAmount, drinkType, countTowardsGoal });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add Drink</Text>
      <Text style={styles.subHeader}>3 Apr 2025 - 14:37</Text>

      <ToggleGoalSwitch
        value={countTowardsGoal}
        onToggle={setCountTowardsGoal}
      />

      <Text style={styles.volume}>{selectedAmount} ml</Text>

      <AmountSelector
        amounts={amounts}
        selectedAmount={selectedAmount}
        onSelect={setSelectedAmount}
      />

      <DrinkTypeSelector
        options={drinkOptions}
        selectedKey={drinkType}
        onSelect={setDrinkType}
      />

      <SaveButton onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#0a3049",
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeader: {
    fontSize: 16,
    color: "#ccc",
    marginVertical: 10,
  },
  volume: {
    fontSize: 48,
    color: "#4db8ff",
    marginVertical: 30,
  },
});
