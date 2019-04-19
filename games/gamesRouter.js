const router = require('express').Router();
const Games = require('./gamesModel.js');

router.get('/', async (req, res) => {
  try {
    const games = await Games.get();
    res.status(200).json(games);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving games.' });
    }
});

router.post('/', async (req, res) => {
    const games = req.body;
    const addedGames = await Games.add(games)
    try {
     res.status(201).json(addedGames);
    } catch (error) {
    res.status(500).json({ message: 'Error adding games.' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const count = await Games.del(id);
    res.status(204).json(count);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting games.' });
  }
});

module.exports = router;
