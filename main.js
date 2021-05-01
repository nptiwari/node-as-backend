const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send(`<h1>What colour is the sky on a clear day?</h1>
  <form action="/result" method="POST">
  <input type="text" name ="color">
  <button>submit answers</button>
  </form>
  `);
});

app.get('/about', (req, res) => {
  res.send('now you know about me');
});

app.post('/result', (req, res) => {
  if (req.body.color === 'blue') {
    res.send('congrats, thats correct.');
  } else {
    res.send('Incorrect, please try again.');
  }
});

// app.get('/result', (req, res) => {
//   res.send("yo! you're now getting the request");
// });

app.listen(3000);
