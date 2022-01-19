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
      required: false,
    },
    smallPrice: {
      type: Number,
      required: false,
    },
    mediumPrice: {
      type: Number,
      required: false,
    },
    largePrice: {
      type: Number,
      required: false,
    },
    imageUrls: [],
  },
  {
    timeStamps: true,
  }
);

const Service = model("Service", serviceSchema);

module.exports = Service;
