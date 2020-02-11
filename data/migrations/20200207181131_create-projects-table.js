exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.string('description', 256);
      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.string('description', 256);
    })
    .createTable('task', tbl => {
      tbl.increments();
      tbl.string('description', 256).notNullable();
      tbl.string('notes', 256);
      tbl.boolean('completed').defaultTo(false);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project_resources', tbl => {
      tbl.primary(['project_id', 'resource_id']);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project_resources');
};
