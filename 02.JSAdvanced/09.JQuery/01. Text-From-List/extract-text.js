function extractText() {
<<<<<<< HEAD
   let items = $("ul#items li")
     .toArray()
     .map(li => li.textContent)
     .join(", ");
   $("#result").text(items);
 }
 
=======
    let result = $('li')
        .toArray()
        .map((x) => x.textContent)
        .join(', ');
    $('#result').text(result);
}
>>>>>>> bab0fb2bcae2b3cb3194b5b49ea999b48e380af6
