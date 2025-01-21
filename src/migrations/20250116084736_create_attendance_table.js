/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('attendance', (table) => {
        table.increments('id').primary(); // ID unik untuk setiap absensi
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE'); // Relasi ke tabel users
        table.date('date').notNullable(); // Tanggal absensi
        table.enu('status', ['present', 'absent', 'late', 'on_leave']).notNullable(); // Status absensi
        table.string('photo_path').notNullable(); // Path file foto absensi
        table.decimal('latitude', 9, 6); // Lokasi absensi (opsional)
        table.decimal('longitude', 9, 6); // Lokasi absensi (opsional)
        table.timestamps(true, true); // Kolom created_at dan updated_at
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('attendance');
};
