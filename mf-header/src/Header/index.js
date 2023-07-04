import React, { useEffect } from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

const index = () => {

  const { t } = useTranslation();

  const options = [
    { label: 'español', value: 'es' },
    { label: 'inglés', value: 'en' }
  ]

  const Header = styled.header`
  width: 100%;
  color: #fff;
  height: 80px;
  display: flex;
  padding: 0 10px;
  background:rgb(31 41 55 / 1);
  `

  const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  `

  const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  `

  const LanguageSelector = styled.select`
    width: auto;
    padding: 10px 20px;
    border-radius: 4px;
  `

  let event = new CustomEvent('translate', { bubbles: true, detail: { lang: 'es' } })
  document.dispatchEvent(event)

  const changeLanguage = (evt) => {
    const { target } = evt
    event['detail']['lang'] = target.value
    document.dispatchEvent(event)
  }

  return (
    <Header>
      <HeaderContainer>
        <p>Micro Frontend Application</p>
        <SelectContainer>
          <LanguageSelector onChange={changeLanguage}>
            {options.map((op, idx) => {
              return (
                <option key={idx} value={op.value}>{op.label}</option>
              )
            })}
          </LanguageSelector>
        </SelectContainer>
      </HeaderContainer>
    </Header>
  )
}

export default index