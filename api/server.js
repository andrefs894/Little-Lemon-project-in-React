const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

let reservations = [];

app.use(cors());
app.use(express.json());

app.get('/api/reservations/:date', (req, res) => {
  const date = req.params.date;
  const times = reservations.filter(obj => obj.date === date);
  const hours = times.map(obj => obj.time);
  res.json(hours);
});

app.post('/api/submit', (req, res) => {
  const submit = {
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    guests: req.body.guests,
    occasion: req.body.occasion
  }
  reservations.push(submit);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
