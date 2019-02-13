function solve(){
  //TODO
  let text = document.getElementById("input").textContent;
  let paragraph = document.createElement('p');
  let sentences = text.split(".");
  let output = document.getElementById("output");
  for (let index = 0; index <=sentences.length; index++) {
    if ((index+1)%3===0) {
      output.appendChild(paragraph);
      paragraph = document.createElement('p');
    }
    const element = text[index];
    paragraph.textContent+=element+".";
  }
}