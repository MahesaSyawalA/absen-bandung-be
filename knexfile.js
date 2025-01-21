require('dotenv').config(); // Memuat variabel lingkungan dari .env

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg', // PostgreSQL
    connection: {
      host: process.env.DB_HOST || '127.0.0.1', // Default PostgreSQL host
      user: process.env.DB_USER || 'postgres', // Default username
      password: process.env.DB_PASSWORD || 'postgres', // Default password
      database: process.env.DB_NAME || 'absensi_sekolah', // Default database name
    },
    pool: {
      min: parseInt(process.env.DB_POOL_MIN, 10) || 2, // Default pool min
      max: parseInt(process.env.DB_POOL_MAX, 10) || 10, // Default pool max
    },
    migrations: {
      directory: './src/migrations', // Lokasi folder migrasi
      tableName: 'knex_migrations', // Nama tabel untuk mencatat migrasi
    },
    seeds: {
      directory: './src/seeds', // Lokasi folder seeds
    },
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.STAGING_DB_HOST || '127.0.0.1',
      database: process.env.STAGING_DB_NAME || 'absensi_sekolah',
      user: process.env.STAGING_DB_USER || 'postgres',
      password: process.env.STAGING_DB_PASSWORD || 'postgres',
    },
    pool: {
      min: parseInt(process.env.STAGING_DB_POOL_MIN, 10) || 2,
      max: parseInt(process.env.STAGING_DB_POOL_MAX, 10) || 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.PROD_DB_HOST || '127.0.0.1',
      database: process.env.PROD_DB_NAME || 'absensi_sekolah',
      user: process.env.PROD_DB_USER || 'postgres',
      password: process.env.PROD_DB_PASSWORD || 'postgres',
    },
    pool: {
      min: parseInt(process.env.PROD_DB_POOL_MIN, 10) || 2,
      max: parseInt(process.env.PROD_DB_POOL_MAX, 10) || 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
