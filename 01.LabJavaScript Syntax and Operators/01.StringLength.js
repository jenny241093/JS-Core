function stringLength(first,second,third) {

    let firstArgLength = first.length;
   let secondArgLength = second.length;
   let thirdArgLength = third.length;
    let lenght = firstArgLength + secondArgLength +thirdArgLength;
    let avLenght = Math.round(lenght/3);
    console.log(lenght);
    console.log(avLenght);
}
stringLength('chocolate', 'ice cream', 'cake');