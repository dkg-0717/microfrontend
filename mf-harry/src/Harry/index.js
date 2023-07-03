import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import { getHarryCharacters } from '../services/harry'

const Harry = () => {

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

  const Button = styled.button`
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
    background: #740001;
    color: #D3A625;
    font-size: 16px;
    cursor: pointer;
  `

  const Title = styled.h1`

  `

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    const response = await getHarryCharacters()
    setCharacters(response.slice(0, 10))
  }

  return (
    <Wrapper>
      <Title>Personajes de Harry Potter</Title>
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

export default Harry