function solve(studentPoints, homeworkPoints, totalHomework) {
    let maxPoints = 100;
    let maxExamPoints = 400;

    // totalpoints = 90 * exampoints / 400;

    // let studentPoints = +params[0];
    // let homeworkPoints = +params[1];
    // let totalHomework = +params[2];
    let totalPoints = 90 * studentPoints / maxExamPoints;


    let totalHomeWorkPoints = homeworkPoints / totalHomework * 10;
    totalPoints += totalHomeWorkPoints;
    let grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
    if (studentPoints === maxExamPoints || grade > 6) {
        grade = 6;
    } else if (grade < 3) {
        grade = 2;
    }
    console.log(grade.toFixed(2));


}
solve(190, 10, 10);