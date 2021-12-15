
import React, { useState, useRef, useEffect } from 'react';
import { usetInterval } from './useInterval';
import {
  CANVAS_SIZE,
  SNAKE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from './constants';


import './App.css';

function App() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState();
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {

  }

  const endGame = () => {

  }

  const moveSnake = () => {

  }

  const createApple = () => {

  }

  const checkCollision = () => {

  }

  const checkAppleCollision = () => {

  }

  const gameLoop = () => {

  }

  useEffect(() => {

  }, [snake, apple, gameOver])

  return (


    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)} >
      <canvas
        style={{ border: "1px solid black " }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div>GAME OVER!</div>}
      <button onclick={startGame}>Start Game</button>
    </div>
  );
}

export default App;
