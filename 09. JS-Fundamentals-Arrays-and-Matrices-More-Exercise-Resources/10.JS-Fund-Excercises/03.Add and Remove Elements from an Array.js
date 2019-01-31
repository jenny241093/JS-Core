function addAndRemove(array) {
    let start = 1;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element=='add') {
            result.push(start);
            start++;
        }
        else{
            result.pop();
            start++;
        }
    }
    if (result.length>0) {
        return result.join("\n");
    }
    else{
        return "Empty";
    }
    
}addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']

)