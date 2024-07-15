const mongoose = require("mongoose");
const Joi = require("joi");

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      minlength: 2,
      maxlength: 20,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      minlength: 2,
      maxlength: 20,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    number: {
      type: String,
      minlength: 7,
      maxlength: 15,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

function validateModel(data) {
  const schema = Joi.object({
    fullname: Joi.string().min(2).max(20).required().trim().messages({
      "string.min": "fullname must be at least 2 characters long",
      "string.max": "fullname must be at most 10 characters long",
      "any.required": "fullname is required",
    }),
    city: Joi.string().min(2).max(20).required().trim().messages({
      "string.min": "city must be at least 2 characters long",
      "string.max": "city must be at most 10 characters long",
      "any.required": "city is required",
    }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .min(2)
      .max(50)
      .required()
      .trim()
      .pattern(new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/))
      .messages({
        "string.email": "Please enter a valid email",
        "any.required": "Email is required",
        "string.pattern.base": "Please fill a valid email address",
        "string.min": "Email must be at least 2 characters long",
        "string.max": "Email must be at most 50 characters long",
      }),
    number: Joi.string().min(7).max(15).required().trim().messages({
      "string.min": "Number must be at least 7 characters long",
      "string.max": "Number must be at most 15 characters long",
      "any.required": "Number is required",
    }),
  });
  let { error } = schema.validate(data);
  return error;
}

module.exports.contactModel = mongoose.model("Contact", contactSchema);
module.exports.validateModel = validateModel;
