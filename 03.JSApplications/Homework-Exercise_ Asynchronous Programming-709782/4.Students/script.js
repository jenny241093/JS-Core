function solve() {
    let basUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students";
    let username = "guest";
    let password = "guest";
    let base64Auth = btoa(username + ":" + password);

    loadStudents();

    function loadStudents() {
        let request = {
            url: basUrl,
            method: "GET",
            headers: {
                "Authorization": "Basic " + base64Auth
            }
        };

        $.get(request)
            .then(displayStudents);
    }

    function displayStudents(students) {
        $('#results').find('tr').nextAll().remove();
        students = students.sort((a, b) => a.ID - b.ID);
        for (let student of students) {
            $("#results")
                .append($('<tr>')
                    .append($(`<td>${student.ID}</td>`))
                    .append($(`<td>${student.FirstName}</td>`))
                    .append($(`<td>${student.LastName}</td>`))
                    .append($(`<td>${student.FacultyNumber}</td>`))
                    .append($(`<td>${student.Grade}</td>`))
                );
        }
    }

    $('#addStudent').click((e) => {
        e.preventDefault();
        let ID = Number($('#ID').val());
        let FirstName = $('#firstName').val();
        let LastName = $('#lastName').val();
        let FacultyNumber = $('#facultyNumber').val();
        let Grade = Number($('#grade').val());

        let facultyNumberRegex = /^\d+$/;

        if (FirstName.trim() != "" && LastName.trim() != "" && facultyNumberRegex.test(FacultyNumber)) {
            let request = {
                url: basUrl,
                method: "POST",
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    ID: ID,
                    FirstName: FirstName,
                    LastName: LastName,
                    FacultyNumber: FacultyNumber,
                    Grade: Grade
                })
            };

            $.ajax(request)
                .then(loadStudents);
        }
    });
}