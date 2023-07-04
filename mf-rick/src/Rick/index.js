import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import i18next from 'i18next';
import Loader from './Loader'
import CharacterCard from './CharacterCard'
import { useTranslation } from 'react-i18next';
import { getRickCharacters } from '../services/rick'

const Rick = () => {

  const { t } = useTranslation()

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    document.addEventListener('translate', function (e) {
      const { detail } = e
      i18next.changeLanguage(detail.lang)
    })
  }, [])

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
    background: #97ce4c;
    color: 	#44281d;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  `

  const Title = styled.h1`

  `

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    setLoading(true)
    const response = await getRickCharacters()
    setCharacters(response)
    setLoading(false)
  }

  return (
    <Wrapper>
      <Title>{t('rick-title')}</Title>
      {(characters.length > 0 && !isLoading) ? <Container>
        {characters.map(character => {
          const { id, name, image } = character
          return (
            <CharacterCard key={id} name={name} image={image} />
          )
        })}
      </Container> : (isLoading) && <Loader />}
      {characters.length == 0 && <Button onClick={() => getCharacters()}>{t('txt-button')}</Button>}
    </Wrapper>
  )
}

export default Rick