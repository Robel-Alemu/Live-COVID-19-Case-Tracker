const express = require("express");

const {
    WorldData
} = require("../Controller/AllWorldDataController");

const router = express.Router(); 
router.get("/world-data", WorldData);


module.exports = {
    routes: router,
  };