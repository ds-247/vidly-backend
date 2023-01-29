const mongoose = require("mongoose");
const Joi = require("joi");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      minlength: 5,
      maxlength: 10,
      required: true,
    },
  })
);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(5).max(10).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
