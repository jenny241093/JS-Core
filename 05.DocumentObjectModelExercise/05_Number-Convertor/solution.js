function solve() {
    
    
    let toMenu = document.getElementById('selectMenuTo');
    let hexaOption = document.createElement("option");
	hexaOption.value = "hexadecimal";
	hexaOption.textContent = "Hexadecimal";
	console.log(hexaOption);
	toMenu.appendChild(hexaOption);
    let binaryOption = document.createElement("option");
	binaryOption.value = "binary";
	binaryOption.textContent = "Binary";
	console.log(binaryOption);
	toMenu.appendChild(binaryOption);
let button = document.getElementsByTagName('button')[0].
                      addEventListener('click',clickEvent);
function clickEvent() {
    let hexString='';
    let bin = '';
    let number = document.getElementById('input').value;
    console.log('number',number);
     let selectedOption = document.getElementsByTagName('option')[3].value;
     console.log(toMenu.value);

     
     if (toMenu.value='binary') {
        let bin = (+number).toString(2);
     }
     else{
        hexString = number.toString(16);
        if (hexString.length % 2) {
          hexString = '0' + hexString;
        }
     }
 }
}