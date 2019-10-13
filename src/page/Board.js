import React from 'react';
import './Board.css';
function Board(props) {

    const msg = function() {
        console.log(!props.newBoard.winner);
        const res =  !props.newBoard.winner ? "Next player " + props.newBoard.next : props.newBoard.winner + " is winner!!!";
        console.log(res);
        return res;
    }();

    function handleClick(i) {
        if(props.newBoard.winner) {
            alert("Board is lock!!!")
            return;
        }
        if(props.newBoard.square[i] != null) {
            alert("Already had chess!!");
        } else {
            props.onClick(i);
        }
    }

    return  <div>
            <div className="status">{msg}</div>
            <div className="board-row">
                <Square value={props.newBoard.square[0]} onClick={() => handleClick(0)}/>
                <Square value={props.newBoard.square[1]} onClick={() => handleClick(1)}/>
                <Square value={props.newBoard.square[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={props.newBoard.square[3]} onClick={() => handleClick(3)}/>
                <Square value={props.newBoard.square[4]} onClick={() => handleClick(4)}/>
                <Square value={props.newBoard.square[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={props.newBoard.square[6]} onClick={() => handleClick(6)}/>
                <Square value={props.newBoard.square[7]} onClick={() => handleClick(7)}/>
                <Square value={props.newBoard.square[8]} onClick={() => handleClick(8)}/>
            </div>
        </div>
}

function Square(props) {
    return <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
}

function Game() {

    const [history, setHistory] = React.useState([{square:Array(9).fill(null), next: "O"}]);
    const [newBoard, setNewBoard] = React.useState({square:Array(9).fill(null), next: "O"});

    function revert(i) {
        setNewBoard(history[i]);
        const newHistory = history.slice(0, i + 1);
        setHistory(newHistory);
    }

    function handleClick(i) {
        let newNext = null;
        const oldNext = history[history.length - 1]["next"];
        if(oldNext === "X") {
            newNext = "O";
        } else {
            newNext = "X";
        }
        const newSquares = history[history.length - 1]["square"].slice();
        newSquares[i] = oldNext;

        let a = calculateWinner(newSquares);
        const newBoard = {
            winner: a,
            square: newSquares,
            next: newNext
        };
        const newHistory = history.concat(newBoard);
        setNewBoard(newBoard);
        setHistory(newHistory);
    }

    return <div className="game">
        <div className="game-board">
            <Board newBoard={newBoard} onClick={(x, y)=>handleClick(x, y)}/>
        </div>
        <div className="game-info">
            <div></div>
            <ol><RevertBtn history={history} onClick={(x)=>revert(x)}/></ol>
        </div>
    </div>
}

function RevertBtn(props) {

    const ele = function() {
        const eles = [];
        for(let i = 0; i < props.history.length; i++) {
            eles.push(
                <button key={i} onClick={() => props.onClick(i)}>Click me to revert to No.{i} step.</button>
            )
            eles.push(
                <br key={"br" + i}/>
            )
        }
        return eles;
    }();

    return ele
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;