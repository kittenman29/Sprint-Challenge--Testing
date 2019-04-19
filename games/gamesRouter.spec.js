const request = require('supertest');
const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

describe('gamesRouter.js', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });

  describe('GET /api/games', () => {
    it('should respond with 200 OK', async () => {
      const res = await request(server).get('/api/games');

      expect(res.status).toBe(200);
    });
  });

  describe('POST /api/games', () => {
    it('should respond with 200 created', () => {
      return request(server)
        .post('/api/games')
        .send({ title: "Hockey", genre: "Real", releaseYear: 1780 })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });


  describe('POST /api/games', () => {
    it('should respond with json', () => {
      return request(server)
        .post('/api/games')
        .send({ title: 'Soccer', genre: 'Real', releaseYear: 1750 })
        .then(res => {
          expect(res.type).toBe('application/json');
        });
    });
  });
});