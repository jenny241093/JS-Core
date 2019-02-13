function intersection() {
    var result = [];
    var lists;
  
    if(arguments.length === 1) {
      lists = arguments[0];
    } else {
      lists = arguments;
    }
  
    for(var i = 0; i < lists.length; i++) {
      var currentList = lists[i];
      for(var y = 0; y < currentList.length; y++) {
          var currentValue = currentList[y];
        if(result.indexOf(currentValue) === -1) {
          var existsInAll = true;
          for(var x = 0; x < lists.length; x++) {
            if(lists[x].indexOf(currentValue) === -1) {
              existsInAll = false;
              break;
            }
          }
          if(existsInAll) {
            result.push(currentValue);
          }
        }
      }
    }
    result.sort();
    let finalResult = result.join(', ');
    console.log('The common elements are '+finalResult+'.');
    average(result);
    console.log('Median: '+median(result)+'.');
    function average(result) {
        let sum = 0;
        for (let index = 0; index < result.length; index++) {
            const element = +result[index];
            sum+=element;
        }
        console.log('Average: '+sum/result.length+'.');
    }
    function median(numbers) {
        const sorted = numbers.slice().sort();
        const middle = Math.floor(sorted.length / 2);
    
        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        }
    
        return sorted[middle];
    }
  }
  intersection([5, 6, 50, 10, 1, 2],
    [5, 4, 8, 50, 2, 10], 
    [5, 2, 50]
    )