import React from "react";
import { StyleSheet, View } from "react-native";
import MetroLogo from "../components/acceuil/metro_logo";

const Acceuil = () => {
  return (
    <View style={styles.container}>
      <MetroLogo />
    </View>
  );
};

export default Acceuil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
