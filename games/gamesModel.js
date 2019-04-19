const db = require('../data/dbConfig.js');

module.exports = {
  get,
  add,
  del
};

function get() {
    // const game = Array.isArray(games) ? game : Array.from(games);
    return db('games');
  }

async function add(games) {
    const [id] = await db('games').insert(games);
    return db('games')
      .where({ id })
      .first();
  }
  
  async function del(id) {
    return db('games')
      .where({ id })
      .del();
  }