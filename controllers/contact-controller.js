const { contactModel, validateModel } = require("../models/contact");

// Send contact details to the owner
module.exports.contactController = async (req, res, next) => {
  try {
    let { firstname, lastname, email, number, message } = req.body;

    // Validate the input using Joi
    const { error } = validateModel({ firstname, lastname, email, number, message });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create a new contact entry in the database
    let contact = await contactModel.create({
      firstname,
      lastname,
      email,
      number,
      message,
    });

    // Handle successful creation
    res.redirect("/");
  } catch (error) {
    // Log the error and send a response
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "An error occurred while creating the contact." });
  }
};
