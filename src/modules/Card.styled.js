import styled, { keyframes, css } from 'styled-components'

const Rotate = keyframes`
  from {
    transform: translateX(-100%) rotateY(150deg);
  }
  to {
    transform: translateX(0) rotateY(0deg);
  }
`

export const CardWrapper = styled.div`
  animation: ${Rotate} ease 1s forwards;
  transform-style: preserve-3d;
  transform-origin: center right;
  
  width: 130px;
  height: 200px;
  position: relative;
  visibility: visible;
  
  &:nth-child(1) { z-index: 1; }
  &:nth-child(2) { z-index: 2; }
  &:nth-child(3) { z-index: 3; }
  &:nth-child(4) { z-index: 4; }
  &:nth-child(5) { z-index: 5; }
  &:nth-child(6) { z-index: 6; }
  
  @media (max-width: 800px) {
    margin-right: -50px;
  }
`

const FaceStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
`

export const Front = styled.div`
  ${FaceStyle};
`

export const Back = styled.div`
  ${FaceStyle};
  transform: rotateY(180deg);
`
export const ValueWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  display: flex;
  justify-content: center;
  width: 100px;
  
  @media (max-width: 600px) {
    transform: scale(0.7);
  }
`

export const Value = styled.div`
  display: flex;
  color: white;
  border: 2px solid white;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 0.5rem;
  
  ${({ isSelected, theme }) => isSelected && css`
    background: white;
    color: ${theme.background};
  `}
`

export const ClickableValue = styled(Value)`
  cursor: pointer;
`
