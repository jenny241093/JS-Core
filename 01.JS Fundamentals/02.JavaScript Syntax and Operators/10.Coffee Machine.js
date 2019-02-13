function coffeeMachine(arr){
    let sum = 0;
        for(let i = 0; i < arr.length; i++){
            let split = arr[i].split(", ");
                 calculateDrinkCost(split);
        }
        function calculateDrinkCost(split) {
            let cost = 0;
            let insertedAmount = +split[0];
            let drink = split[1];
            let milk = split.includes("milk");
            let sugar = split[split.length - 1];
           
            if(drink == "coffee"){
                if(split.includes("caffeine")){
                    cost = 0.80;
                }else{
                    cost = 0.90;
                }
            }else{
                cost = 0.80;
            }
 
            if(milk) {
                cost = cost +  +(cost * 0.1).toFixed(1);
            }
 
            if(sugar > 0) {
                cost+= 0.1;
            }
 
            let change = Math.abs(cost - insertedAmount);
            if(insertedAmount >= cost){
                sum+=cost;
            console.log(`You ordered ${drink}. Price: ${cost.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            }else {
            console.log(`Not enough money for ${drink}. Need ${change.toFixed(2)}$ more.`)  
            }
        }
 
        console.log(`Income Report: ${sum.toFixed(2)}$`);
}
coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
'1.00, coffee, decaf, 0']
)