const express = require('express');
const router = express.Router();
const Preferences = require('../models/preferences'); // Reference to the model

// Endpoint to save preferences
router.post('/', async (req, res) => {
    try {
        const preferences = new Preferences(req.body); // Create a new preferences document
        await preferences.save(); // Save it in the database
        res.status(201).send({ message: 'Preferences saved successfully!' });
    } catch (error) {
        console.error('Error saving preferences:', error);
        res.status(500).send({ message: 'Failed to save preferences', error });
    }
});

module.exports = router;
