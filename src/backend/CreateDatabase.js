const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: ''
});

(async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('CREATE DATABASE IF NOT EXISTS hsw_headhunter');
    await conn.query('USE hsw_headhunter');
    await conn.query(`
      CREATE TABLE IF NOT EXISTS industries (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        industry_name VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS candidates (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        candidate_job VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS hero_image (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        image_path VARCHAR(255) NOT NULL,
        breakpoint_flag VARCHAR(255) NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS social_media_wa (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS social_media_gmail (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS social_media_youtube (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS social_media_linkedin (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS active_clients (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        image_path VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE IF NOT EXISTS testimony_card (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        company_logo VARCHAR(255) NOT NULL,
        summary VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        person_picture VARCHAR(255) NOT NULL,
        person_name VARCHAR(255) NOT NULL,
        person_position VARCHAR(255) NOT NULL,
        shown BOOL NOT NULL
      )
    `);
    await conn.query(`
      CREATE TABLE jobs (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        job_name VARCHAR(255),
        location VARCHAR(255),
        work_time VARCHAR(255),
        position VARCHAR(255),
        summary TEXT,
        requirements JSON,
        job_desc JSON,
        optional_info TEXT,
        shown BOOL NOT NULL
      )
    `);
    console.log('Database and tables created successfully');
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) conn.release();
  }
})();
