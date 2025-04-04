import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SaveButtonProps {
  onPress: () => void;
  title?: string;
}

export const SaveButton: React.FC<SaveButtonProps> = ({
  onPress,
  title = "Save",
}) => {
  return (
    <TouchableOpacity style={styles.saveButton} onPress={onPress}>
      <Text style={styles.saveText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#4db8ff",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  saveText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
