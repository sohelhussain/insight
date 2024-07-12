// reder a home page
module.exports.homePageController = (req, res, next) => {
  res.render("index");
};

// reder a product page

module.exports.productPageController = (req, res, next) => {
    res.render("product");
};

// reder a gallery page

module.exports.galleryPageController = (req, res, next) => {
    res.render("gallery");
};


// reder a about page

module.exports.aboutPageController = (req, res, next) => {
    res.render("about");
};
