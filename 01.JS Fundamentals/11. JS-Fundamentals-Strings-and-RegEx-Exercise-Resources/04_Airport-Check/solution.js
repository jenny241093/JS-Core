function solve() {

    let string = document.getElementById('str');
    let outputElement = document.getElementById('result');

    let [text, wantedInfo] = string.value.split(', ');
    let message;

    let namePattern = / ([A-Z]+([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /g;
    let airportPattern = / [A-Z]{3}\/[A-Z]{3} /g;
    let flightNumberPattern = / [A-Z]{1,3}[\d]{1,5} /g;
    let regexCompany = /-(\s[A-Z][A-Za-z]*\*[A-Z][A-Za-z]*\s)/gm;

    if(wantedInfo === 'name'){
        let matchInfo = text.match(namePattern)[0];
        let name = matchInfo.trim().replace('-', ' ');
        outputElement.textContent = `Mr/Ms, ${name}, have a nice flight!`;
    } else if(wantedInfo === "flight"){
        let airport = text.match(airportPattern)[0].split('/').map((e) => e.trim());
        let flightNumber = text.match(flightNumberPattern)[0].trim();

        outputElement.textContent = `Your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}.`;
		
    }
    else if (wantedInfo==='all') {
        let matchInfo = text.match(namePattern)[0];
        let name = matchInfo.trim().replace('-', ' ');
        let airport = text.match(airportPattern)[0].split('/').map((e) => e.trim());
        let flightNumber = text.match(flightNumberPattern)[0].trim();
        let company = regexCompany.exec(text)[1].trim().replace('*', ' ');
        outputElement.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airport[0]} to ${airport[1]}. Have a nice flight with ${company}.`
    }
        else if(command === 'company'){
            let company = regexCompany.exec(text)[1].trim().replace('*', ' ');
            outputElement.textContent = `Have a nice flight with ${company}.`;
    }
}
// function solve() {
//     let input = document.getElementById("str").value.split(", ");
    
//     let text = input[0];
//     let command = input[1];

//     let namesPattern = /[ ]([A-Z]{1}[A-Za-z]*[-][A-Z]{1}[A-Za-z]*[.][-][A-Z]{1}[A-Za-z]*|[A-Z]{1}[A-Za-z]*[-][A-Z]{1}[A-Za-z]*)[ ]/;
//     let airportPattern = /[ ]([A-Z]{3}\/[A-Z]{3})[ ]/;
//     let fightNumberPattern = /[ ]([A-Z]{1,3}[0-9]{1,5})[ ]/;
//     let companyPattern = /\-\ ([A-Z]{1}[a-z]*\*[A-Z]{1}[a-z]*)[ ]/;

//     let resultSpan = document.getElementById("result");
    
//     let outputText = "";
//     switch(command){
//         case "all":{
//             let name = namesPattern.exec(text)[1].trim();
//             name = Array.from(name.split("").map((letter) => {if(letter.toString() === "-"){return " "} else{return letter;}})).join("");

//             let companyName = companyPattern.exec(text)[1].trim();
//             companyName = companyName.replace("*", " ");
            
//             let flightNumber = fightNumberPattern.exec(text)[1].trim();
//             let airports = airportPattern.exec(text)[1].trim().split("/");
//             let fromAirport = airports[0];
//             let toAirport = airports[1];
//             outputText = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`;
//         }break;
//         case "name":{
//             let name = namesPattern.exec(text)[1].trim();
//             name = Array.from(name.split("").map((letter) => {if(letter.toString() === "-"){return " "} else{return letter;}})).join("");
            
//             outputText = `Mr/Ms, ${name}, have a nice flight!`;
//         }break;
//         case "company":{
//             let companyName = companyPattern.exec(text)[1].trim();
//             companyName = companyName.replace("*", " ");
            
//             outputText = `Have a nice flight with ${companyName}.`;
//         }break;
//         case "flight":{
//             let flightNumber = fightNumberPattern.exec(text)[1].trim();
//             let airports = airportPattern.exec(text)[1].trim().split("/");
//             let fromAirport = airports[0];
//             let toAirport = airports[1];

//             outputText = `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`;
//         }break;
//         default: break;
//     }

//     resultSpan.textContent = outputText;
// }