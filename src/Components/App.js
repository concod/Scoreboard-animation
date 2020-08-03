import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import { motion } from "framer-motion";
import { teamColors, scoreElemColors } from "../utils/scoreboardColors";
import "./App.css";

const App = () => {
  const [visibility, setVisibility] = useState("visible");

  const animationStates = {
    visibility: visibility,
    mainDelay: 2,
  };

  return (
    <div className="App">
      <Scoreboard
        homeTeamCol={teamColors.KC}
        awayTeamCol={teamColors.GG}
        scoreElemCol={scoreElemColors}
        animation={animationStates}
      />

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 120, duration: 2, delay: 1.8 }}
      >
        <button
          className="button"
          onClick={() => {
            console.log(visibility);
            visibility === "hidden"
              ? setVisibility("visible")
              : setVisibility("hidden");
          }}
        >
          Toggle visibility
        </button>
      </motion.div>
    </div>
  );
};

export default App;
