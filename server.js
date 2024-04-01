const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();


const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 5, 
  message: 'Too many requests from this IP, please try again later'
});


app.use(limiter);


app.get('/api/data', (req, res) => {
  res.send('Data from API');
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
