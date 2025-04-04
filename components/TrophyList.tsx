import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export interface Trophy {
  id: string;
  name: string;
  description: string;
}

interface TrophyListProps {
  trophies: Trophy[];
}

export const TrophyList: React.FC<TrophyListProps> = ({ trophies }) => {
  return (
    <View style={styles.trophiesContainer}>
      <Text style={styles.trophiesTitle}>🏆 Trophées débloqués</Text>
      <FlatList
        data={trophies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.trophyItem}>
            <Text style={styles.trophyName}>{item.name}</Text>
            <Text style={styles.trophyDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trophiesContainer: {
    marginTop: 20,
    width: screenWidth * 0.9,
  },
  trophiesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00FF85",
    marginBottom: 10,
  },
  trophyItem: {
    backgroundColor: "#1C2D4A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  trophyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  trophyDescription: {
    fontSize: 14,
    color: "#A0B1C5",
    marginTop: 5,
  },
});
