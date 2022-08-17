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

const {
    NorthAmericaData
} = require("../Controller/ContinentController/NorthAmericaDataController");

const {
    SouthAmericaData
} = require("../Controller/ContinentController/SouthAmericaDataController");


const router = express.Router(); 

router.get("/world-data", WorldData);
router.get("/asia-data", AllAsiaData);
router.get("/africa-data", AfricaData);
router.get("/australia-data", AustraliaAndOceanianData);
router.get("/europe-data", EuropeData);
router.get("/north-america-data", NorthAmericaData);
router.get("/south-america-data", SouthAmericaData);


module.exports = {
    routes: router,
  };