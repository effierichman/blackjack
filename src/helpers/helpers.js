export const HEADS = [
  'KING',
  'JACK',
  'QUEEN'
]

export const getValue = (value) => {
  if (value === 'ACE') {
    return 1
  }

  if (HEADS.includes(value)) {
    return 10
  }

  return value
}

export const getHandValue = (cards) => {
  return cards.reduce((acc, card) => {
    return parseInt(acc) + parseInt(getValue(card.value, acc))
  }, 0)
}

export const getImgPath = (value, suit) => {
  return `/svg-cards/${value.toLowerCase()}_of_${suit.toLowerCase()}.svg`
}

export const isGameOver = (game) => {
  const { bankHandValue, playerHandValue, playerHasPassed } = game

  if (bankHandValue === 21 || playerHandValue === 21) return true
  if (bankHandValue > 21 || playerHandValue > 21) return true
  if (playerHasPassed && bankHandValue === playerHandValue) return true
  if (playerHasPassed && bankHandValue > playerHandValue) return true
}
