import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/GlobalStyles'
import theme from './assets/theme'

import Button from './components/Button'
import Game from './modules/Game'

const MainWrapper = styled.main`
  max-width: 1000px;
  padding: 1.5rem;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 900px;
  perspective-origin: top;
`

const Title = styled.h1`
  font-size: 2.8rem;
  text-shadow: 1px 3px 4px rgba(0,0,0,0.1);
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.white};
`

export const StartButton = styled(Button)`
  margin-top: 2rem;
`

function App () {
  const [isStarted, setisStarted] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <MainWrapper>
          <Title>BlackJack</Title>
          {isStarted ? (
            <Game />
          ) : (
            <StartButton onClick={setisStarted}>Start the game</StartButton>
          )}

        </MainWrapper>
      </>
    </ThemeProvider>
  )
}

export default App
