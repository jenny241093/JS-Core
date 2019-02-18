function solve(array,order) {
    
    let asc = function(a,b) {
        return a-b;
    };
    let desc = function(a,b) {
        return b-a;
    };
    let sortingStrategies ={
        'asc':asc,
        'desc':desc
    };
    return array.sort(sortingStrategies[order]);
}