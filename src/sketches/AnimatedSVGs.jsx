import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// SVGs animations that are simple dash offsets

const Circle = styled.circle(props => ({
  transition: 'all .5s ease',
  transitionDelay: `${Math.random()}s`,
  stroke: props.on ? '#5b9' : '#fff',
  strokeWidth: props.on ? 7 : 0,

  strokeDasharray: props.len,
  strokeDashoffset: props.on ? 0 : props.len,
}))

const Path = styled.path(props => ({
  transition: 'all .5s ease',
  transitionDelay: `${Math.random()}s`,
  stroke: props.on ? '#5b9' : '#fff',
  strokeWidth: props.on ? 3 : 0, 
  opacity: .5,

  strokeDasharray: props.len,
  strokeDashoffset: props.on ? 0 : props.len,
}))


// Path and Circle state manager
const Shape = props => { 
  const [len, setLength] = useState(1)
  const { path, circle, on } = props
  const shapeRef = useRef()

  useEffect(_ => {
    setLength(shapeRef.current.getTotalLength())
  }, [])

  if (path) return <Path on={on} len={len} ref={shapeRef} {...props} />
  if (circle) return <Circle on={on} len={len} ref={shapeRef} {...props} />
}


// Particle Mesh animation
const Particles = props => {
  const { on, w=200, h=200 } = props
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


// Lightning icon
const Lightning = props => {
  const { on, w=200, h=200 } = props 
  return (
    <svg width={h} height={w} viewBox="0 0 427 321" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Shape on={on} path d="M276 0.5L275.5 23.5L253 51.5L257 66L223 77L221 91.5L192.5 106L181 115L194 119.5L188 135" stroke="black"/>
      <Shape on={on} path d="M276 0.5L275.5 23.5L253 51.5L257 66L223 77L221 91.5L192.5 106L175.5 97.5L168 108L149.5 103L126 123L128.5 138L114.5 144L101 171L89.5 179.5L79.5 177.5L75 194.5L94.5 211.5L100 222L84.5 232L81.5 241.5L71 245" stroke="black"/>
      <Shape on={on} path d="M276 0.5L275.5 23.5L253 51.5L257 66L223 77L221 91.5L192.5 106L175.5 97.5L168 108L149.5 103L126 123L128.5 138L114.5 144L101 171L89.5 179.5L79.5 177.5L75 194.5L94.5 211.5L100 222L103 231L95.5 243L100 250L95.5 252L99 271L111.5 280" stroke="black"/>
      <Shape on={on} path d="M276 0.5L275.5 23.5L253 51.5L257 66L223 77L221 91.5L192.5 106L175.5 97.5L168 108L149.5 103L134 88L110.5 79L98.5 85L73 77L66 95.5" stroke="black"/>
      <Shape on={on} path d="M276 0.5L275.5 23.5L253 51.5L257 66L223 77L221 91.5L192.5 106L175.5 97.5L168 108L149.5 103L134 88L102 99L92.5 119H75.5L72 125.5L38 103L0.5 115" stroke="black"/>
      <Shape on={on} path d="M276 0.5L275.5 23.5L253 51.5L257 66L223 77L221 91.5L192.5 106L175.5 97.5L168 108L149.5 103L134 88L102 99L92.5 119H75.5L72 125.5L55 114.25L48.5 128.5L26 135L19.5 125.5L11.5 135" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L270 82L273.5 102.5L302 128L313 131L319.5 140L329 145L324.5 157L344 177H356L357 185L389.5 195L398.5 211L397 220.5L405 231" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L270 82L273.5 102.5L302 128L313 131L319.5 140L329 145L324.5 157L344 177H356L357 185L389.5 195L398.5 211H408L413 203.5L426.5 202" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L270 82L273.5 102.5L302 128L305 144.5L314 151.5L311 170.5L302 174.5" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L280 64L284.5 73.5H296L319 97L317.5 101H327.5L328.5 110.5" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L262 96.5L268.5 124L234 147.5L230 177.5L218.5 191L234 201.5L243.5 240.5L268.5 255L262 320" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L262 96.5L268.5 124L234 147.5L230 177.5L218.5 191L234 201.5L257.5 232.5L282 243.5L294.5 265L289.5 279.5L298 290" stroke="black"/>
      <Shape on={on} path d="M276 0.5L294.5 38L280 64L284.5 73.5H296L319 97L313.5 110L320 123" stroke="black"/>
    </svg>
  )
}


export {
  Lightning,
  Particles
}