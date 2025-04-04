import { View } from "react-native";

export const ScreenWrapper = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#F2F2F7",
      padding: 20,
      justifyContent: "center",
    }}
  >
    {children}
  </View>
);
