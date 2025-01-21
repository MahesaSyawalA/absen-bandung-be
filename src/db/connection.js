const Client = require("pg").Pool;
// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "absensi_sekola",
//   password: "141414",
//   port: 5432,
// });

const client = new Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "absensi_sekolah",
  password: process.env.DB_PASSWORD || "postgres",
  port: process.env.DB_PORT || 5432,
});


client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected ");
  }
});
module.exports = client;
