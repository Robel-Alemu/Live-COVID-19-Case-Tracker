const axios = require("axios");
const { WorldDataModel } = require("../model/worldData");

const options = {
    method: "GET",
    url: "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/",
    headers: {
      "X-RapidAPI-Key": "4577412ca0msh7462319195fc8cdp12d312jsn9318d47e31a8",
      "X-RapidAPI-Host":
        "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    },
  };


  let result = new Array(WorldDataModel);

  const WorldData = async (req,res) => {
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
     result.forEach((res)=>{
      console.log(res.ActiveCases);
     })

    let newArr= result.filter((res) => {
      return res.ActiveCases > 1000
     });
   console.log(newArr);
      let returnedData = {
        totalCases : result[0].TotalCases,
        newCases : result[0].NewCases,
        activeCases : result[0].ActiveCases,
        totalDeaths : result[0].TotalCases,
        newDeaths : result[0].NewDeaths,
        critical : result[0].Serious_Critical,
      }
  
     
      console.log(returnedData)
      res.send(returnedData);
  };
  
  
 
  module.exports= {
      WorldData
  }