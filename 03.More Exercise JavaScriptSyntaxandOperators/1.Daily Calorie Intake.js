function calculateCalorieIntake(arr,activeFactor) {
    
    let weight = +arr[1];
    let height = +arr[2];
    let age = +arr[3];
    let basicManMetabolism = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    let basicWomanMetabolism = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
     let weeklyActivity;
     let calorieIntake = 0;
     switch (activeFactor) {
            case 0:
         weeklyActivity = 1.2
             break;
             case 1:
             case 2:
             weeklyActivity = 1.375;
             break;
             case 3:
             case 4:
             case 5:
             weeklyActivity = 1.55;
             break;
             case 6:
             case 7:
             weeklyActivity = 1.725;
             break;
             default: weeklyActivity = 1.90;
             break;
     }
     if (arr[0]=='f') {
         calorieIntake = Math.round(weeklyActivity*basicWomanMetabolism);
     }
     else{
        calorieIntake = Math.round(weeklyActivity*basicManMetabolism);
     }
console.log(calorieIntake);
}
calculateCalorieIntake(['f', 46, 157, 32], 5);