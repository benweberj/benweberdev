import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { Lightning, Particles } from './AnimatedSVGs'
import Katakana from './Katakana'
import { Text, Div } from '../components/index'

const Sketches = props => {
  const [cur, setSketch] = useState({ name: 'Particle Mesh' })
  const iconDim = 200

  const sketchData = [
    { id: 'pm', name: 'Particle Mesh', icon: <Particles w={iconDim} h={iconDim} on={cur.id=='pm'} />, settings: {} },
    { id: 'lt', name: 'Lightning', icon: <Lightning w={iconDim} h={iconDim} on={cur.id=='lt'} />, settings: {} },
    { id: 'kt', name: 'Katakana', icon: <Katakana w={iconDim} h={iconDim} on={cur.id=='kt'} />, settings: {} },
  ]


  return (
    <div style={{ display: 'flex' }}>
    {sketchData.map(sketch => {
      const on = sketch.name === cur.name
      return (
        <Div col center onClick={_ => setSketch(sketch)} style={{ margin: 30, border: '1px solid #5b93' }}>
          {sketch.icon}
          <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>{sketch.name}</h3>
        </Div>
      )
    })}
    </div>
  )
}

export default Sketches
