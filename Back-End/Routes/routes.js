const express = require("express");

const {
    WorldData
} = require("../Controller/ContinentController/AllWorldDataController");

const {
    AllAsiaData
} = require("../Controller/ContinentController/AsiaDataController");

const {
    AfricaData
} = require("../Controller/ContinentController/AfircaDataController");


const router = express.Router(); 

router.get("/world-data", WorldData);
router.get("/asia-data", AllAsiaData);
router.get("/africa-data", AfricaData);


module.exports = {
    routes: router,
  };