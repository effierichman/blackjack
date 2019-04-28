import React from 'react'
import PlayerHand from '../components/PlayerHand'
import Button from '../components/Button'
import { useGameStatus } from '../hooks/gameStatusHooks'
import { useWinnerStatus } from '../hooks/winnerStatusHooks'
import {
  GameWrapper,
  Action,
  SubTitle,
  Count,
  GameArea,
  FinishMessage,
  Table,
  NewGameButton
} from './Game.styled'

const Game = () => {
  const [ game, drawCard, pass, resetGame ] = useGameStatus()
  const [ winner, setWinner ] = useWinnerStatus(game)

  if (!game.deck) return null

  const { player, bank, playerHandValue, bankHandValue } = game

  const hasStarted = !!player.cards.length

  const newGame = () => {
    resetGame()
    setWinner(null)
  }

  return (
    <GameWrapper>
      <Action>
        <div>
          <SubTitle>Bank :</SubTitle>
          <Count>{bankHandValue}</Count>
        </div>
        {hasStarted && <Button disabled={winner} onClick={pass}>PASS</Button>}
      </Action>
      <GameArea>
        {hasStarted && (
          <Table>
            <PlayerHand user={'bank'} cards={bank.cards} />
            <PlayerHand user={'player'} cards={player.cards} />
            {winner && <FinishMessage win={winner === 'player'}>
              {winner === 'player' ? 'You win !' : 'You loose !'}
              <NewGameButton onClick={newGame}>New Game</NewGameButton>
            </FinishMessage>}
          </Table>
        )}
      </GameArea>
      <Action>
        <div>
          <SubTitle>Player :</SubTitle>
          <Count>{playerHandValue}</Count>
        </div>
        {hasStarted && <Button disabled={winner} onClick={() => drawCard('player')}>Draw</Button>}
      </Action>
    </GameWrapper>
  )
}

export default Game
