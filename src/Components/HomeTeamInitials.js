import React from "react";

const HomeTeamInitials = ({ delay, homeTeamCol, motion }) => {
  return (
    <div
      className="homeTeamInitials --container"
      style={{ minWidth: "100px", justifyContent: "flex-end" }}
    >
      <motion.div
        className="--container"
        style={{
          backgroundColor: homeTeamCol.light,
          justifyContent: "flex-start",
        }}
        animate={{ width: ["0%", "100%"] }}
        transition={{
          duration: 0.5,
          delay: delay + 0.17,
        }}
      >
        <div
          className="--container"
          style={{
            backgroundColor: homeTeamCol.main,
            width: "90%",
            color: homeTeamCol.text,
          }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: [0.6, 0.77, 0.13, 0.27],
              duration: 0.1,
              delay: delay + 0.5,
            }}
          >
            KC
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeTeamInitials;
