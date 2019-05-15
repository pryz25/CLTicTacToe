#!/usr/bin/env node

const program = require('commander');

let board = {
  upLeft: null,
  upMid: null,
  upRight: null,
  midLeft: null,
  center: null,
  midRight: null,
  botLeft: null,
  botMid: null,
  botRight: null
};

let player = 'X';

program
  .version('0.0.1')
  .description('CLI Tic Tac Toe')

program
  .command('place <move>')
  .alias('p')
  .description('play move at location')
  .action(move => makeMove(move))

let makeMove = (move) => {
  if (board[move]) {
    console.log('Choose a different square');
  } else {
    board[move] = player;
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
  }
};
