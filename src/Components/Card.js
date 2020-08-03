import React from "react";

const Card = ({ delay, scoreElemCol, motion }) => {
  return (
    <div className="card" style={{ width: "200px" }}>
      <motion.div
        className="card__main --container  "
        style={{
          backgroundColor: scoreElemCol.bgCol,
          width: "fit-content",
        }}
        animate={{ width: ["0%", "100%", "100%", "0%"] }}
        transition={{
          times: [0, 0.15, 0.85, 1],

          duration: 3.6,
          delay: delay + 4.4,
        }}
      >
        <motion.div
          className="card__text  --container"
          style={{ color: scoreElemCol.cardTextCol }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            times: [0, 0.1, 0.9, 1],
            duration: 2.6,
            delay: delay + 4.8,
          }}
        >
          Red Cards
          <span style={{ color: scoreElemCol.textCol }}>0</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
