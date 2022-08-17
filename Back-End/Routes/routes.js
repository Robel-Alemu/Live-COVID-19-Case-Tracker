const express = require("express");

const {
    WorldData
} = require("../Controller/AllWorldDataController");

const {
    AllAsiaData
} = require("../Controller/AsiaDataController");


const router = express.Router(); 

router.get("/world-data", WorldData);
router.get("/asia-data", AllAsiaData);


module.exports = {
    routes: router,
  };