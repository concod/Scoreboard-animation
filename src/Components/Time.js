import React from "react";

const Time = ({ delay, scoreElemCol, motion }) => {
  return (
    <>
      <motion.div
        className="time --container "
        style={{
          backgroundColor: scoreElemCol.bgCol,
          color: scoreElemCol.textCol,
        }}
        animate={{
          width: ["0px", "100px", "100px", "0px", "0px", "100px"],
          opacity: [0, 1, 1, 0, 0, 1],
        }}
        transition={{
          times: [0, 0.06, 0.25, 0.3, 0.94, 0.97],
          duration: 8.5,
          delay: delay + 0.8,
        }}
      >
        <motion.h2
          animate={{ opacity: [0, 1, 1, 0, 0, 1] }}
          transition={{
            times: [0, 0.04, 0.22, 0.25, 0.94, 0.99],
            duration: 8,
            delay: delay + 1.1,
          }}
        >
          90:00
        </motion.h2>
      </motion.div>
    </>
  );
};

export default Time;
