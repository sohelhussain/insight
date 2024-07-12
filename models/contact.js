// creating a contact model and Schema object

const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    firstname: {
      type: "string",
      minLength: 2,
      maxLength: 10,
      required: true,
    },
    lastname: {
      type: String,
      minLength: 2,
      maxLength: 10,
      required: true,
    },
    email: {
      type: String,
      minLength: 2,
      maxLength: 10,
      required: true,
    },
    number: {
      type: Number,
      minLength: 2,
      maxLength: 15,
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

module.exports = mongoose.model('contact', contactSchema);
