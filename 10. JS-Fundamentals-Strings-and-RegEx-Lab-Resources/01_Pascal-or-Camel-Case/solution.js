function solve() {
    // TODO
    let firstStr = document.getElementById('str1').value;
    let secondStr = document.getElementById('str2').value;
    let result = document.getElementById('result');
    let resultText = firstStr.toLowerCase()
        .split(' ')
        .filter(x => x)
        .map(e => e.charAt(0).toUpperCase() + e.slice(1))
        .join('');
    if (secondStr != 'Pascal Case' && secondStr != 'Camel Case') {
        resultText = 'Error!';
    }
    if (secondStr == 'Camel Case') {
        resultText = resultText.charAt(0).toLowerCase() + resultText.slice(1);
    }


    result.textContent = resultText
}