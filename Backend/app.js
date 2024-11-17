const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Define the POST route to save preferences
app.post('/api/preferences', (req, res) => {
  const preferences = req.body; // Get the preferences data from the request body

  // Here, you would normally save the preferences data to your database (e.g., MongoDB)
  console.log('Received preferences:', preferences);

  // Send a response back to the client
  res.status(200).json({ message: 'Preferences saved successfully!', preferences });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
