import React, { useState } from 'react';

import './Board.css';
class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.value = null;
    }
}

class SinglyLinkedalist {
    constructor(value) {
        const node = new LinkedListNode(value);
        this.value = value;
        this.value = null;
    }
}


const BOARD_SIZE = 10;

const Board = () => {
    const [board, setBoard] = useState(
        new Array(BOARD_SIZE).fill(0).map(row => new Array(BOARD_SIZE).fill(0)),
    );

    return (

        <div className='board'>
            {board.map((row, rowIdx) => (
                <div key={rowIdx} className='row'>{
                    row.map((cell, cellIdx) => (
                        <div key={cellIdx} className={`cell ${true ? 'snake-cell' : ''}`}></div>
                    ))
                }</div>
            ))}


        </div>
    );
};

const createBoard = BOARD_SIZE => {
    let counter = 1;
    const board = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
        const currentRow = [];
        for (let col = 0; col < BOARD_SIZE; col++) {
            currentRow.push(counter++);
        }
        board.push(currentRow);
    }
    return board;
}

export default Board;