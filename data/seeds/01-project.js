exports.seed = function(knex) {
  return knex('project').insert([
    { name: 'Build an SPA', description: 'A single page application' },
    { name: 'Build a Backend', description: 'A node.js backend' },
    { name: 'Build a Database', description: 'Where all the data is stored' }
  ]);
};
