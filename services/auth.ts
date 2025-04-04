// services/auth.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "./firebase";

// 🔐 Inscription
export const signUpWithEmail = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// 🔑 Connexion
export const signInWithEmail = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// 🚪 Déconnexion
export const signOutUser = async () => {
  return await signOut(auth);
};

// 👤 État utilisateur courant
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
