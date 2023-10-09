const express = require('express');
const mariadb = require('mariadb/promise');
const cors = require('cors');
const bcrypt = require('bcryptjs');

// Create a connection pool to reuse connections
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'server',
  password: '',
  database: 'hsw_headhunter'
});

const app = express();
app.use(cors());

app.use(express.json());

app.get('/auth/:uname', async (req, res) => {
  const uname = req.params.uname;
  try {
    const result = await pool.query('SELECT * FROM auth WHERE username = ?', [uname]);
    if (result.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const auth = { ...result[0], id: result[0].id.toString() };
      res.json(auth);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.put('/auth/:uname', async (req, res) => {
  const uname = req.params.uname;
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query('UPDATE auth SET password = ? WHERE username = ?', [hashedPassword, uname]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all active_clients
app.get('/active_clients', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM active_clients');
    const serializedResult = result.map(row => {
      return { ...row, id: row.id.toString() };
    });
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// GET a single active_client by ID
app.get('/active_clients/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT * FROM active_clients WHERE id = ?', [id]);
    if (result.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const active_client = { ...result[0], id: result[0].id.toString() };
      res.json(active_client);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// POST a new active_client
app.post('/active_clients', async (req, res) => { 
  const { image_path, shown } = req.body;
  try {
    await pool.query('INSERT INTO active_clients (image_path, shown) VALUES (?, ?)', [image_path, shown]);
    res.status(201).json({ message: 'Data inserted succesfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT an existing active_client by ID
app.put('/active_clients/:id', async (req, res) => {
  const id = req.params.id;
  const { image_path, shown } = req.body;
  try {
    const result = await pool.query('UPDATE active_clients SET image_path = ?, shown = ? WHERE id = ?', [image_path, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE an existing active_client by ID
app.delete('/active_clients/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('DELETE FROM active_clients WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Retrieve all candidate records
app.get('/candidates', async (req, res) => {
  try {
    const query = 'SELECT * FROM candidates';
    const rows = await pool.query(query);
    const candidates = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(candidates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Retrieve a single candidate data by ID
app.get('/candidates/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM candidates WHERE id = ?';
    const rows = await pool.query(query, [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const candidate = { ...rows[0], id: rows[0].id.toString() };
      res.json(candidate);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a candidate data
app.post('/candidates', async (req, res) => {
  try {
    const { candidate_job, description, shown } = req.body;
    const query = 'INSERT INTO candidates (candidate_job, description, shown) VALUES (?, ?, ?)';
    await pool.query(query, [candidate_job, description, shown]);
    res.status(201).json({ message: 'Data inserted succesfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a candidate data by ID
app.put('/candidates/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { candidate_job, description, shown } = req.body;
    const query = 'UPDATE candidates SET candidate_job = ?, description = ?, shown = ? WHERE id = ?';
    const result = await pool.query(query, [candidate_job, description, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a candidate data by ID
app.delete('/candidates/:id', async (req, res) => {
  const { id } = req.params;
  try {
    result = await pool.query(`DELETE FROM candidates WHERE id = ${id}`);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Retrieve all records
app.get('/hero_image', async (req, res) => {
  try {
    const query = 'SELECT * FROM hero_image';
    const rows = await pool.query(query);
    const data = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Retrieve a data by ID
app.get('/hero_image/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = 'SELECT * FROM hero_image WHERE id = ?';
    const rows = await pool.query(query, [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = { ...rows[0], id: rows[0].id.toString() };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a data
app.post('/hero_image', async (req, res) => {
  try {
    const { image_path, breakpoint_flag } = req.body;
    const query = 'INSERT INTO hero_image (image_path, breakpoint_flag) VALUES (?, ?)';
    await pool.query(query, [image_path, breakpoint_flag]);
    res.status(201).json({ message: 'Data inserted succesfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a data by ID
app.put('/hero_image/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { image_path, breakpoint_flag } = req.body;
    const query = 'UPDATE hero_image SET image_path = ?, breakpoint_flag = ? WHERE id = ?';
    const result = await pool.query(query, [image_path, breakpoint_flag, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a data by ID
app.delete('/hero_image/:id', async (req, res) => {
  const { id } = req.params;
  try {
    result = await pool.query(`DELETE FROM hero_image WHERE id = ${id}`);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all industries
app.get('/industries', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM industries');
    const serializedResult = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get a specific industry by ID
app.get('/industries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query('SELECT * FROM industries WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const industry = { ...rows[0], id: rows[0].id.toString() };
      res.json(industry);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new industry
app.post('/industries', async (req, res) => {
  try {
    const { industry_name, shown } = req.body;
    await pool.query('INSERT INTO industries (industry_name, shown) VALUES (?, ?)', [industry_name, shown]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an industry by ID
app.put('/industries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { industry_name, shown } = req.body;
    const result = await pool.query('UPDATE industries SET industry_name = ?, shown = ? WHERE id = ?', [industry_name, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete an industry by ID
app.delete('/industries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM industries WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all data
app.get('/social_media_gmail', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM social_media_gmail');
    const serializedResult = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET data by ID
app.get('/social_media_gmail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query('SELECT * FROM social_media_gmail WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = { ...rows[0], id: rows[0].id.toString() };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST new data
app.post('/social_media_gmail', async (req, res) => {
  try {
    const { url, shown } = req.body;
    await pool.query('INSERT INTO social_media_gmail (url, shown) VALUES (?, ?)', [url, shown]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update data by ID
app.put('/social_media_gmail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { url, shown } = req.body;
    const result = await pool.query('UPDATE social_media_gmail SET url = ?, shown = ? WHERE id = ?', [url, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE data by ID
app.delete('/social_media_gmail/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM social_media_gmail WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all data
app.get('/social_media_linkedin', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM social_media_linkedin');
    const serializedResult = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET data by ID
app.get('/social_media_linkedin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query('SELECT * FROM social_media_linkedin WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = { ...rows[0], id: rows[0].id.toString() };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST new data
app.post('/social_media_linkedin', async (req, res) => {
  try {
    const { url, shown } = req.body;
    await pool.query('INSERT INTO social_media_linkedin (url, shown) VALUES (?, ?)', [url, shown]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update data by ID
app.put('/social_media_linkedin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { url, shown } = req.body;
    const result = await pool.query('UPDATE social_media_linkedin SET url = ?, shown = ? WHERE id = ?', [url, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE data by ID
app.delete('/social_media_linkedin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM social_media_linkedin WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all data
app.get('/social_media_wa', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM social_media_wa');
    const serializedResult = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET data by ID
app.get('/social_media_wa/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query('SELECT * FROM social_media_wa WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = { ...rows[0], id: rows[0].id.toString() };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST new data
app.post('/social_media_wa', async (req, res) => {
  try {
    const { url, shown } = req.body;
    await pool.query('INSERT INTO social_media_wa (url, shown) VALUES (?, ?)', [url, shown]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update data by ID
app.put('/social_media_wa/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { url, shown } = req.body;
    const result = await pool.query('UPDATE social_media_wa SET url = ?, shown = ? WHERE id = ?', [url, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE data by ID
app.delete('/social_media_wa/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM social_media_wa WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all data
app.get('/social_media_youtube', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM social_media_youtube');
    const serializedResult = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET data by ID
app.get('/social_media_youtube/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await pool.query('SELECT * FROM social_media_youtube WHERE id = ?', [id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = { ...rows[0], id: rows[0].id.toString() };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST new data
app.post('/social_media_youtube', async (req, res) => {
  try {
    const { url, shown } = req.body;
    await pool.query('INSERT INTO social_media_youtube (url, shown) VALUES (?, ?)', [url, shown]);
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update data by ID
app.put('/social_media_youtube/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { url, shown } = req.body;
    const result = await pool.query('UPDATE social_media_youtube SET url = ?, shown = ? WHERE id = ?', [url, shown, id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE data by ID
app.delete('/social_media_youtube/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM social_media_youtube WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all testimony cards
app.get('/testimony_card', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM testimony_card');
    const serializedResult = rows.map(row => ({ ...row, id: row.id.toString() }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET a specific testimony card by ID
app.get('/testimony_card/:id', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM testimony_card WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = { ...rows[0], id: rows[0].id.toString() };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST a new testimony card
app.post('/testimony_card', async (req, res) => {
  try {
    const { company_logo, summary, description, person_picture, person_name, person_position, shown } = req.body;
    await pool.query(
      'INSERT INTO testimony_card (company_logo, summary, description, person_picture, person_name, person_position, shown) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [company_logo, summary, description, person_picture, person_name, person_position, shown]
    );
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT (update) an existing testimony card by ID
app.put('/testimony_card/:id', async (req, res) => {
  try {
    const { company_logo, summary, description, person_picture, person_name, person_position, shown } = req.body;
    const result = await pool.query(
      'UPDATE testimony_card SET company_logo = ?, summary = ?, description = ?, person_picture = ?, person_name = ?, person_position = ?, shown = ? WHERE id = ?',
      [company_logo, summary, description, person_picture, person_name, person_position, shown, req.params.id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE a testimony card by ID
app.delete('/testimony_card/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM testimony_card WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all data
app.get('/jobs', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM jobs');
    const serializedResult = rows.map(row => ({
      ...row,
      id: row.id.toString(),
      requirements: JSON.parse(row.requirements),
      job_desc: JSON.parse(row.job_desc)
    }));
    res.json(serializedResult);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET a specific data by ID
app.get('/jobs/:id', async (req, res) => {
  try {
    const rows = await pool.query('SELECT * FROM jobs WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      const data = {
        ...rows[0],
        id: rows[0].id.toString(),
        requirements: JSON.parse(rows[0].requirements),
        job_desc: JSON.parse(rows[0].job_desc)
      };
      res.json(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST a new data
app.post('/jobs', async (req, res) => {
  try {
    const { job_name, location, work_time, position, summary, requirements, job_desc, optional_info, shown } = req.body;
    await pool.query(
      'INSERT INTO jobs (job_name, location, work_time, position, summary, requirements, job_desc, optional_info, shown) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [job_name, location, work_time, position, summary, JSON.stringify(requirements), JSON.stringify(job_desc), optional_info, shown]
    );
    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT (update) an existing data by ID
app.put('/jobs/:id', async (req, res) => {
  try {
    const { job_name, location, work_time, position, summary, requirements, job_desc, optional_info, shown } = req.body;
    const result = await pool.query(
      'UPDATE jobs SET job_name = ?, location = ?, work_time = ?, position = ?, summary = ?, requirements = ?, job_desc = ?, optional_info = ?, shown = ? WHERE id = ?',
      [job_name, location, work_time, position, summary, JSON.stringify(requirements), JSON.stringify(job_desc), optional_info, shown, req.params.id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE a data by ID
app.delete('/jobs/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM jobs WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3030, () => {
  console.log('Server started on http://localhost:3030');
});
