import React from 'react';
import CardItem from './CardItem';
import Player2CardItem from './Player2CardItem'

const Games = ({ playerWins, isFlipped, setIsFlipped, drawArray, cards, playerOneCards, playerTwoCards, setPlayerOneCards, setPlayerTwoCards, shuffleCards, playRound }) => {

    shuffleCards(cards)

    // const attributeSelection = 'smartest'
    const handleFlipClick = (value) => {
        // setTimeout(() => {
            setIsFlipped(value)
    // }, 2000);
    }
    const handleClick = (event) => {
        setTimeout(() => {
            handleFlipClick(true)
        }, 2000);

        setTimeout(() => {
            handleFlipClick(false)
            const attributeSelection = event.target.id
            console.log(attributeSelection)

            const tempPlayerOneCards = [...playerOneCards]
            const tempPlayerTwoCards = [...playerTwoCards]
            playRound(tempPlayerOneCards, tempPlayerTwoCards, attributeSelection)
            
            setPlayerOneCards(tempPlayerOneCards)
            setPlayerTwoCards(tempPlayerTwoCards)
        
        }, 2000)
        };

    const cardItems1 = playerOneCards.map((card, index) => {
        return <CardItem playerWins={playerWins} isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} handleClick={handleClick} />
    })
    const cardItems2 = playerTwoCards.map((card, index) => {
        return <Player2CardItem isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={card} key={index} />
    })

    const numberOfCards = (array) => {
        return array.length
    }

    return (
        <>
            <div className="card-box">
                <div className="card-item">
                    <h1>Player One</h1>
                    <b className="player-1-card">{cardItems1[0]}</b>
                </div>
                <div className="card-item" id="flip_card">
                    <h1>Player Two</h1>
                    <b className="player-2-card">{cardItems2[0]}</b>
                </div>
            </div>
            <div className="card-counters">
                <b>Cards left: {numberOfCards(cardItems1)}</b>
                <h3>Draw Pile: {numberOfCards(drawArray)}</h3>
                <b>Cards left: {numberOfCards(cardItems2)}</b>
            </div>
        </>
    )
}



export default Games;