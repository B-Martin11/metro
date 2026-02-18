import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Connexion = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isFormValid = phone.length > 0 && email.length > 0;

  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Se Connecter</Text>
      <Text style={styles.subtitle}>
        Enter votre numéro de téléphone{"\n"}et votre adresse mail
      </Text>

      {/* Téléphone */}
      <View style={styles.inputRow}>
        <View style={styles.countryCode}>
          <Text style={styles.flag}>🇨🇮</Text>
          <Text style={styles.code}>+225</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={18} color="#999" />
          <TextInput
            placeholder="Numéro de téléphone"
            placeholderTextColor="#B0B0B0"
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      {/* Email */}
      <View style={styles.inputContainerFull}>
        <Ionicons name="mail-outline" size={18} color="#999" />
        <TextInput
          placeholder="Adresse mail"
          placeholderTextColor="#B0B0B0"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Bouton Connexion */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isFormValid ? "#1E6CFF" : "#CFCFCF" },
        ]}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Connexion;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 90,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#8E8E8E",
    fontSize: 14,
    marginBottom: 40,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 14,
    height: 52,
    marginRight: 10,
  },

  flag: {
    fontSize: 18,
    marginRight: 6,
  },

  code: {
    fontSize: 14,
    color: "#333",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 52,
  },

  inputContainerFull: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 30,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#000",
  },

  button: {
    height: 54,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
