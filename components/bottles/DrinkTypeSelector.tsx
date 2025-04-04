import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface DrinkOption {
  key: string;
  label: string;
}

interface DrinkTypeSelectorProps {
  options: DrinkOption[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

export const DrinkTypeSelector: React.FC<DrinkTypeSelectorProps> = ({
  options,
  selectedKey,
  onSelect,
}) => {
  return (
    <View style={styles.drinkRow}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt.key}
          style={[
            styles.drinkButton,
            selectedKey === opt.key && styles.selectedDrink,
          ]}
          onPress={() => onSelect(opt.key)}
        >
          <Text style={styles.drinkText}>{opt.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  drinkRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  drinkButton: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 20,
  },
  selectedDrink: {
    backgroundColor: "#4db8ff",
  },
  drinkText: {
    color: "#fff",
    fontSize: 16,
  },
});
