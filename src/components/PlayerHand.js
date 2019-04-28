import React from 'react'
import Card from '../modules/Card'
import styled from 'styled-components'

const PlayerHandWrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  visibility: hidden;
  &:first-child {
    margin-bottom: 5rem;
  }
`

const PlayerHand = (props) => {
  const { cards } = props

  return (
    <PlayerHandWrapper>
      {cards.map((card, i) => (
        !!cards.length && <Card key={i} {...card} />
      ))}
    </PlayerHandWrapper>
  )
}

export default PlayerHand
