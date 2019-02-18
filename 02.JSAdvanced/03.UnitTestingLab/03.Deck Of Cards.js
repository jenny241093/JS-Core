function printDeckOfCards(cards) {
    function makeCard(face,suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'J', 'Q','K', 'A'];
        const suits = {
            'S':'\u2660',
            'H':'\u2665',
            'D':'\u2666',
            'C':'\u2663'
        };
        if (!faces.includes(face) || !suits[suit]) {
         let error = new Error('Error');  
         error.card = face+suit;
         throw error;
        }
    
        let card = {
            face:face,
            suit:suits[suit],
            toString:function () {
                return this.face+this.suit;
            }
        };
        return card;
    }
    let card = makeCard('A','S');
    
    
try {
  let cardResult = cards.map(x=>{
  let c= x.split('');
  let s = c.pop();
  return makeCard(c.join(''),s);
});
console.log(cardResult.join(''));

} catch (error) {
    console.log(`Invalid card: ${error.card}`);
    
}
  // TODO process input
}
printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']);