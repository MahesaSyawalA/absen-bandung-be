/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary(); // ID unik untuk setiap user
        table.string('username').notNullable().unique(); // Nama pengguna unik
        table.string('email').notNullable().unique(); // Email unik
        table.string('password').notNullable(); // Kata sandi
        table
            .integer('school_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('schools')
            .onDelete('CASCADE'); // Relasi ke tabel schools
        table.timestamps(true, true); // Kolom created_at dan updated_at
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
