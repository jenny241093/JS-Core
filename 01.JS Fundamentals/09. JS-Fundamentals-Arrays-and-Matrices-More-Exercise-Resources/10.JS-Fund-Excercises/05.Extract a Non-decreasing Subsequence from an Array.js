function extract(arr) {
 
   let min = 0;
   let result = arr.reduce((acc,el)=>{
       if (el>=min) {
           acc.push(el);
           min = el;
       }
       return acc;
   },[]);
 
    console.log((result.join('\n')));
}extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )