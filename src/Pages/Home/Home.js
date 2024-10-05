import React, { useState } from "react";
import styles from "./Home.module.css";
import NexusGame from "../../Game/NexusGame";

function Home() {
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <div className={styles.retroPage}>
      {startGame ? (
        <NexusGame />
      ) : (
        <div className={styles.content}>
          <h1 className={styles.heading}>Welcome to the Retro Space Game</h1>
          <p className={styles.description}>
            Experience the nostalgia of 80s arcade games!
          </p>
          <button className={styles.neonButton} onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
