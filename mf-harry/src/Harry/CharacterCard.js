import React from 'react'
import styled from 'styled-components'

const Character = ({ image, name }) => {

  const Name = styled.p`
  text-align: center;
`

  const Character = styled.section`
  display: flex;
  flex-direction: column;
  padding: 25px 10px 0px;
  border-radius: 4px;
  transition: all 0.5s;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover{
    transform: scale(1.1);
  }
  `

  const Img = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  `

  return (
    <Character>
      {image && <Img src={image}></Img>}
      <Name>{name}</Name>
    </Character>
  )
}

export default Character