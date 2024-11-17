
const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
    seatPosition: { type: String, required: true },
    temperature: { type: Number, required: true },
    drivingMode: { type: String, required: true },
    mileage: { type: Number, required: true },
});

module.exports = mongoose.model('Preferences', preferencesSchema);
