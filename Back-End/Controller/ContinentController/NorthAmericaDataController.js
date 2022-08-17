const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica',
    headers: {
      'X-RapidAPI-Key': '4577412ca0msh7462319195fc8cdp12d312jsn9318d47e31a8',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
const NorthAmericaData = async (req,res) => {
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
   
  
     
      // console.log(result)
      res.send(result);
  };

  module.exports = { NorthAmericaData};