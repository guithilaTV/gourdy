import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

interface ToggleGoalSwitchProps {
  value: boolean;
  onToggle: (newValue: boolean) => void;
}

export const ToggleGoalSwitch: React.FC<ToggleGoalSwitchProps> = ({
  value,
  onToggle,
}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>Count towards goal</Text>
      <Switch value={value} onValueChange={onToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
});
