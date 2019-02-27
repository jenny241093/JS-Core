function solve(input) {
    let listProcessor = (function() {
        let words = [];
        return {
            add: function(word) {
                words.push(word)
            },
            remove: function(word) {
                words = words.filter(e => e !== word)
            },
            print: function() {
                console.log(words.join(','));

            }
        };
    })();
    input.forEach(element => {
        let [command, argument] = element.split(' ');
        listProcessor[command](argument);
    });
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);