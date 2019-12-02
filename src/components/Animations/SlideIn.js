import React from "react";
import { useSpring, animated } from "react-spring";

const SlideIn = ({ children }) => {
  /**
   * React Spring Animations
   */
  const slideIn = useSpring({
    config: { duration: 1500 },
    from: { opacity: 0, marginTop: 500 },
    to: { opacity: 1, marginTop: 0 },
  });

  return <animated.div style={slideIn}>{children}</animated.div>;
};

export default SlideIn;
