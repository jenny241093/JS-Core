function NthElement(array) {
    let nth = +array[array.length-1];
    let str = '';
    array.pop();
    for (let i = 0; i < array.length; i+=nth) {
        const element = array[i]+"\n";
        str+=element;
    }
    return str;
}
console.log(NthElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
))