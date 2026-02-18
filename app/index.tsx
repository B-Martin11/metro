import React, { useEffect, useState } from "react";
import Acceuil from "../pages/acceuil";
import S_inscrit from "../pages/S_inscrit";

export default function App() {
  const [showInscrit, setShowInscrit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInscrit(true);
    }, 5000); // 5 secondes

    return () => clearTimeout(timer);
  }, []);

  return showInscrit ? <S_inscrit /> : <Acceuil />;
}
