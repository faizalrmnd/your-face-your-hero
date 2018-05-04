const axios = require('axios')

module.exports = {
  songSuggestion : (req, res, next) => {
    let emotion = req.body.emotion
    let id = 0

    switch (emotion) {
        case 'anger':
            id = 21
            break;
        case 'neutral':
            id = 12
            break;
        case 'happiness':
            id = 14
            break;
        case 'sadness':
            id = 2
            break;

        default:
            break;
    }
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=${id}&limit=5`)
    // axios.get(`https://itunes.apple.com/lookup?id=1239955032&entity=song`)

    .then(function (response) {
      // console.log(response.data.results)

      res.status(201).json(response.data.results)

        // console.log(response.data.results)
        // let songs = response.data.results
        //
        // songs.forEach(element => {
        //     // console.log(element.previewUrl)
        //     getSong({
        //         tract: element.trackName,
        //         singer: element.artistName,
        //         link: element.previewUrl
        //         })
        // });
        // console.log(response)
        // let lagu = response.data.results//[0].previewUrl

    })
    .catch(function (error) {
        console.log(error);
    });
  }
}
