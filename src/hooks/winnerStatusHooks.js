import { useEffect, useState } from 'react'

export function useWinnerStatus (game) {
  const [winner, setWinner] = useState(null)
  const { playerHandValue, bankHandValue, playerHasPassed } = game

  // Watching the value of the player hand
  useEffect(() => {
    if (playerHandValue === 21) return setWinner('player')
    if (playerHandValue > 21) return setWinner('bank')
  }, [playerHandValue])

  // Watching the value of the bank hand
  useEffect(() => {
    if (!game.playerHasPassed) return

    if (bankHandValue === playerHandValue) return setWinner('bank')
    if (bankHandValue === 21) return setWinner('bank')
    if (bankHandValue > 21) return setWinner('player')
    if (bankHandValue > playerHandValue) return setWinner('bank')
  }, [bankHandValue, playerHasPassed])

  return [winner, setWinner]
}
