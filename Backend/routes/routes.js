const express = require('express');
const router = express.Router();

// Example route
router.get('/example', (req, res) => {
    res.send('This is an example route.');
});

module.exports = router; // Ensure you export the router
