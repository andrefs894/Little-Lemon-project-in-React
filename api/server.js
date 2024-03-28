const express = require('express');
const app = express();
const PORT = 5000;

let reservations = [];

app.get('/api/reservations/:date', (req, res) => {
    const date = req.params.date;
    const times = reservations.filter(obj => obj.date === date);
    const hours = times.length > 0 ? times[0].times : [];
    res.json(hours);
});

app.post('/api/submit', (req, res) => {
  const submit = {
    date: req.body.date,
    time: req.body.time
  }
  reservations.push(submit);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
