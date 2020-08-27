import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable('user_credentials', table => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('user_credentials');
}
