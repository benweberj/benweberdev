import React, { useState, useEffect } from 'react'
import Parallax from './Parallax'
import Div from './Div'
import Text from './Text'
import SocialMedia from './SocialMedia'
import TwoFace from './TwoFace'
import Img from './Img'


function BusinessCard(props) {
  const [trackScreen, setTrackScreen] = useState(true)
  const { theme } = props
  const corner = 20
  
  return (
    // <div style={{ border: '1px dashed gray', display: 'inline-block', margin: 50 }}>
    <Parallax
      // trackOnWindow={true}
      // tiltReverse={true}
      perspective={500}
      // tiltMaxAngleX={50}
      // tiltMaxAngleY={50}
      // glareEnable={true} glareMaxOpacity={0.5} glareColor="#ffffff" glarePosition="bottom"
      // scale={1.05}
      transitionSpeed={2000}
      // tiltMaxAngleY={7}
      // tiltMaxAngleX={7}
      borderRadius={20}
    >
      
      <Div pointer w={'65vw'} h={'35vw'} center rad={corner} bg={`${theme.complement}11`}>
        <Img
          style={{ position: 'absolute', top: 5, right: 5 }}
          src='https://cdn4.iconfinder.com/data/icons/internet-seccurity-line/32/Internet_Security_disable_hidden_eye_view_hide-512.png'
          w={20}
          inverse
          onClick={_ => setTrackScreen(!trackScreen)}
          disabled={!trackScreen}
        />
        <Div inline><TwoFace /></Div>
        {/* <Div pl={'5vw'} elevation={trackScreen && 10}>
          <Text bold upper type='h1'>Ben Weber {trackScreen.toString()}</Text>
          <Text light upper type='h3' accent>Web Developer</Text>
        </Div> */}
      </Div>
{/* 
      <Div col elevation={800} pointer w={'55vw'} h={'30vw'} rad={corner} center bg={`${theme.complement}11`}>
        <Div style={{ position: 'absolute', bottom: 20, left: 20 }}>
          <SocialMedia />
        </Div>
        <Text elevation={500} bold upper color='#fff' type='h1'>Benny Boi</Text>
        <Text elevation={500} light upper color='#fff' type='h3'>Semi-Pro Motherfucker</Text>
      </Div> */}

    </Parallax>
  )
}

export default BusinessCard