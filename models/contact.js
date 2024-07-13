const mongoose = require("mongoose");
const Joi = require("joi");

const contactSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      minlength: 2,
      maxlength: 10,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      minlength: 2,
      maxlength: 10,
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
    message: {
      type: String,
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
    firstname: Joi.string().min(2).max(10).required().trim(),

    lastname: Joi.string().min(2).max(10).required().trim(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .min(2)
      .max(50)
      .required()
      .trim()
      .pattern(new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)),

    number: Joi.string().min(7).max(15).required().trim(),

    message: Joi.string().required().trim(),
  });

  let { error } = schema.validate(data);
  return error;
}

module.exports.contactModel = mongoose.model("Contact", contactSchema);
module.exports.validateModel = validateModel;
