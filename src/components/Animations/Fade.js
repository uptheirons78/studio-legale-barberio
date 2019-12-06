import React from "react";
import { useSpring, animated } from "react-spring";

const Fade = ({ children }) => {
  /**
   * React Spring Animations
   */
  const fade = useSpring({
    config: { duration: 2500 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return <animated.div style={fade}>{children}</animated.div>;
};

export default Fade;
