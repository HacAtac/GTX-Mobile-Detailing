import { Schema, model } from "mongoose";

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
    individualprice: {
      type: Number,
      required: true,
    },
    smallprice: {
      type: Number,
      required: true,
    },
    mediumprice: {
      type: Number,
      required: true,
    },
    largeprice: {
      type: Number,
      required: true,
    },
    imageurls: [],
  },
  {
    timestamps: true,
  }
);

const serviceModel = model("service", serviceSchema);

export default serviceModel;