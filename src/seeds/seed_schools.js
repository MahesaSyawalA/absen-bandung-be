/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('schools').del();

  // Tambahkan data baru
  await knex('schools').insert([
    { name: 'Sekolah Menengah Kejuruan 1', address: 'Jl. A No.1', phone: '081234567890' },
    { name: 'Sekolah Menengah Kejuruan 2', address: 'Jl. B No.2', phone: '081234567891' },
    { name: 'Sekolah Menengah Kejuruan 3', address: 'Jl. C No.3', phone: '081234567892' },
  ]);
};
