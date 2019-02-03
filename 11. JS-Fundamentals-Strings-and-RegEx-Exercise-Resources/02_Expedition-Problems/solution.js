function solve() {
  let inputStr = document.getElementById('str').value;
  let inputText = document.getElementById('text').value;
  let resutElem = document.getElementById('result');
  let messagePattern =RegExp(`${inputStr}(.+?)${inputStr}`, "g");
  let coordinatesPattern = /(north|east).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/ig;
 let decodedMessage = messagePattern.exec(inputText);
 console.log(decodedMessage);
  let east;
  let north;
  let message;
 
 while ((m = coordinatesPattern.exec(inputText)) !== null) {
    if (m[1].toUpperCase() === "NORTH") {
      north = `${m[2]}.${m[3]} N`;
    } else if (m[1].toUpperCase() === "EAST") {
      east = `${m[2]}.${m[3]} E`;
    }
  };

console.log(east);
console.log(north);
console.log(message);


if (decodedMessage !== null) {
  message = `Message: ${decodedMessage[1]}`;
}

appendToResultElem(north);
appendToResultElem(east);
appendToResultElem(message);

function appendToResultElem(elem) {
  let p = document.createElement('p');
  p.textContent = elem;
  resutElem.appendChild(p);
}


}