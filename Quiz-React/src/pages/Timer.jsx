import React, { useEffect, useState } from "react";

function Timer({ initialSeconds = 20, onTimeUp, resetKey }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(interval);
          onTimeUp && onTimeUp();
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialSeconds, resetKey, onTimeUp]);

  return <div style={{ marginTop: "10px" }}>Time Left: {seconds}s</div>;
}

export default Timer;
