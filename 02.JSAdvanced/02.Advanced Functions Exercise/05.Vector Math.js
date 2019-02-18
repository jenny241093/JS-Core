let solution = (function () {
    const add = ([xA,yA],[xB,yB])=>{
         return [xA+xB,yA+yB];
    }
    const multiply = ([xA,xB],scalar)=>{
       return[xA*scalar,xB*scalar];
    }
    const length = ([xA,xB])=>{
          return Math.sqrt(xA**2+xB**2);
    }
    const dot = ([xA,yA],[xB,yB])=>{
return xA*xB+yA*yB;
    }
    const cross = ([xA,yA],[xB,yB])=>{
        return xA*yB-xB*yA;
    }
       return{
            add,
            multiply,
            length,
            dot,
            cross
       }
})()
console.log(solution.multiply([3.5, -2], 2));
