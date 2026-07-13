const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./truthlens.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("SQLite Connected ✅");
  }
});

module.exports = db;
db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    otp TEXT,
    isVerified INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);