const song = require('axios')

axios.get('http://localhost:3000/song')
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
