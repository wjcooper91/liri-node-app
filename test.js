var Spotify = require('node-spotify-api');
var request = require('request');
 
function getSpotify() {
    var spotify = new Spotify({
        id: '1ec1606d0ccc46c99bf8138ba507074c',
        secret: '5c36fb68a30f47fab907e79f2e2eeb2b',
      });
       
      spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });

}

getSpotify();
