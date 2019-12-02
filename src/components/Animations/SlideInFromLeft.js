import React from "react";
import { useSpring, animated } from "react-spring";

const SlideInFromLeft = ({ children }) => {
  /**
   * React Spring Animations
   */
  const slideInFromLeft = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
  });

  return <animated.div style={slideInFromLeft}>{children}</animated.div>;
};

export default SlideInFromLeft;
