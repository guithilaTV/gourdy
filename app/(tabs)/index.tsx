import { useAuth } from "../../hooks/useAuth";
import { Redirect } from "expo-router";

export default function Index() {
  const { user, loading } = useAuth();

  // ⏳ On attend que Firebase vérifie la session
  if (loading) return null;

  // 🔐 Si pas connecté → redirection vers /login
  if (!user) return <Redirect href="/login" />;

  // ✅ Si connecté → on va dans les tabs (ex: /home)
  return <Redirect href="/(tabs)/home" />;
}
