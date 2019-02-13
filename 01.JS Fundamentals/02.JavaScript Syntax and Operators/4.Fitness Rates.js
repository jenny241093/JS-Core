function fitnesPrice(day,service,hour) {
    let price = 0;
 if ((day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday')
     &&service == 'Fitness'&& (hour>=8.00&&hour<=15.00)) {
     price = 5;
 }
 else if ((day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday')
     &&service == 'Fitness'&& (hour>15.00&&hour<=22.00)) {
     price = 7.5;
 }
 else if ((day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday')
 &&service == 'Sauna'&& (hour>=8.00&&hour<=15.00)) {
 price = 4.00;
}
 else if ((day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday')
 &&service == 'Sauna'&& (hour>15.00&&hour<=22.00)) {
 price = 6.50;
}
else if ((day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday')
 &&service == 'Instructor'&& (hour>=8.00&&hour<=15.00)) {
 price = 10.00;
}
 else if ((day=='Monday'||day=='Tuesday'||day=='Wednesday'||day=='Thursday'||day=='Friday')
&&service == 'Instructor'&& (hour>15.00&&hour<=22.00)) {
price = 12.50;
}
else if ((day=='Saturday'||day=='Sunday')&&service == 'Fitness') {
price = 8.00;
}
else if ((day=='Saturday'||day=='Sunday')&&service == 'Sauna') {
    price = 7.00;
    }
else if ((day=='Saturday'||day=='Sunday')&&service == 'Instructor') {
        price =15.00;
        }

        console.log(price) ;
}
fitnesPrice('Sunday', 'Fitness', 22.00);