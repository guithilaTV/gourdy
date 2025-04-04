import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface AmountSelectorProps {
  amounts: number[];
  selectedAmount: number;
  onSelect: (amount: number) => void;
}

export const AmountSelector: React.FC<AmountSelectorProps> = ({
  amounts,
  selectedAmount,
  onSelect,
}) => {
  return (
    <View style={styles.amountsRow}>
      {amounts.map((amount) => (
        <TouchableOpacity
          key={amount}
          style={[
            styles.amountButton,
            selectedAmount === amount && styles.selectedAmount,
          ]}
          onPress={() => onSelect(amount)}
        >
          <Text style={styles.amountText}>{amount} ml</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  amountsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  amountButton: {
    backgroundColor: "#005f99",
    padding: 12,
    borderRadius: 20,
  },
  selectedAmount: {
    backgroundColor: "#4db8ff",
  },
  amountText: {
    color: "#fff",
    fontSize: 16,
  },
});
