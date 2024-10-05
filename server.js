const express = require("express");
const path = require("path");

const app = express();

app.get('*.br', (req, res, next) => {
  res.set('Content-Encoding', 'br');
  res.set('Content-Type', 'application/javascript');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
