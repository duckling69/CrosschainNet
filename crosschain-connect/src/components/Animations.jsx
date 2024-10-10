import React from 'react';
import { useSpring, animated } from 'react-spring';

function Animations() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return (
    <animated.div style={props}>
      <h2>Real-Time Data Streaming Enabled</h2>
    </animated.div>
  );
}

export default Animations;