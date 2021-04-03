// Matrix raining code icon animation

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Div } from '../components/index'

const Container = styled.div`
displat: flex;
overflow: hidden;
position: relative;

& path {
  fill: #5b9;
}
`

let glitchInterval

const Katakana = props => {
  const { on, w=200, h=200 } = props
  const [i, setGlyph] = useState(0) // index of current glyph
  const [curStyles, setCurStyles] = useState({})
  const [nextStyles, setNextStyles] = useState({})
  const glitchRate = 1 // seconds
  const transitionSpeed = glitchRate / 3 // seconds

  const glyphs = [
    <svg width={w} height={h} viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4583 2.42821L16.4583 11.4282L20.8291 9L15.8291 0L11.4583 2.42821ZM6 14.5003L0 4.50035L4.28746 1.92787L10.2875 11.9279L6 14.5003ZM8.47727 29.3046C25.9286 24.4776 30.846 9.70782 31.1463 3.10059L36.1412 3.32763C35.7748 11.3871 29.9589 28.5506 9.8102 34.1236L8.47727 29.3046Z" fill="white"/>
    </svg>,
    <svg width={w} height={h} viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 5H26.9645L15.6522 16.3123L9.7965 10.2614L6.20349 13.7386L21.2035 29.2386L24.7965 25.7614L19.1297 19.9058L34.7678 4.26777L39.0355 0H33H0.5V5Z" fill="white"/>
    </svg>,
    <svg width={w} height={h} viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5H27.5V0H5V5ZM0 15H26.0692C24.6188 20.5857 19.303 29.1375 5.16959 31.0219L5.83041 35.9781C25.1899 33.3968 31.1062 19.6579 31.4962 12.6387L31.6427 10H29H0V15Z" fill="white"/>
    </svg>,
    <svg width={w} height={h} viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9653 13.5H3.50001V8.5H13V0H18V8.5H27.5H30V11V28.5V29.0902L29.7361 29.618C28.769 31.5522 25.6939 35 20.5 35V30C22.8645 30 24.3666 28.6613 25 27.8016V13.5H17.9736C17.8206 16.4891 16.9818 20.6143 14.9145 24.5602C12.5788 29.0183 8.61764 33.3382 2.26503 35.3801L0.734985 30.6199C5.58238 29.0618 8.62118 25.7983 10.4855 22.2398C12.1246 19.1113 12.8114 15.8253 12.9653 13.5Z" fill="white"/>
    </svg>
  ]
  
  const glitch = _ => {
    clearInterval(glitchInterval)
    glitchInterval = setInterval(_ => {
      setGlyph(index => (index+1) % glyphs.length)
    }, 1000*glitchRate)
  }

  useEffect(_ => {
    on ? glitch() : clearInterval(glitchInterval)
  }, [on])

  useEffect(_ => {
    // move glyphs down, then remove traansition so they can teleport back into place
    setCurStyles({ transform: 'none', transition: 'none' })
      setTimeout(_ => {
        setCurStyles({ transform: 'translateY(100%)' })
      }, 1000*transitionSpeed)
      
    setNextStyles({ transform: 'none', transition: 'none' })
      setTimeout(_ => {
        setNextStyles({ transform: 'translateY(100%)' })
      }, 1000*transitionSpeed)
  }, [i])

  const cur = glyphs[i]
  const next = glyphs[(i+1) % glyphs.length]

  return (
    <Container>
      <Div style={{ ...curStyles }} o={!on && .1} w={w} h={h}>{cur}</Div>
      <Div style={{ ...nextStyles, position: 'absolute', top: '-100%', left: 0 }} o={!on && .1} w={w} h={h}>{next}</Div>
    </Container>
  )
}

export default Katakana