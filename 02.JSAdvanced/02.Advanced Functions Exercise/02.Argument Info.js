function myFunc() {

    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        var type = typeof obj;
        console.log(type+': '+obj);
        if (!summary[type]) {
            summary[type]=1;
        }
        else{
            summary[type]++;
        }
    }
    Object.keys(summary).sort((a, b) => summary[b] - summary[a]).forEach((key) => {
        console.log(key + " = " + summary[key]);
    });

  //  Object.entries(sortedTypes).forEach(([key, value]) => console.log(key +' = '+value));
   
}
myFunc('cat', 42, function () { console.log('Hello world!'); });