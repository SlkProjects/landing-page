const express = require('express');
const path = require('path');
require('dotenv').config({
  override: true,
  path: path.join(__dirname, 'dev.env'),
});
const { Pool } = require('pg');
const app = express();
const port = 8000;
var cors = require('cors');
app.use(cors());
app.use('/images', express.static('./images'));

// Database connection parameters
const dbConfig = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
};

// Connection pool
const pool = new Pool(dbConfig);

// Endpoint to deliver logos
app.get('/api/partners', async (req, res) => {
  const client = await pool.connect();
  try {
    // Fetch trusted partners from the database
    const response = await client.query('SELECT * FROM app_trustedpartner');
    const partners = response.rows.map((partner) => ({
      ...partner,
      image_url: `/images/${partner.logo}`,
    }));
    res.json(partners);
  } catch (error) {
    console.error('Error fetching trusted partners:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
