function solve() {
    // TODO: Add the functionality here.
    let signBtn = $(":button");
    signBtn.on('click', signMeUp);
    let totalPrice = 0;
    let jsFundPrice = 170;
    let jsAdPrice = 180;
    let jsAppPrice = 190;

    let modulePrice = 490;

    let isModule = false;
    let courseMap = {};
    let isOnline = false;
    courseMap['js-advanced'] = 'JS-Advanced';
    courseMap['js-fundamentals'] = 'JS-Fundamentals';
    courseMap['js-applications'] = 'JS-Applications';
    courseMap['js-web'] = 'JS-Web';

    function signMeUp() {

        let onlineBtn = $("input[type='radio']:checked").val();
        let resultUl = $('#myCourses .courseBody ul');
        resultUl.remove();

        var selectedCourses = [];
        $("input:checkbox:checked").map(function() {
            selectedCourses.push($(this).val());
        });
        let newRes = $('<ul>');

        console.log('resultul', resultUl);
        for (const course of selectedCourses) {

            let li = $(`<li>${courseMap[course]}</li>`);
            newRes.append(li);
            newRes.appendTo($('#myCourses .courseBody'));

        }

        if (selectedCourses.includes('js-fundamentals') && selectedCourses.includes('js-applications') && selectedCourses.includes('js-advanced')) {
            isModule = true;
            modulePrice -= modulePrice * 6 / 100;
            totalPrice += modulePrice;
            console.log(modulePrice);

        }
        if (selectedCourses.includes('js-fundamentals') && selectedCourses.includes('js-advanced') && isModule == false) {
            jsAdPrice -= jsAdPrice * 10 / 100;

            console.log(jsAdPrice);

        }
        if (selectedCourses.includes('js-fundamentals') && selectedCourses.includes('js-applications') && selectedCourses.includes('js-advanced') && selectedCourses.includes('js-web')) {
            isModule = true;
            newRes.append($(`<li>'HTML and CSS'</li>`));
            modulePrice -= modulePrice * 6 / 100;
            totalPrice += modulePrice;
            console.log(modulePrice);

        }



        if (selectedCourses.includes('js-fundamentals') && isModule == false) {
            totalPrice += jsFundPrice;
        }
        if (selectedCourses.includes('js-advanced') && isModule == false) {
            totalPrice += jsAdPrice;
        }
        if (selectedCourses.includes('js-applications') && isModule == false) {
            totalPrice += jsAppPrice;
        }
        if (selectedCourses.includes('js-web')) {
            totalPrice += modulePrice;
        }

        if (onlineBtn === 'online') {
            totalPrice -= totalPrice * 6 / 100;
        }
        let priceRes = $('#myCourses .courseFoot').children();
        priceRes.text(`Cost: ${Math.floor(totalPrice)}.00 BGN`);


    }
}

solve();