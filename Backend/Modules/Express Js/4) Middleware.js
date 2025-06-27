const express = require('express');
const app = express();

// 🍯 Middleware that adds icing (logs request)
app.use((req, res, next) => {
  console.log(`Incoming request for ${req.url}`);
//   next(); // Pass to next middleware or route
});

// 🌈 Middleware that adds sprinkles (adds a custom header)
app.use((req, res, next) => {
  res.setHeader('X-Fun-Factor', 'Sprinkles');
  next();
});

// 📦 Final route handler (boxes the donut)
app.get('/', (req, res) => {
  res.send('🍩 Here is your donut!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
