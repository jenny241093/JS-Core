let baseUrl = `https://baas.kinvey.com/appdata/kid_BJXTsSi-e/`

const kinveyUsername = 'guest'
const kinveyPassword = 'guest'
const base64auth = btoa(`${kinveyUsername}:${kinveyPassword}`)
const authHeaders = { Authorization: 'Basic ' + base64auth }
async function getStudents () {
  let students = await $.ajax({
    type: 'GET',
    url: baseUrl + 'students',
    headers: authHeaders
  })
  console.log(students)
  let sorted = Array.from(students).sort((a, b) => a.ID - b.ID)
  for (const student of sorted) {
    $(`#results`).append(
      `<tr><th>${student.ID}</th><th>${student.FirstName}</th><th>${
        student.LastName
      }</th><th>${student.FacultyNumber}</th><th>${student.Grade}</th></tr>`
    )
  }
  createStudent()
}
async function createStudent () {
  let data = {
    ID: 1,
    FirstName: 'Jenny',
    LastName: 'Zaneva',
    FacultyNumber: '124343',
    Grade: 6
  }
  try {
    await $.ajax({
      type: 'POST',
      url: baseUrl + 'students',
      headers: authHeaders,
      contentType: 'application/json',
      data: JSON.stringify(data)
    })
  } catch (error) {
    console.log(error)
  }
}
