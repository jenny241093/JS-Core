function timeToWalk(numberOfSteps,lengthOfFoot,speedInKm) {
    let distance = numberOfSteps*lengthOfFoot;
    let breaks = Math.floor(distance/500)*60;
    let time = distance/1000/speedInKm;
    time *= 3600;
    time += breaks;
    
    let hh = Math.floor(time / 3600);
    let mm = Math.floor(time / 60);
    let sec = Math.ceil(time - mm * 60);
    if(hh < 10){
        hh = "0" + hh;
    }
    if(mm < 10){
        mm = "0" + mm;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    console.log(`${hh}:${mm}:${sec}`);
    
}
timeToWalk(4000, 0.60, 5);