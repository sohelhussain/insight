const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstname: {
      type: String, 
      minlength: 2, 
      maxlength: 10, 
      required: true,
    },
    lastname: {
      type: String,
      minlength: 2,
      maxlength: 10,
      required: true,
    },
    email: {
      type: String,
      minlength: 2,
      maxlength: 50, 
      required: true,
    },
    number: {
      type: String, // Changed to String to allow storing phone numbers with country codes
      minlength: 7, // Minimum length for a valid phone number
      maxlength: 15, // Maximum length for a valid phone number
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema); // Capitalize model name for convention