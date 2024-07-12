// Render the home page
module.exports.homePageController = (req, res, next) => {
    res.render("index");
  };
  
  // Render the product page
  module.exports.productPageController = (req, res, next) => {
    res.render("product");
  };
  
  // Render the gallery page
  module.exports.galleryPageController = (req, res, next) => {
    res.render("gallery");
  };
  
  // Render the about page
  module.exports.aboutPageController = (req, res, next) => {
    res.render("about");
  };