const PORT = 3000;

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("The request you made returned the code from '/'!");
});

app.get('*', (req, res) => {
  res.send("The request you made returned the code from '*'!");
});


app.use(function errorHandler(error, req, res, next) {
  let response = {error: {message: 'server error'}};
  res.status(500).json(response);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening at http://localhost:${PORT}`);
});