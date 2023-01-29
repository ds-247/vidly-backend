const Joi = require("joi");
const { genreSchema } = require("./genre");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  genre: {
    type: genreSchema,
    required: true,
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(3).max(50).required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
  };

  return Joi.validate(movie, schema);
}

exports.validate = validateMovie;
exports.Movie = Movie;
