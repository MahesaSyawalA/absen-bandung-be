const bcrypt = require('bcrypt');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Hapus semua data yang ada
  await knex('users').del();

  // Hash password untuk semua pengguna
  const password1 = await bcrypt.hash('password1', 10);
  const password2 = await bcrypt.hash('password2', 10);
  const password3 = await bcrypt.hash('password3', 10);

  // Tambahkan data baru
  await knex('users').insert([
    { username: 'user1', email: 'user1@example.com', password: password1, school_id: 1 },
    { username: 'user2', email: 'user2@example.com', password: password2, school_id: 2 },
    { username: 'user3', email: 'user3@example.com', password: password3, school_id: 3 },
  ]);
};
