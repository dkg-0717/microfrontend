import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import { getRickCharacters } from '../services/rick'

const Rick = () => {

  const Wrapper = styled.section`
  gap: 20px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  max-inline-size: 1200px;
`;

  const Container = styled.section`
  gap: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `;

  const Character = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  `;

  const Img = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  `

  const Button = styled.button`
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
    background: #97ce4c;
    color: 	#44281d;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  `

  const Title = styled.h1`

  `

  const Name = styled.p`
    text-align: center;
  `

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const response = await getRickCharacters()
    setCharacters(response)
  }

  return (
    <Wrapper>
      <Title>Personajes de Rick and Morty</Title>
      {characters.length > 0 && <Container>
        {characters.map(character => {
          const { id, name, image } = character
          return (
            <CharacterCard key={id} name={name} image={image} />
          )
        })}
      </Container>}
      <Button onClick={() => getCharacters()}>Cargar personajes</Button>
    </Wrapper>
  )
}

export default Rick