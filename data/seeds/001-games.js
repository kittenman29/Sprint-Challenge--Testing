
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Pacman', genre: 'Arcade', releaseYear: 1980},
        {title: 'Halo', genre: 'Video Game', releaseYear: 2004},
        {title: 'Fifa 18', genre: 'Video Game', releaseYear: 2017}
      ]);
    });
};
