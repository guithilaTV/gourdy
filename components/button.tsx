import { TouchableOpacity, Text } from "react-native";

export const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "#007AFF",
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
      {title}
    </Text>
  </TouchableOpacity>
);
