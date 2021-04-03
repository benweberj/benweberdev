import React from 'react'
import Tilt from 'react-parallax-tilt'

function Parallax(props) {
  return (
    <Tilt
      trackOnWindow={false}
      className='parallax-effect'
      borderRadius={10}
      transitionSpeed={2000}
      // tiltReverse={true}
      // perspective={300}
      // glareEnable={true} glareMaxOpacity={0.5} glareColor="#ffffff" glarePosition="bottom"
      // scale={1.05}
      // tiltMaxAngleY={7}
      // tiltMaxAngleX={7}
      {...props}
    >
      {props.children}
    </Tilt>
  )
}

export default Parallax