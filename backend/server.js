const express = require('express');
const cors = require('cors');

const app = express();

// Gebruik de door Render opgegeven poort, of lokaal 3000
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Hallo van de backend server!' });
});

app.listen(port, () => {
  console.log(`Server draait op poort ${port}`);
});
