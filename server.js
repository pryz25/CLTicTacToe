#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.1')
  .description('CLI Tic Tac Toe')

program
  .command('place <move>')
  .alias('p')
  .description('play move at location')
  .action()