const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const userId = check('userId')
    .notEmpty();
const title = check('title')
    .notEmpty()
    .withMessage("Missing Title")
const description = check('description')
    .notEmpty()
    .withMessage("Missing Description")
const costPerNight = check('costPerNight')
    .notEmpty()
    .withMessage("Missing Cost Per Night")
// .isInt({ min: 1, max: 5})
// *future*
// .toInt();
const address = check('address')
    .notEmpty()
    .withMessage("Missing Address")
const city = check('city')
    .notEmpty()
    .withMessage("Missing City")

const spotId = check("spotId")
    .notEmpty()
const guests = check("guests")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Must provide guests")

const beds = check("beds")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Must provide beds")
const bedrooms = check("bedrooms")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Must provide bedrooms")
const bathrooms = check("bathrooms")
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Must provide bathrooms")

exports.validateCreateSpot = [
    userId,
    title,
    description,
    costPerNight,
    address,
    city,
    handleValidationErrors
]
exports.validateCreateFloorPlan =[
    spotId,
    guests,
    beds,
    bedrooms,
    bathrooms,
    handleValidationErrors
]
