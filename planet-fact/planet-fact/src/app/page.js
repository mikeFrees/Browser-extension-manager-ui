"use client";

import { useState, useEffect } from "react";
import styles from "./styles/page.module.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Facts from "./components/Facts";
import data from "../data/data.json";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState("Earth");
  const [section, setSection] = useState("Overview");

  useEffect(() => {
    setSection("Overview");
  }, [selectedPlanet, setSection]);

  let planetData = data.find((planet) => planet.name === selectedPlanet);
  return (
    <div className={styles.page}>
      <Header
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
      />
      <main>
        <Info
          data={planetData}
          section={section}
          setSection={setSection}
        />
        <Facts data={planetData} />
      </main>
    </div>
  );
}
