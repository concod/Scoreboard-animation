import React from "react";

const TeamName = ({ delay, homeTeamCol, motion }) => {
  return (
    <div className="teamName" style={{ minWidth: "250px" }}>
      <motion.div
        className=" teamName__homeTeam --container"
        style={{ backgroundColor: homeTeamCol.main, color: homeTeamCol.text }}
        animate={{ width: ["0%", "100%", "100%", "0%"] }}
        transition={{
          times: [0, 0.1, 0.9, 1],

          duration: 5,
          delay: delay + 3.6,
        }}
      >
        <motion.h2
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            times: [0, 0.1, 0.9, 1],
            duration: 4.4,
            delay: delay + 3.9,
          }}
        >
          Kingston City
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default TeamName;
