import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // console.log(this.readCode('Yaswanth'));
    // console.log(this.myArray);
    //console.log(this.myArrayTimeTwo);
    // console.log(this.allSongNames);
    // console.log(this.newSongs);
    // console.log(this.myArrayFilter);
    // console.log(this.myEvenArray);
    // console.log(this.strings);
    // console.log(this.filteredStrings);
    // console.log(this.avg);
    // console.log(this.obj);
    // console.log(this.faltMult);
    console.log(this.songNames);
  }

  // reduce
  myArray1 = [1, 2, 3, 4];
  sum = this.myArray1.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue;
  }, 0);

  avg = this.sum / this.myArray1.length;

  // Build an object from an array
  songs1 = [
    { id: 1, name: 'Curl of the Burl', artist: 'Mastodon' },
    { id: 2, name: 'Oblivion', artist: 'Mastodon' },
    { id: 3, name: 'Flying Whales', artist: 'Gojira' },
    { id: 4, name: "L'Enfant Sauvage", artist: 'Gojira' }
  ];

  obj = this.songs1.reduce((acc, currvalue) => {
    const artist = currvalue.artist;
    const artistCount = acc[artist] ? acc[artist] + 1 : 1;

    return {
      ...acc,
      [artist]: artistCount
    };
  }, {});

  // Build an array of arrays into a single one

  mult = [
    this.songs1,
    [{ id: 112, name: 'Chop Suey', artist: 'System of a Down' }]
  ];

  faltMult = this.mult.reduce((acc, currValue) => {
    return acc.concat(currValue);
  }, []);

  // Use of reduce function with regx
  readCode(stringInput) {
    var x = stringInput.split('');
    return x
      .reduce(function(prev, item, index) {
        if ((stringInput.match(new RegExp(item, 'g')) || []).length == 1) {
          prev.push(item);
        } else {
          if (prev.indexOf(item) == -1) {
            prev.push(item);
          }
        }
        return prev;
      }, [])
      .join('');
  }

  // Use of map function
  myArray = [1, 2, 3, 4];

  myArrayTimeTwo = this.myArray.map((value, index, array) => {
    return value * 2;
  });

  songs = [
    { id: 1, name: 'Curl of the Burl', artist: 'Mastodon' },
    { id: 2, name: 'Oblivion', artist: 'Mastodon' },
    { id: 3, name: 'Flying Whales', artist: 'Gojira' },
    { id: 4, name: "L'Enfant Sauvage", artist: 'Gojira' }
  ];

  // Taking just the song names form song array
  allSongNames = this.songs.map(song => {
    return song.name;
  });

  // Omitting the artist in the new song array
  newSongs = this.songs.map(song => {
    const { artist, ...rest } = song;
    return {
      ...rest,
      scrobbleCount: 0,
      spotifyURL: 'let just imagine these properties make sense for now'
    };
  });

  // Filter
  // Use of filter function
  myArrayFilter = [1, 2, 3, 4, 5, 6];

  myEvenArray = this.myArrayFilter.filter((value, index, array) => {
    return value % 2 === 0;
  });

  // Doing a string search
  strings = ['hello', 'Matt', 'Mastodon', 'Cat', 'Dog'];

  filteredStrings = this.strings.filter(string => {
    return string.includes('a');
  });

  // Using Map, filter and Reduce together
  spotifySongs = [
    { id: 1, name: 'Curl of the Burl', artist: 'Mastodon', duration: 204 },
    { id: 2, name: 'Oblivion', artist: 'Mastodon', duration: 306 },
    { id: 3, name: 'Flying Whales', artist: 'Gojira', duration: 444 },
    { id: 4, name: "L'Enfant Sauvage", artist: 'Gojira', duration: 246 }
  ];

  lastFmSongs = [
    { id: 5, name: 'Chop Suey', artist: 'System of a Down', duration: 192 },
    { id: 6, name: 'Throne', artist: 'Bring me the Horizon', duration: 186 },
    { id: 7, name: 'Destrier', artist: 'Agent Fresco', duration: 132 },
    { id: 8, name: 'Out of the Black', artist: 'Royal Blood', duration: 240 }
  ];

  allSongs = [this.spotifySongs, this.lastFmSongs];

  // lets reduce the array of arrays into a single one
  songNames = this.allSongs
    .reduce((acc, currValue) => {
      return acc.concat(currValue);
    })
    // Let's map it out with the seconds turned into minutes
    .map(song => {
      return { ...song, duration: Math.floor(song.duration / 60) };
    })
    // Let's filter the ones under 3 minutes
    .filter(song => {
      return song.duration > 3;
    })
    // Now let's map out the song names the quick way
    .map(song => song.name)
    // Join them up
    .join(' , ');
}
