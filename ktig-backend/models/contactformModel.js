const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  service: { type: String, required: true },
  business: { type: String, required: true },
}, { timestamps: true });

// Check if the model already exists
module.exports = mongoose.models.FormData || mongoose.model('FormData', formDataSchema);
