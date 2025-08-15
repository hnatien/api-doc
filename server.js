const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('.'));

// Serve YAML files with correct MIME type
app.get('*.yaml', (req, res) => {
  res.setHeader('Content-Type', 'application/yaml');
  res.sendFile(path.join(__dirname, req.path));
});

app.get('*.yml', (req, res) => {
  res.setHeader('Content-Type', 'application/yaml');
  res.sendFile(path.join(__dirname, req.path));
});

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`API Documentation server running on port ${port}`);
});
