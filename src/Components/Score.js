import React from "react";

const Score = ({ delay, scoreElemCol, motion }) => {
  return (
    <motion.div
      className="score --container "
      style={{ backgroundColor: scoreElemCol.bgCol }}
      animate={{ scale: [0.7, 1], opacity: [0, 1] }}
      transition={{
        duration: 0.2,
        delay: delay,
      }}
    >
      <motion.div
        style={{ padding: "0px 20px", color: scoreElemCol.textCol }}
        animate={{ opacity: [0, 0.5, 1] }}
        transition={{
          duration: 0.1,
          delay: delay + 0.1,
        }}
      >
        <motion.span
          animate={{ fontSize: ["24px", "32px", "24x"] }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: delay + 0.05,
          }}
        >
          0-4
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Score;
