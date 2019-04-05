function render() {
    const baseURL = 'https://baas.kinvey.com/';
    const appKey = 'kid_BJXTsSi-e';
    const appSecret = '447b8e7046f048039d95610c1b039390';
    const username = 'guest';
    const password = 'guest';
    const headers = {'Authorization': `Basic ${btoa(username + ":" + password)}`};

    renderStudents();
    renderAddStudentFunctionality();

    function renderStudents() {
        $.ajax({
            method: 'GET',
            url: baseURL + 'appdata/' + appKey + '/students',
            accepts: 'application/json',
            headers: headers,
            success: render
        });

        function render(data) {
            let orderedData = data.sort((a, b) => a['ID'] - b['ID']);
            let studentsToRender = orderedData.length;   //Change if you dont want to render all Students
            for (let i = 0; i < studentsToRender; i++) {
                let student = orderedData[i];
                $('#results').append(`<tr><td>${student.ID}</td>
                                   <td>${student.FirstName}</td>
                                   <td>${student.LastName}</td>
                                   <td>${student.FacultyNumber}</td>
                                   <td>${student.Grade}</td></tr>`)
            }
        }
    }

    function renderAddStudentFunctionality() {
        $('#results').before("<div id='createStudent'><h2>Create Student</h2>ID: <input type='text' placeholder='ID' id='ID'>" +
            "First Name:<input type='text' placeholder='FirstName' id='firstname'>" +
            "Last Name: <input type='text' placeholder='LastName' id='lastname'>" +
            "Faculty Number: <input type='text' placeholder='FacultyNumber' id='facultynumber'>" +
            "Grade: <input type='text' placeholder='Grade' id='grade'>" +
            "<button  class='btn btn-dark' id='create'>Create Student</button></div>");

        $('#create').click(addStudentToDB);
    }

    function addStudentToDB() {
        let $ID = $('#ID');
        let $firstname = $('#firstname');
        let $lastname = $('#lastname');
        let $facultynumber = $('#facultynumber');
        let $grade = $('#grade');

        let ID = $('#ID').val();
        let firstname = $('#firstname').val();
        let lastname = $('#lastname').val();
        let facultynumber = $('#facultynumber').val();
        let grade = $('#grade').val();


        if (ID.trim() === '' || isNaN(ID)) {
            alert('ID must be a number!');
            return;
        }
        if (firstname.trim() === '' || lastname.trim() === '') {
            alert('First name can\'t be empty!');
            return;
        }
        if (lastname.trim() === '' || lastname.trim() === '') {
            alert('Last name can\'t be empty!');
            return;
        }
        if (facultynumber.trim() === '' || facultynumber.match(/^[0-9]+$/) === null) {
            alert('Faculty number must contain only digits!');
            return;
        }
        if (grade.trim() === '' || isNaN(grade)) {
            alert('Grade must be a number!');
            return;
        }

        $ID.val('');
        $firstname.val('');
        $lastname.val('');
        $facultynumber.val('');
        $grade.val('');

        $.ajax({
            method: 'POST',
            url: baseURL + 'appdata/' + appKey + '/students',
            contentType: 'application/json',
            data: JSON.stringify({
                ID: +ID,
                FirstName: firstname,
                LastName: lastname,
                FacultyNumber: facultynumber,
                Grade: +grade
            }),
            headers: headers,
            success: renderStudents,
        });
    }
}

