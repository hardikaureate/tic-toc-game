import React, { useEffect, useState } from 'react';
import './App.css';
import SquareBox from './SquareBox';

const initialState = ["", "", "", "", "", "", "", "", ""]

function App() {
    const [gameState, setGameState] = useState(initialState)
    const [isX, setIsX] = useState(false)

    const onSquareClicked = (index) => {
        let strings = Array.from(gameState)
        strings[index] = isX ? "X" : "0"
        setGameState(strings)
        setIsX(!isX)
    }

    useEffect(() => {
        let winner = checkWinner()
        if (winner) {
            alert(`${winner} has won the Game!!`)
            setGameState(initialState)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 9],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        console.log(gameState[0], gameState[1], gameState[2])
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c] && gameState[c]) {
                return gameState[a]
            }
        }
        return null
    }

    return (
        <>
            <div className="app-header">
                <p className="heading-text">Tic Tac Toe Game</p>
                <div className="row jc-center">
                    <SquareBox className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClicked(0)} />
                    <SquareBox className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClicked(1)} />
                    <SquareBox className="b-bottom" state={gameState[2]} onClick={() => onSquareClicked(2)} />

                </div>
                <div className="row jc-center">
                    <SquareBox className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClicked(3)} />
                    <SquareBox className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClicked(4)} />
                    <SquareBox className="b-bottom" state={gameState[5]} onClick={() => onSquareClicked(5)} />

                </div>
                <div className="row jc-center">
                    <SquareBox className="b-right" state={gameState[6]} onClick={() => onSquareClicked(6)} />
                    <SquareBox className="b-right" state={gameState[7]} onClick={() => onSquareClicked(7)} />
                    <SquareBox className="" state={gameState[8]} onClick={() => onSquareClicked(8)} />
                </div>
                <button className="clear-button" onClick={() => setGameState(initialState)}>Clear Game</button>
                <p className="fc-aqua fw-600">AureteLabs Tic Tac Toe Game</p>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4555525806975569"
                crossorigin="anonymous"></script>
            {/* <!-- HorizontalAds --> */}
            <ins class="adsbygoogle"
                style={{display:'block'}}
                data-ad-client="ca-pub-4555525806975569"
                data-ad-slot="4170448833"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
        </>
    );
}

export default App;