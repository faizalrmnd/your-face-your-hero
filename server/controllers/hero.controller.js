const axios = require("axios")
axios.get('https://api.opendota.com/api/heroes')
  .then(function (response) {
    let heroRecommendation = filterHero(response,"sadness")
    res.status(200).json({heroRecommendation}) 
  })
  .catch(function (error) {
    console.log(error);
  });

function filterHero(input, feeling){
  let arrHero = []
  switch (feeling) {
    case "anger":
      input.data.forEach(hero=>{
        if(hero.roles.indexOf('Carry') != -1 && hero.roles.indexOf('Nuker') != -1){
          arrHero.push(hero.localized_name)
        }
      })
      return arrHero
    case "neutral":
      input.data.forEach(hero=>{
        if(hero.roles.indexOf('Initiator') != -1 && hero.roles.indexOf('Durable') != -1){
          arrHero.push(hero.localized_name)
        }
      })
      return arrHero
    case "happiness":
      input.data.forEach(hero=>{
        if(hero.roles.indexOf('Support') != -1 && hero.roles.indexOf('Disabler') != -1){
          arrHero.push(hero.localized_name)
        }
      })
      return arrHero
    case "sadness":
      input.data.forEach(hero=>{
        if(hero.roles.indexOf('Support') != -1 && hero.roles.indexOf('Pusher') != -1){
          arrHero.push(hero.localized_name)
        }
      })
      return arrHero
  }
}
