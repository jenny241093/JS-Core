function solve() {
	let buttons = document.getElementsByTagName('button');
	let encBtn = buttons[0];
	let decodeBtn = buttons[1];
	let textAreas = document.getElementsByTagName('textarea');

	encBtn.addEventListener('click',encode);

	function encode() {

		let encodeMessage = textAreas[0].value;

        let newMessage = '';

        encodeMessage.split('').forEach((char) => {
            let asciiValue = char.charCodeAt(0) + 1;
            newMessage += String.fromCharCode(asciiValue);
        });

        textAreas[0].value = "";
        textAreas[1].value = newMessage;
		
	}

	decodeBtn.addEventListener('click',decode);

	function decode() {
		let decodeMessage = textAreas[1].value;
        let originalMessage = "";

        decodeMessage.split('').forEach((char) => {
            let asciiValue = char.charCodeAt(0) - 1;
            originalMessage += String.fromCharCode(asciiValue);
        });
        
        textAreas[1].value = originalMessage;
	}
}