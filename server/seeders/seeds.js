const db = require("../config/connection");
const { Service } = require("../models");
const serviceSeeds = require("./serviceSeeds.json");

db.once("open", async () => {
  try {
    await Service.deleteMany({}); //what this line is intended to do? // it is deleting all the services in the database
    // so that we can seed the database with the serviceSeeds.json
    ({}); // this refers to the serviceSeeds.json file it will essentially be the same as the serviceSeeds.json file in the server folder
    // its empty because we are not passing any arguments to the function and it is just a placeholder for the serviceSeeds.json file

    await Service.create(serviceSeeds); //what this line is intended to do? // it is creating the services in the database
    // so that we can seed the database with the serviceSeeds.json
    // serviceSeeds is the argument that is passed to the function
    // and it means that we are passing the serviceSeeds.json file
  } catch (err) {
    console.error(err);
    process.exit(1); //basically it is saying that if there is an error then exit the process
    // so that it will not continue to run the rest of the code
  }
  //this is the rest of the code that will continue to run if there is no error
  console.log("all done!");
  process.exit(0);
});
