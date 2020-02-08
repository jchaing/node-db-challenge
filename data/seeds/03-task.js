exports.seed = function(knex) {
  // Inserts seed entries
  return knex('task').insert([
    { description: 'Create React App', notes: '', project_id: 1 },
    { description: 'Build state management', notes: '', project_id: 1 },
    { description: 'Build components', notes: '', project_id: 1 },
    { description: 'NPM Init', notes: '', project_id: 2 },
    { description: 'Install dependancies', notes: '', project_id: 2 },
    { description: 'Configure Express', notes: '', project_id: 2 },
    { description: 'Build endpoints', notes: '', project_id: 2 },
    { description: 'Knex Init', notes: '', project_id: 3 },
    { description: 'Knex Migrate', notes: '', project_id: 3 },
    { description: 'Knex Seed', notes: '', project_id: 3 }
  ]);
};
