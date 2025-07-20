// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Sta CORS toe voor lokale frontend (live-server draait op andere poort)
app.use(cors());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Hallo van de backend server!' });
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
