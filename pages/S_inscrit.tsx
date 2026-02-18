import React from "react";
import Sinscrit from "../components/inscrit/Sinscrit";

type Screen = "ACCEUIL" | "INSCRIT" | "CONNECTER";

type Props = {
  setScreen: (screen: Screen) => void;
};

export default function S_inscrit({ setScreen }: Props) {
  return <Sinscrit setScreen={setScreen} />;
}
