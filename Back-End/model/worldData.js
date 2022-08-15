const WorldDataModel = {
    TotalCases:Number,
    NewCases:Number,
    TotalDeaths:Number,
    NewDeaths:Number,
    TotalRecovered:Number,
    NewRecovered:Number,
    ActiveCases:Number,
    Serious_Critical:Number,
}

  
module.exports = {
    WorldDataModel
};

  

// class WorldDataModel {
//     constructor(TotalCases,NewCases,ActiveCases,TotalDeaths,NewDeaths,TotalRecovered,NewRecovered,Critical) {
//       this.TotalCases = TotalCases
//       this.NewCases = NewCases;
//       this.ActiveCases = ActiveCases;
//       this.TotalDeaths = TotalDeaths;
//       this.NewDeaths = NewDeaths;
//       this.TotalRecovered = TotalRecovered;
//       this.NewRecovered = NewRecovered;
//       this.Critical = Critical;
//     }
//   }