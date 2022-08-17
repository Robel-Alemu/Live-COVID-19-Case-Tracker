const express = require("express");

const {
    WorldData
} = require("../Controller/AllWorldDataController");

const {
    AllAsiaData
} = require("../Controller/AsiaDataController");

const {
    AfricaData
} = require("../Controller/AfircaDataController");


const router = express.Router(); 

router.get("/world-data", WorldData);
router.get("/asia-data", AllAsiaData);
router.get("/africa-data", AfricaData);


module.exports = {
    routes: router,
  };