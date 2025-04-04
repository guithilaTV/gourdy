import React, { useState, useEffect } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { signInWithEmail } from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "expo-router";

// UI Components
import { ScreenWrapper } from "../components/ScreenWapper";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { Title } from "../components/Title";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const router = useRouter();

  // ✅ Redirection si déjà connecté
  useEffect(() => {
    if (user) {
      router.replace("/(tabs)/home");
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithEmail(email, password);
      Alert.alert("✅ Connexion réussie !");
    } catch (error: any) {
      Alert.alert("❌ Erreur de connexion", error.message);
    }
  };

  return (
    <ScreenWrapper>
      <Title>Connexion</Title>
      <Input
        placeholder="Adresse email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="SE CONNECTER" onPress={handleLogin} />

      {/* 🔁 Lien vers la page d'inscription */}
      <TouchableOpacity
        onPress={() => router.push("/register")}
        style={{ marginTop: 25 }}
      >
        <Text style={{ textAlign: "center", color: "#007AFF" }}>
          Pas encore de compte ?{" "}
          <Text style={{ fontWeight: "bold" }}>S'inscrire</Text>
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
