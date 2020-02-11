exports.seed = function(knex) {
  // Inserts seed entries
  return knex('resource').insert([
    { name: 'Javascript' },
    { name: 'NodeJS', description: 'Javascript runtime for building backend' },
    { name: 'ReactJS', description: 'Library for building front end' },
    { name: 'NPM', description: 'Node module to install dependancies' },
    { name: 'Knex', description: 'ORM for Node' },
    { name: 'Express', description: 'NodeJS Library to build server'}
  ]);
};
