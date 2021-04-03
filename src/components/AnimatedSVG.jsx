import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// const Path = styled.path(props => ({
//   '& *': {
//     transition: 'all 1s ease',
//     stroke: "#fff",
//     strokeWidth: props.on ? 10 : 1,
//     strokeDasharray: 1000,
//     strokeDashoffset: props.on ? 0 : '1000px',
//   }
// }))


const Circle = styled.circle(props => ({
  transition: 'all .5s ease',
  transitionDelay: `${Math.random()}s`,
  stroke: props.on ? '#5b9' : '#fff',
  strokeWidth: props.on ? 7 : 1,

  strokeDasharray: props.len,
  strokeDashoffset: props.on ? 0 : props.len,
}))

const Path = styled.path(props => ({
  transition: 'all .5s ease',
  transitionDelay: `${Math.random()}s`,
  stroke: props.on ? '#5b9' : '#fff',
  strokeWidth: props.on ? 3 : 1, 
  opacity: .5,

  strokeDasharray: props.len,
  strokeDashoffset: props.on ? 0 : props.len,
}))

const Shape = props => {
  const [length, setLength] = useState(1) // the length of the shape
  const shapeRef = useRef()
  const { circle, path, on } = props

  useEffect(_ => {
    setLength(shapeRef.current.getTotalLength())
  }, [on])
  
  if (circle) return <Circle len={length} ref={shapeRef} {...props} />
  if (path) return <Path len={length} ref={shapeRef} {...props} />
}

const AnimatedSVG = props => {
  const { src, group, on, w=100, h=100 } = props

  return (
      <svg width={w} height={h} viewBox="0 0 261 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Shape on={on} circle cx="68" cy="121" r="22.5" stroke="black" strokeWidth="7"/>
        <Shape on={on} circle cx="221" cy="40" r="36.5" stroke="black" strokeWidth="7"/>
        <Shape on={on} circle cx="188.5" cy="234.5" r="50" stroke="black" strokeWidth="7"/>
        <Shape on={on} circle cx="41.5" cy="222.5" r="38" stroke="black" strokeWidth="7"/>
        <Shape on={on} path d="M82.5 228.5L135 234" stroke="black" strokeWidth="3"/>
        <Shape on={on} path d="M88 138L154 193" stroke="black" strokeWidth="3"/>
        <Shape on={on} path d="M74 198.5L192.5 67.5" stroke="black" strokeWidth="3"/>
        <Shape on={on} path d="M197 182L214 79" stroke="black" strokeWidth="3"/>
        <Shape on={on} path d="M48 181.5L59.5 145.5" stroke="black" strokeWidth="3"/>
      </svg>
  )
}

export default AnimatedSVG