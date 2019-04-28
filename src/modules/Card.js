import React, { useState, useEffect } from 'react'

import {
  CardWrapper,
  Front,
  Back,
  ValueWrapper,
  Value,
  ClickableValue
} from './Card.styled'

const Card = ({ value, name, img, setValue }) => {
  const [realValue, setRealValue] = useState(value)

  useEffect(() => {
    setValue(realValue)
  }, [realValue])

  return (
    <CardWrapper>
      <Front>
        <img height={150} alt='front card' src={img} />
      </Front>
      <Back>
        <img height={150} alt='back card' src='/svg-cards/back.svg' />
      </Back>
      {name === 'ACE' ? (
        <ValueWrapper>
          <ClickableValue isSelected={realValue === 1} onClick={() => setRealValue(1)}>
            1
          </ClickableValue>
          <ClickableValue isSelected={realValue === 11} onClick={() => setRealValue(11)}>
            11
          </ClickableValue>
        </ValueWrapper>
      ) : (
        <ValueWrapper>
          <Value isSelected>
            {value}
          </Value>
        </ValueWrapper>
      )
      }
    </CardWrapper>
  )
}

export default Card
