const joi = require("joi");
const Listing = require("./models/listing");
const Joi = require("joi");
const review = require("./models/review");

module.exports.listingSchema = Joi.object(
    {
        listing: Joi.object({
            title: joi.string().required(),
            description: joi.string().required(),
            location: joi.string().required(),
            country: joi.string().required(),
            price: joi.string().required().min(0),
            image: joi.string().allow("", null),
        }).required(),
    }
);

module.exports.reviewSchema = Joi.object(
    {
        review: Joi.object({
            rating: Joi.number().required().min(1).max(5),
            comment: Joi.string().required(),
        }).required(),
    }
);