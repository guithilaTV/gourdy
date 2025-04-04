import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { signOutUser } from "../../services/auth";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 24 }}>Bienvenue {user?.email} 👋</Text>
      <Button title="🚪 Se déconnecter" onPress={signOutUser} />
    </View>
  );
}
