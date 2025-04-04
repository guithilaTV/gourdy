import React, { useState, useEffect } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { signUpWithEmail } from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "expo-router";

// UI Components
import { ScreenWrapper } from "../components/ScreenWapper";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { Title } from "../components/Title";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const router = useRouter();

  // ✅ Redirection automatique si déjà connecté
  useEffect(() => {
    if (user) {
      router.replace("/(tabs)/home");
    }
  }, [user]);

  const handleRegister = async () => {
    try {
      await signUpWithEmail(email, password);
      Alert.alert("✅ Inscription réussie !");
    } catch (error: any) {
      Alert.alert("❌ Erreur inscription", error.message);
    }
  };

  return (
    <ScreenWrapper>
      <Title>Créer un compte</Title>
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
      <Button title="S'INSCRIRE" onPress={handleRegister} />

      {/* 🔁 Lien vers la page de connexion */}
      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={{ marginTop: 25 }}
      >
        <Text style={{ textAlign: "center", color: "#007AFF" }}>
          Déjà un compte ?{" "}
          <Text style={{ fontWeight: "bold" }}>Se connecter</Text>
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
