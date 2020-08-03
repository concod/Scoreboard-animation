import React from "react";
import AwayTeamInitials from "./AwayTeamInitials";
import Card from "./Card";
import HomeTeamInitials from "./HomeTeamInitials";
import { motion } from "framer-motion";
import Score from "./Score";
import TeamName from "./TeamName";
import Time from "./Time";
import "./Scoreboard.css";

const Scoreboard = ({ animation, homeTeamCol, awayTeamCol, scoreElemCol }) => {
  return (
    <>
      <motion.div
        className="scoreboard"
        style={{ visibility: animation.visibility }}
      >
        <HomeTeamInitials
          homeTeamCol={homeTeamCol}
          delay={animation.mainDelay}
          motion={motion}
        />
        <Score
          delay={animation.mainDelay}
          scoreElemCol={scoreElemCol}
          motion={motion}
        />
        <AwayTeamInitials
          awayTeamCol={awayTeamCol}
          delay={animation.mainDelay}
          motion={motion}
        />

        <Time
          delay={animation.mainDelay}
          scoreElemCol={scoreElemCol}
          motion={motion}
        />
        <TeamName
          delay={animation.mainDelay}
          homeTeamCol={homeTeamCol}
          motion={motion}
        />
        <Card
          delay={animation.mainDelay}
          scoreElemCol={scoreElemCol}
          motion={motion}
        />
      </motion.div>
    </>
  );
};

export default Scoreboard;
