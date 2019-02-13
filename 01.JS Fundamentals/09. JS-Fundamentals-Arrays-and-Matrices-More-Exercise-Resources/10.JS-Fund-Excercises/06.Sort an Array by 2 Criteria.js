function sort(array) {
    array.sort(function(a, b) {
        return a.length - b.length||a.localeCompare(b)
    }); 
    return array.join("\n");

}
