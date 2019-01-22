function solve() {
  let buttons = document.getElementsByTagName("a");
  let spans = document.getElementsByTagName("span");
  let softuniCount = 1;
  let googleCount = 2;
  let youtubeCount = 3;
  let wikiCount = 4;
  let gmailCount = 5;
  let soCount = 6;

  let softuniBtn = buttons[0];
  let softuniSpan = spans[0];
  

  softuniBtn.addEventListener("click", function(){
    softuniCount++;
    softuniSpan.textContent = "Visited: " +softuniCount + " times";
  });

  let googleBtn = buttons[1];
  let googleSPan = spans[1];

  googleBtn.addEventListener("click", function(){
    googleCount++;
    googleSPan.textContent = "Visited: " + googleCount + " times";
  });

  let youtubeBtn = buttons[2];
  let youtubeSPan = spans[2];
  youtubeBtn.addEventListener("click", function(){
    youtubeCount++;
    youtubeSPan.textContent = "Visited: " + youtubeCount + " times";
  });

  let wikiBtn = buttons[3]; 
  let wikiSPan = spans[3];
  wikiBtn.addEventListener("click", function(){
    wikiCount++
    wikiSPan.textContent = "Visited: " + wikiCount + " times";
  });
  let gmailBtn = buttons[4];
  let gmailSPan = spans[4];
  gmailBtn.addEventListener("click", function(){
    gmailCount++;
    gmailSPan.textContent = "Visited: " + gmailCount + " times";
  });
  let soBtn = buttons[5];
  let soSPan = spans[5];
  soBtn.addEventListener("click", function(){
    soCount++;
    soSPan.textContent = "Visited: " +soCount + " times";
  });
}