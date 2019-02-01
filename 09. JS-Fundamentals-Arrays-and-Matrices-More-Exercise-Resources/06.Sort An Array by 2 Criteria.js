function sort(array) {

    //array.sort((a, b) => a.length - b.length);
    array.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    array.sort(function(a, b) {
        return a.length - b.length;
    });
    return array.join("\n");

}
console.log(sort(['test',
    'Deny',
    'omen',
    'Default'
]));