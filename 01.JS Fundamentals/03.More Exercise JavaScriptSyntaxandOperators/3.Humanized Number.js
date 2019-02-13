function humanizedNumber(input) {
    let arr = splitMulti(input,[',','.',' ']);
    let regInteger = /^\d+$/;
for (let index = 0; index < arr.length; index++) {
    if (isInteger(arr[index])) {
       console.log(ordinal_suffix_of(arr[index]));
    }
    function isInteger( str ) {    
    return regInteger.test( str );
}
}
    function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
    function splitMulti(str, tokens){
        var tempChar = tokens[0]; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
} 

}
humanizedNumber('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.')