const db = require('../data/dbConfig.js');
const Games = require('./gamesModel.js');

describe('gamesModel', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });

  describe('model tests', () => {
    it('should return JSON', async () => {
      const games = await db('games');
      expect(games).toHaveLength(0);
    });

    it('should have length 2', async () => {
        await Games.add({ title: 'Ping Pong', genre: 'real', releaseYear: 1692 });
        await Games.add({ title: 'Hockey', genre: 'real', releaseYear: 1867 });
        
        const games = await db('games');
        expect(games).toHaveLength(2);
    });  
    
    it('should return 1', async () => {
        const count = await Games.del(1);
        expect(count);
    });
  });
});