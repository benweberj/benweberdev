import React from 'react'
import styled from 'styled-components'

import Div from './Div'

const Button_ = styled.button(props => ({
  margin: props.m && props.m,
  marginLeft: props.ml ? props.ml : props.mx && props.mx,
  marginRight: props.mr ? props.mr : props.mx && props.mx,
  marginTop: props.mt ? props.mt : props.my && props.my,
  marginBottom: props.mb ? props.mb : props.my && props.my,

  padding: props.p ? props.p : '5px 25px',
  paddingLeft: props.pl ? props.pl : props.px && props.px,
  paddingRight: props.pr ? props.pr : props.px && props.px,
  paddingTop: props.pt ? props.pt : props.py && props.py,
  paddingBottom: props.pb ? props.pb : props.py && props.py,
  
  width: props.w && props.w,
  height: props.h && props.h,
  display: props.block && 'block',
  
  transition: 'all .25s ease',
  cursor: 'pointer',
  position: 'relative',
  // background: props.noborder ? 'none' : props.theme.complement,
  // color: props.theme[props.inverse ? 'base' : 'complement'],
  color: props.theme.complement,
  outline: 0,
  background: props.selected ? props.theme.complement : 'none',
  border: props.noborder ? 'none' : `1px solid ${props.theme[props.inverse ? 'base' : 'complement']}`,
  fontSize: props.size && props.size,
  borderRadius: props.rad || 9999,
  fontWeight: props.theme.regular,
  opacity: props.silent && '.3',
  overflow: 'hidden',
  boxSizing: 'border-box',

  '&:hover': {
    // opacity: 1,
    // background: props.theme[props.inverse ? 'base' : 'complement'],
    // color: props.theme[props.inverse ? 'complement' : 'base'],
  },
  '& p': { transition: 'all .25s ease' },

  '&:hover': props.noborder ? {
    opacity: 1,
    '&:after': { transform: 'translateY(100%) scale(.7)' },
    '&:before': { transform: 'scaleY(1)' },
    '& p': { transform: 'translateY(5px)', opacity: .5 }
  } : {
    background: props.theme.complement,
    color: props.theme.base,
  }
}))

export default props => {
  const { intent, children } = props
  
  // TODO: for arrows, make your own then conditionally rotate (make sure to keep individual rotation when adding translateY)
  // const src = (i => {
  //   switch (i) {
  //     case 'up': return ''
  //     case 'down': return ''
  //     case 'left': return ''
  //     case 'right': return ''
  //     default: return null
  //   }
  // })(intent)

  // src={intent && require(`../img/intents/${intent}.png`)}
  return (
    <Button_ {...props}><p>{children}</p></Button_>
  )
}