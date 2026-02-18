import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

type Screen = "ACCEUIL" | "INSCRIT" | "CONNECTER";

type Props = {
  setScreen: (screen: Screen) => void;
};

export default function Sinscrit({ setScreen }: Props) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const passwordsMatch = password === confirm;

  const isFormValid =
    phone.length >= 8 &&
    email.includes("@") &&
    password.length >= 6 &&
    passwordsMatch;

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>S’inscrire</Text>
        <Text style={styles.subtitle}>
          Entrer vos informations personnelles
        </Text>

        {/* Téléphone */}
        <View style={styles.row}>
          <View style={[styles.inputBox, styles.countryBox]}>
            <Text>🇨🇮 +225</Text>
          </View>
          <View style={[styles.inputBox, { flex: 1 }]}>
            <TextInput
              style={styles.input}
              placeholder="Numéro de téléphone"
              value={phone}
              onChangeText={setPhone}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Adresse mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Mot de passe */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Confirmation */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Confirmer le mot de passe"
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
          />
        </View>

        {!passwordsMatch && confirm.length > 0 && (
          <Text style={styles.error}>
            Les mots de passe ne correspondent pas
          </Text>
        )}

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isFormValid ? "#000" : "#CCC" },
          ]}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>S’inscrire</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Vous avez déjà un compte ?</Text>
        <TouchableOpacity onPress={() => setScreen("CONNECTER")}>
          <Text style={styles.link}> Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    padding: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "right",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#888",
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    marginBottom: 16,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 16,
  },

  countryBox: {
    marginRight: 10,
    paddingHorizontal: 12,
  },

  input: {
    flex: 1,
  },

  button: {
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },

  link: {
    color: "#007BFF",
    fontWeight: "500",
  },

  error: {
    color: "red",
    marginBottom: 10,
  },
});
