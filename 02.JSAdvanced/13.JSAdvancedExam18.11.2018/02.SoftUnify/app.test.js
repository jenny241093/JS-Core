const SoftUniFy = require('./app');
const assert = require('chai').assert;

describe("SoftUniFy", function() {
    let softunitfy;
    beforeEach(function() {
        softunitfy = new SoftUniFy();
        result = null;
    });
    it("Should contain allSongs property that is initialized as an empty object.", function() {
        assert.isEmpty(softunitfy.allSongs);
    });
    describe("downloadSong(artist, song, lyrics) adds the given information to the allSongs ", function() {
        it("songs property with 1 song", function() {
            softunitfy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            result = {
                "Eminem": {
                    "rate": 0,
                    "votes": 0,
                    "songs": ["Venom - Knock, Knock let the devil in..."]
                }
            };
            assert.deepEqual(softunitfy.allSongs, result);
        });
        it("songs property more than 1 song and artist", function() {
            softunitfy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunitfy.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softunitfy.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            result = {
                "Eminem": {
                    "rate": 0,
                    "votes": 0,
                    "songs": ["Venom - Knock, Knock let the devil in...", 'Phenomenal - IM PHENOMENAL...']
                },
                'Dub Fx': {
                    rate: 0,
                    votes: 0,
                    songs: ['Light Me On Fire - You can call me a liar.. ']

                }
            };
            assert.deepEqual(softunitfy.allSongs, result);
        });
    });
    describe("playSong(song) ", function() {

        it("searches all already downloaded songs and returns them", function() {
            softunitfy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            result = 'Eminem:\n';
            result += 'Venom - Knock, Knock let the devil in...\n';
            assert.deepEqual(softunitfy.playSong('Venom'), result);
        });
        it("without song", function() {
            assert.deepEqual(softunitfy.playSong('Venom'), `You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
        it("with wrong song", function() {
            softunitfy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            assert.deepEqual(softunitfy.playSong('Light Me On Fire'), `You have not downloaded a Light Me On Fire song yet. Use SoftUniFy's function downloadSong() to change that!`);
        });
    });
    describe("songsList() ", function() {
        it("gets all already downloaded songs ", function() {
            softunitfy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softunitfy.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softunitfy.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
            result = 'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ';
            assert.deepEqual(softunitfy.songsList, result);
        });
        it("without songs in list", function() {
            assert.deepEqual(softunitfy.songsList, 'Your song list is empty');
        });
    });
    describe("rateArtist() sums ", function() {
        it("without rate", function() {
            assert.deepEqual(softunitfy.rateArtist('Eminem'), 'The Eminem is not on your artist list.');
        });
        it("with rate without downloaded song", function() {
            assert.deepEqual(softunitfy.rateArtist('Eminem', 50), 'The Eminem is not on your artist list.');
        });
    });

});