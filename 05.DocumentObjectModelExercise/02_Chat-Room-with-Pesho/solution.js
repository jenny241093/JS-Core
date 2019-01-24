function solve() {
 let myBtn = document.getElementsByTagName('button')[0];
 let peshoBtn = document.getElementsByTagName('button')[1];
 let inputFields = Array.from(document.getElementsByTagName('input'));
 myBtn.addEventListener("click", displayMyMessage);
 function displayMyMessage() {
     let myMess = document.getElementById("myChatBox").value;
     let span = document.createElement("span");
     let p = document.createElement("p");
     let div = document.createElement("div");
     span.textContent = 'Me';
     p.textContent = myMess;

     div.style.textAlign = 'left';
     div.appendChild(span);
     div.appendChild(p);
     let chronologyDiv = document.getElementById("chatChronology");
     chronologyDiv.appendChild(div);
     inputFields[0].value="";
     

 }
 peshoBtn.addEventListener("click", displayPeshoMessage);
 function displayPeshoMessage() {
    let myMess = document.getElementById("peshoChatBox").value;
    let span = document.createElement("span");
    let p = document.createElement("p");
    let div = document.createElement("div");
    span.textContent = 'Pesho';
    p.textContent = myMess;

    div.style.textAlign = 'right';
    div.appendChild(span);
    div.appendChild(p);
    let chronologyDiv = document.getElementById("chatChronology");
    chronologyDiv.appendChild(div);
    inputFields[1].value="";
 }
}