import styled, { keyframes } from 'styled-components'
import Button from '../components/Button'

const Appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) translateZ(20px) rotateX(0deg);
  }
  to {
    opacity: 1;
    transform: translateY(100px) translateZ(90px) rotateX(-40deg);
  }
`

export const GameWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  display: flex;
`

export const Action = styled.div`
  width: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    justify-content: flex-end;
  }
`

export const SubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  color: ${({ theme }) => theme.primary};
  padding-bottom: 1rem;
`

export const Count = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`

export const GameArea = styled.section`
  position: relative;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const FinishMessage = styled.div`
  position: absolute;
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  top: 40%;
  left: 0;
  font-weight: 700;
  text-align: center;
  width: 100%;
  visibility: visible;
  text-shadow: 1px 1px 10px black;
  color: ${({ theme, win }) => win ? theme.green : theme.red};
  animation: ${Appear} ease .5s forwards;
  
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`

export const Table = styled.div`
  height: 400px;
  position:absolute;
  z-index: 1;
  width: 100%;
  transform: rotateX(50deg);
  visibility: hidden;
`

export const NewGameButton = styled(Button)`
  display: block;
  transform: scale(0.8);
  font-family: 'Lato', sans-serif;
  margin: 1rem auto;
  background: ${({ theme }) => theme.primary};
  color: white;
  transition: ease all 0.2s;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
  &:hover {
    transform: scale(1);
    box-shadow: 1px 3px 15px rgba(0,0,0,0.3);
  }
`
