import axios from 'axios/index'
const API = 'https://deckofcardsapi.com/api'

export const getNewDeck = () => axios.get(`${API}/deck/new/shuffle/?deck_count=6`)

export const getNewCard = (deckId) => {
  const DRAW_CARD = `${API}/deck/${deckId}/draw/?count=1`
  return axios.get(DRAW_CARD)
}
