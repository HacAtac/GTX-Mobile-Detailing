const db = require("../config/connection");
const { Service } = require("../models");
const serviceSeeds = require("./serviceSeeds.json");

db.once("open", async () => {
  try {
    await Service.deleteMany({});

    await Service.create(serviceSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
