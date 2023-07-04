import React from 'react'
import styled from 'styled-components'
import Rayo from '../assets/images/rayo.png'

const Loader = () => {

  const Img = styled.img`
  width: 100px;
  height: 100px;
  `

  return (
    <Img src={Rayo} />
  )
}

export default Loader