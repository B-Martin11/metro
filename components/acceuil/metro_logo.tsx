import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MetroLogo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.m}>m</Text>
      <Text style={styles.etro}>etro</Text>
    </View>
  );
};

export default MetroLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  m: {
    color: "#1E5BFF", // bleu du "m"
    fontSize: 48,
    fontWeight: "700",
    fontStyle: "italic",
  },
  etro: {
    color: "#000",
    fontSize: 48,
    fontWeight: "700",
    marginLeft: -2, // rapproche un peu le texte
  },
});
