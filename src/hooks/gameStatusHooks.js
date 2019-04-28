import { useEffect, useState } from 'react'
import { getNewCard, getNewDeck } from '../actions/actions'
import { isGameOver, getHandValue, getImgPath, getValue } from '../helpers/helpers'

const initialState = {
  player: {
    cards: []
  },
  playerHandValue: 0,
  playerHasPassed: false,
  bank: {
    cards: []
  },
  bankHandValue: 0,
  deck: {
    deck_id: null
  }
}

export function useGameStatus () {
  const [game, setGame] = useState(initialState)

  // ---------- FUNCTIONS ----------
  // Fetch a new deck
  const fetchDeck = async () => {
    const res = await getNewDeck()
    setGame(game => ({
      ...game,
      deck: res.data
    }))
  }

  // Set the value of a card
  const setCardValue = (id, user, value) => {
    setGame(game => {
      const updatedCards = game[user].cards.map(card => {
        if (card.id === id) {
          return {
            ...card,
            value
          }
        }
        return card
      })

      return {
        ...game,
        [user]: {
          ...game[user],
          cards: updatedCards
        },
        [`${user}HandValue`]: getHandValue(updatedCards)
      }
    })
  }

  // Draw a card for choosen user
  const drawCard = async (user) => {
    const res = await getNewCard(game.deck.deck_id)
    const resCard = res.data.cards[0]

    setGame(game => {
      const cards = game[user].cards
      const id = `${user}-${resCard.code}-${cards.length + 1}`

      const card = {
        id,
        name: resCard.value,
        value: getValue(resCard.value),
        img: getImgPath(resCard.value, resCard.suit),
        setValue: (value) => setCardValue(id, user, value)
      }

      if (isGameOver(game)) {
        return game
      }

      return {
        ...game,
        [`${user}HandValue`]: getHandValue(cards),
        [user]: {
          cards: [
            ...cards,
            card
          ]
        }
      }
    })
  }

  // Make the player wait for the bank to draw
  const pass = () => {
    setGame(game => ({
      ...game,
      playerHasPassed: true
    }))
  }

  // Reset the state and fetch a new deck
  const resetGame = () => {
    setGame(initialState)
    fetchDeck()
  }

  // ---------- WATCHERS ----------
  // Fetch the deck when mounting
  useEffect(() => {
    fetchDeck()
  }, [])

  // Draw one card for bank & player after deck is setted
  useEffect(() => {
    if (game.deck.deck_id) {
      drawCard('bank')
      drawCard('player')
    }
  }, [game.deck.deck_id])

  // Make the bank fetch until loose
  useEffect(() => {
    if (game.playerHasPassed && game.bankHandValue < 21) {
      drawCard('bank')
    }
  }, [game.playerHasPassed, game.bank.cards])

  // Update hand value if a new cards is added
  useEffect(() => {
    if (game.player.cards && !!game.player.cards.length) {
      setGame(game => ({
        ...game,
        playerHandValue: getHandValue(game.player.cards)
      }))
    }
  }, [game.player.cards])

  // Update hand value if a new cards is added
  useEffect(() => {
    if (game.bank.cards && !!game.bank.cards.length) {
      setGame(game => ({
        ...game,
        bankHandValue: getHandValue(game.bank.cards)
      }))
    }
  }, [game.bank.cards])

  return [game, drawCard, pass, resetGame]
}
