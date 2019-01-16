function circleArea(radius) {
    let area = Math.PI*radius*radius;
    console.log(area);
    let roundedArea = area.toFixed(2);
    console.log(roundedArea);
}
(circleArea(5));