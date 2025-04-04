import { Text } from "react-native";

export const Title = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>
    {children}
  </Text>
);
