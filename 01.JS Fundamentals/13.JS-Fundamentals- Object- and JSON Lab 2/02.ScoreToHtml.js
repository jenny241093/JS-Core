function score(json) {
   let objArr = JSON.parse(json);
   console.log('<table>');
   console.log(`<tr><th>name</th><th>score</th></tr>`);
 for (const obj of objArr) {
     let objectName = escapeHtml(obj.name);
    console.log(`   <tr><td>${objectName}</td><td>${obj.score}</td></tr>`);
 }
 console.log('</table>');
 function escapeHtml(unsafe) {
    return unsafe.toString().replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#39;");
 }
    
    
}
score('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')