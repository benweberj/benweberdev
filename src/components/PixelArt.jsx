import React, { useState, useEffect } from 'react'
import Div from './Div'
import Button from './Button'

let mouseDown = false
document.body.onmousedown = _ => mouseDown = true
document.body.onmouseup = _ => mouseDown = false

const Pixel = props => {
  const { dim=100, erasing, theme, clear, color } = props

  const [hovered, setHovered] = useState(false)
  const [on, setOn] = useState(false)
  const [myColor, setMyColor] = useState('#0ff')

  useEffect(_ => {
    setOn(false)
  }, [clear])

  useEffect(_ => {
    if (!on) {
      setMyColor(color)
    }
  }, [color])

  return (
    <Div minW={dim} minH={dim} w={dim} h={dim}
      style={{ border: `1px solid ${theme.complement}11`, background: on && myColor, userSelect: 'none', cursor: 'cell' }}
      // onClick={_ => setOn(!on)}z
      onMouseDown={_ => { setOn(!on); setMyColor(color) }}
      onMouseEnter={_ => { setHovered(true); mouseDown && setOn(!on) }}
      onMouseLeave={_ => setHovered(false)}
    />
  )
}

const PixelArt = props => {
  const [color, setColor] = useState('#FFF')
  const [xStatus, setX] = useState(0)
  const [yStatus, setY] = useState(0)
  const [erasing, setErasing] = useState(false)
  const [clear, setClear] = useState(false) // boolean for children to 
  const { theme, w=500, h=500, x=50, y=50 } = props
  
  const xCount = x + xStatus
  const yCount = y + yStatus

  const size = w / (x + xStatus)

  const colors = ['#FFF', '#3A50BD', '#DE9DEB', '#E3C73D', '#40B828', '#FC5C47']


  return (
    <Div glass style={{ position: 'relative' }} w={w} h={h}>
      <Div w='100%' split flex style={{ position: 'absolute', top: 0, right: 0, transform: 'translateY(calc(-100% - 10px))' }}>
          <Div flex>{colors.map(c => (
            <Div onClick={_ => setColor(c)} w={15} h={15} circle bg={c} mx={10} scale={c==color && 2} />
          ))}</Div>
        <Div flex>
          <Button sm onClick={_ => setX(xStatus-1)}>-</Button>
          <Button mx={10} bold onClick={_ => setClear(!clear)}>CLEAR</Button>
          <Button sm onClick={_ => setX(xStatus+1)}>+</Button>
        </Div>
      </Div>
      {[...Array(yCount)].map(y => (
        <Div full style={{ border: '1px solid pink' }} flex>{[...Array(xCount)].map(x => <Pixel clear={clear} erasing={erasing} dim={size} theme={theme} color={color} />)}</Div>
      ))}
    </Div>
  )
}

export default PixelArt