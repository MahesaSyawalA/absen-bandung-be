/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('schools', (table) => {
        table.increments('id').primary(); // ID unik untuk setiap sekolah
        table.string('name').notNullable(); // Nama sekolah
        table.string('address').notNullable(); // Alamat sekolah
        table.string('phone').notNullable(); // Nomor telepon sekolah
        table.timestamps(true, true); // Kolom created_at dan updated_at
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('schools');
};
