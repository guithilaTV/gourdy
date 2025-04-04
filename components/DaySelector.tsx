import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface DaySelectorProps {
  days: string[];
  selectedDayIndex: number;
  onDayPress: (index: number) => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  days,
  selectedDayIndex,
  onDayPress,
}) => {
  return (
    <View style={styles.weekContainer}>
      {days.map((day, index) => (
        <TouchableOpacity key={index} onPress={() => onDayPress(index)}>
          <View
            style={[
              styles.dayCircle,
              selectedDayIndex === index && styles.selectedDay,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                selectedDayIndex === index && styles.selectedDayText,
              ]}
            >
              {day}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    height: 70,
    backgroundColor: "#1C2D4A",
    borderRadius: 35,
    padding: 10,
    marginBottom: 20,
  },
  dayCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#304D73",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDay: {
    backgroundColor: "#00FF85",
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  selectedDayText: {
    color: "#1C2D4A",
  },
});
