const express = require('express');
const path = require('path');

const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const PORT = 3000;

app.use('./dist', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
