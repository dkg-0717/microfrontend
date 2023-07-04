import React from 'react'
import styled from 'styled-components'
import Rick from '../assets/images/rick.png'

const Loader = () => {

  const Img = styled.img`
  width: 100px;
  height: 100px;
  `

  return (
    <Img src={Rick} />
  )
}

export default Loader