const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    individualPrice: {
      type: Number,
      required: true,
    },
    smallPrice: {
      type: Number,
      required: true,
    },
    mediumPrice: {
      type: Number,
      required: true,
    },
    largePrice: {
      type: Number,
      required: true,
    },
    imageUrls: [],
  },
  {
    timeStamps: true,
  }
);

const Service = model("Service", serviceSchema);

module.exports = Service;
