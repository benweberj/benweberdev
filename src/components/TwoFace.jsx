import React, { useState } from 'react'
import styled from 'styled-components'
import Img from './Img'
import Text from './Text'

const Real = styled.img(props => ({
  cursor: 'pointer',
  position: 'absolute'
}))

const Vector = styled.img(props => ({
  cursor: 'pointer',
  background: props.theme.primary,
  position: 'relative',
  top: 0,
  left: 0,
  transition: 'all .5s ease !important',
  '&:hover': {
    background: props.theme.complement,
  }
}))

export default function TwoFace (props) {
  const { w=250, h=250 } = props
  const [yep, setYep] = useState(false) // yep
  const [isReal, setIsReal] = useState(false)
  const [realStyles, setRealStyles] = useState({})
  const [vecStyles, setVecStyles] = useState({})

  const picStyles = {
    width: w,
    height: h,
    borderRadius: '50%',
    display: 'block',
    transition: 'transform .5s ease, opacity .5s ease',
  }

  function toggleReal() {
    setIsReal(!isReal)
    
    console.log(`changing from ${isReal ? 'vector' : 'real'} to ${isReal ? 'real' : 'vector'}`)

    if (isReal) {
      setVecStyles({
        opacity: 0,
        transform: 'scale(1.2)'
      })
      setRealStyles({
        opacity: 1
      })

      setTimeout(_ => {
        setVecStyles({
          zIndex: -99,
          transform: 'scale(1)'
        })
      })
    } else {
      setVecStyles({
        opacity: 1,
        zIndex: 99,
      })
      setRealStyles({
        transform: 'scale(1.2)',
        opacity: 0
      })
    
      setTimeout(_ => setRealStyles({ transform: 'scale(1)' }), 500)
    }
  }
// tog vector

  return (
    <div style={props.style} onMouseOver={_ => setYep(true)} onMouseOut={_ => setYep(false)}>
      <Real id='real' style={{ ...picStyles, ...realStyles }} src={require('../img/real.png')} onClick={toggleReal} />
      <div id='vector' style={{ ...picStyles, background: '#fff1', position: 'relative', ...vecStyles }} onClick={toggleReal}>
        {/* <Vector id='vector' style={picStyles} src={require('../img/vec-t.png')} onClick={showReal}/> */}
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(20px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/dark-hood.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(40px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/neck.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(80px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/t-shirt.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(100px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/sweatshirt.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(120px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/straps.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(150px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/head.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(160px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/features.png')} onClick={toggleReal} />
        <img className='inner-element' style={{ transition: 'all 1s ease', transform: yep && 'translateZ(170px)', position: 'absolute', width: '100%', height: '100%' }} id='vector' src={require('../img/hair.png')} onClick={toggleReal} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text upper light o={!yep && '0'} style={{ pointerEvents: 'none', userSelect: 'none' }} elevation={yep ? 200 : -100} size={w/8} onClick={_ => alert('what')}>Give Me Job</Text>
      </div>
    </div>
  )
}