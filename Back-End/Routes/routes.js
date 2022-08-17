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

const {
    AustraliaAndOceanianData
} = require("../Controller/ContinentController/AustraliaAndOceanianController");

const {
    EuropeData
} = require("../Controller/ContinentController/EuropeDataController");


const router = express.Router(); 

router.get("/world-data", WorldData);
router.get("/asia-data", AllAsiaData);
router.get("/africa-data", AfricaData);
router.get("/australia-data", AustraliaAndOceanianData);
router.get("/europe-data", EuropeData);


module.exports = {
    routes: router,
  };