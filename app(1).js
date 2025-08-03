// 1. Import required packages
const express = require('express');
const app = express();

// 2. Add middleware to parse JSON and form data
app.use(express.json());       // For JSON data
app.use(express.urlencoded({ extended: true })); // For form data

// 3. Add a root route (essential for Render)
app.get('/', (req, res) => {
  res.send('🚀 PWLoGiCon Platform is Running!');
});

// 4. Define the port (Render uses process.env.PORT)
const PORT = process.env.PORT || 3000;

// 5. Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
