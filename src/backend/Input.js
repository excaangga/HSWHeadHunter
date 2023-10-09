const mariadb = require('mariadb/promise');
const bcrypt = require('bcryptjs');

// Create a connection pool to reuse connections
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'server',
  password: '',
  database: 'hsw_headhunter'
});

var username = 'adminhsw';
var password = 'T0PW1NN3R';

async function insertUser() {
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

  await pool.query(`
    INSERT INTO auth (username, password)
    VALUES (?, ?)
  `, [username, hashedPassword]);
}

insertUser().catch(console.error);