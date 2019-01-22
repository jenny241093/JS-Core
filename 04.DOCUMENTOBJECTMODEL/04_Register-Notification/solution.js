
 function register() {
  let username=document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let result = document.getElementById("result");
  let pattern = new RegExp(/(.+)@(.+).(com|bg)/);
  if (username&&pattern.test(email)!=null&&password) {
    setTimeout(() => {
      let titleElement = document.createElement('h1');
      titleElement.textContent = 'Successful Registration!';
      result.appendChild(titleElement);
      result.innerHTML +=`Username: ${username}`;
      var br = document.createElement("br");
      result.appendChild(br);
      result.innerHTML +=`Email: ${email}`;
      result.appendChild(br);
      let replacedPass = password.replace(/./g, '*');
      result.innerHTML +=`Password: ${replacedPass}`;
    }, (5000));
  }
 }
