import { TextInput } from "react-native";

export const Input = ({ ...props }) => (
  <TextInput
    style={{
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      marginBottom: 15,
    }}
    placeholderTextColor="#999"
    {...props}
  />
);
