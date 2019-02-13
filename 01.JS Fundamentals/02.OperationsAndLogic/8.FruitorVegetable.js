function fruitOrVegetable(word) {
    switch (word) {
      case 'banana':
      case 'apple':
      case 'kiwi':
      case 'cherry':
      case 'lemon':
      case 'grapes':
      case 'peach':
        console.log('fruit');
        break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion': 
        case 'parsley':
        case 'garlic':
          console.log('vegetable');
          break;
        default:
          console.log('unknown');
      }
    }
    
fruitOrVegetable('cucumber');

function fruitOrVegetable(name) {
    let fruits = [ 'banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach' ];
    let vegetables = [ 'tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley' ];

    let result = fruits.indexOf(name) >= 0 ? 'fruit'
        : vegetables.indexOf(name) >= 0 ? 'vegetable'
        : 'unknown';

    console.log(result);
}

fruitOrVegetable('apple');