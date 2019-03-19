const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;

describe("Test", function() {
    let filmStudio;
    beforeEach(function() {
        filmStudio = new FilmStudio('SU-Studio');
    });
    it("empty array by default", function() {
        assert.isArray(filmStudio.films);
        assert.isEmpty(filmStudio.films);
    });
    describe("creates a film in object format (film name and all roles)", function() {
        it("without duplicates", function() {
            let expected = filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            let result = {
                filmName: 'The Avengers',
                filmRoles: [{ role: 'Iron-Man', actor: false },
                    { role: 'Thor', actor: false },
                    { role: 'Hulk', actor: false },
                    { role: 'Arrow guy', actor: false }
                ]
            };
            assert.deepEqual(expected, result);

        });
        it("with duplicates", function() {

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']);

            assert.deepEqual(filmStudio.films[1].filmName, 'The Avengers 2');

        });
        it("with one param", function() {
            assert.throw(() => filmStudio.makeMovie('makeMovie'), 'Invalid arguments count');
        });
        it("wrong second param", function() {
            assert.throw(() => filmStudio.makeMovie('makeMovie', {}), 'Invalid arguments');
        });
        it("wrong first param", function() {
            assert.throw(() => filmStudio.makeMovie(['makeMovie'], ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
        });

    });
    describe("casting()", function() {

        it("with role", function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            assert.deepEqual(filmStudio.casting('Johny Depp', 'Iron-Man'), `You got the job! Mr. Johny Depp you are next Iron-Man in the The Avengers. Congratz!`);
        });
        it("without role", function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            assert.deepEqual(filmStudio.casting('Johny Depp', 'Princess'), `Johny Depp, we cannot find a Princess role...`);
        });
        it("with wrong movie ", function() {
            assert.deepEqual(filmStudio.casting('Johny Depp', 'Princess'), `There are no films yet in SU-Studio.`);

        });

    });
    describe("lookForProducer()", function() {


        it("with film", function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            let res = filmStudio.lookForProducer('The Avengers');
            assert.deepEqual(res, `Film name: The Avengers\nCast:\nfalse as Iron-Man\nfalse as Thor\nfalse as Hulk\nfalse as Arrow guy\n`);


        });
        it("without film", function() {
            assert.throw(() => filmStudio.lookForProducer('The Avengers'), 'The Avengers do not exist yet, but we need the money...');
        });
        it("without wrong movie", function() {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            assert.throw(() => filmStudio.lookForProducer('The Avengers 2'), 'The Avengers 2 do not exist yet, but we need the money...');
        });

    });
});