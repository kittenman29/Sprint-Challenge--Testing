const express = require('express');
const helmet = require('helmet');

const gamesRouter = require('../games/gamesRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.use('/api/games', gamesRouter)

module.exports = server;