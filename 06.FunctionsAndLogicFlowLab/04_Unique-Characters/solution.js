function extractUniqueChars() {
    let uniqueChars = "";
    let string = document.getElementById("string").value;

    function findUniqueChars(string) {
        for (let i = 0; i < string.length; i++) {
            isCharWhiteSpace(i);
            isCurrentCharUnique(i);
        }
    }

    function isCharWhiteSpace(i) {
        if (string[i] === " ") {
            uniqueChars += string[i];
        }
    }

    function isCurrentCharUnique(i) {
        if (uniqueChars.indexOf(string[i]) === -1) {
            uniqueChars += string[i];
        }
    }

    findUniqueChars(string);
    document.getElementById("result").innerHTML = uniqueChars;
}