const axios = require("axios")

function getHero(req,res){
  axios.get('https://api.opendota.com/api/heroes')
    .then(function (response) {
      let heroRecommendation = filterHero(response,req.body.emotion)
      let arrTop5 = []
      while (arrTop5.length !=5) {
        let id = random(heroRecommendation.length)
        if(arrTop5.indexOf(heroRecommendation[id]) === -1){
          arrTop5.push(heroRecommendation[id])
        }
      }

      res.status(200).json({arrTop5})
    })
    .catch(function (error) {
      console.log(error);
    });
}

function random(num){
  let idx = Math.floor(Math.random()*num)
  return idx
}

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

module.exports = getHero;
