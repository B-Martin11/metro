import React from "react";
import { StyleSheet, View } from "react-native";
import Connexion from "../components/connecter/connecter";

const Se_connecter = () => {
  return (
    <View style={styles.container}>
      <Connexion />
    </View>
  );
};

export default Se_connecter;

// ✅ OBLIGATOIRE : définition de styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
