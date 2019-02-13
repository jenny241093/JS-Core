function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let specialKey = arr[0];

  let regex = new RegExp(`${specialKey}[\\s]+([!%$#A-Z]+)([\\s\\.\\,]|$)`, 'gim');
  let regexCapitalLetters = /[^!%$#A-Z]/;

  arr = arr.slice(1).map(x => {
      let text = x;
      let match;
  
     
      while ((match = regex.exec(text)) !== null) {
      
        
          if (match.index === regex.lastIndex) {
              regex.lastIndex++;
          }

          if (!regexCapitalLetters.test(match[1]))
          {
              let specialWord = match[1];
              let convertedWord = specialWord.toLowerCase().split('').map(x => {
                  switch (x) {
                      case '!': return '1';
                      case '%': return '2';
                      case '#': return '3';
                      case '$': return '4';
                      default: return x;
                  }
              }).join('');

              text = text.replace(match[1], convertedWord);
          }
      }
      return text;
  });

  arr.forEach(x => appendToResult(x));

  function appendToResult(text) {
      let p = document.createElement('p');
      p.textContent = text;
      document.getElementById('result').appendChild(p);
  }
}