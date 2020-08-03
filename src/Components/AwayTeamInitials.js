import React from "react";

const AwayTeamInitials = ({ delay, motion, awayTeamCol }) => {
  return (
    <div
      className="awayTeamInitials --container"
      style={{ minWidth: "100px", justifyContent: "flex-start" }}
    >
      <motion.div
        className="--container"
        style={{
          backgroundColor: awayTeamCol.light,
          justifyContent: "flex-end",
        }}
        animate={{ width: ["0%", "100%"] }}
        transition={{
          ease: [0.5, 0.57, 0.93, 0.97],
          duration: 0.5,
          delay: delay + 0.17,
        }}
      >
        <div
          className="--container"
          style={{
            backgroundColor: awayTeamCol.main,
            color: awayTeamCol.text,
            width: "90%",
          }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: [0.67, 0.77, 0.13, 0.27],

              delay: delay + 0.5,
            }}
          >
            GG
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default AwayTeamInitials;
