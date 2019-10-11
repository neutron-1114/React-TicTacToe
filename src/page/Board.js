import React from 'react';
import './Board.css';
function Board(props) {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [next, setNext] = React.useState("O");

    function handleClick(i) {
        const newsquares = squares.slice();
        newsquares[i] = next;
        setSquares(newsquares);
        if(next === "X") {
            setNext("O");
        } else {
            setNext("X");
        }
        //TODO 胜利算法
    }

    return  <div>
            <div className="status">'Next player: {next}'</div>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)}/>
                <Square value={squares[1]} onClick={() => handleClick(1)}/>
                <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)}/>
                <Square value={squares[4]} onClick={() => handleClick(4)}/>
                <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)}/>
                <Square value={squares[7]} onClick={() => handleClick(7)}/>
                <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
        </div>
}

function Square(props) {
    return <button className="square" onClick={() => props.onClick()}>
        {props.value}
    </button>
}

function Game() {
    return <div className="game">
        <div className="game-board">
            <Board/>
        </div>
        <div className="game-info">
            <div></div>
            <ol></ol>
        </div>
    </div>
}

export default Game;