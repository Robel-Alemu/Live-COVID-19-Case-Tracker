const axios = require("axios");

const { AsiaData } = require("../../model/AsiaData");

let result = new Array(AsiaData);


const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries',
    headers: {
      'X-RapidAPI-Key': '4577412ca0msh7462319195fc8cdp12d312jsn9318d47e31a8',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };

 
const AllCountriesData = async (req,res) => {

    result =
     await axios
      .request(options)
      .then((response) => {
         return response.data;
      })
      .catch(function (error) {
        console.error(error);
        res.send({Message: error});
      });
   

 
    
      res.send(result);
  };

  module.exports = {AllCountriesData};