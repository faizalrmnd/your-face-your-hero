let emotion = 'happiness'
let id = 0

switch (emotion) {
    case 'angry':
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

module.exports = {


      axios.get(`https://itunes.apple.com/search?term=genre&genreId=${id}&limit=5`)
      // axios.get(`https://itunes.apple.com/lookup?id=1239955032&entity=song`)

      .then(function (response) {
          console.log(response.data.results)
          let songs = response.data.results

          songs.forEach(element => {
              // console.log(element.previewUrl)
              getSong({
                  tract: element.trackName,
                  singer: element.artistName,
                  link: element.previewUrl
                  })
          });
          // console.log(response)
          // let lagu = response.data.results//[0].previewUrl
          let emotion = 'happiness'
          let id = 0

          switch (emotion) {
              case 'angry':
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
      })
      .catch(function (error) {
          console.log(error);
      });

      function getSong (objlagu) {
          $('#song').append(`
          <b>Artist: ${objlagu.singer}</b><br>
          song: ${objlagu.tract}<br>
          <audio controls>
              <source src="${objlagu.link}" type="audio/ogg">
              <source src="${objlagu.link}" type="audio/mpeg">
              Your browser does not support the audio element.
          </audio>
          <p/>
          `)
      }
}
