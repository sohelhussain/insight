const { contactModel, validateModel } = require("../models/contact");

// Send contact details to the owner
module.exports.contactController = async (req, res, next) => {
  try {
    let { fullname, email, number, city } = req.body;
    console.log(req.body);

    // Validate the input using Joi
    const err = validateModel({ fullname, email, number, city });
    console.log(err);
    if (err) {
      req.flash("validationError",err.details.map((err) => err.message)
      );
      return res.status(200).send(err.message);
    }

    // Check for existing email in the database
    const existingContact = await contactModel.findOne({ email });
    if (existingContact) {
      const errorMessage = "Email already exists";
      req.flash("validationError", [errorMessage]);
      return res.status(400).send({ error: errorMessage });
    }

    // Create a new contact entry in the database
    let contact = await contactModel.create({
      fullname,
      email,
      number,
      city,
    });

    console.log(contact);
    // Handle successful creation
    res.redirect("/");
  } catch (error) {
    // Log the error and send a response
    console.error("Error creating contact:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the contact." });
  }
};
