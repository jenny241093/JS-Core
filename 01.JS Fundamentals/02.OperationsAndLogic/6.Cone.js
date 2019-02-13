function coneAreaAndVolume(radius,height) {
    //V = (1/3)πr2h
    //Slant height of a cone:
//s = √(r2 + h2)
    //Lateral surface area of a cone:
//L = πrs = πr√(r2 + h2)
//Base surface area of a cone (a circle):
//B = πr2
//Total surface area of a cone:
//A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))
 let v = Math.PI * radius * radius * height / 3;
 let s = Math.sqrt((radius*radius)+(height*height));
 let l = Math.PI*radius*s;
 let b = Math.PI*(radius*radius);
 let area = l+b;
 console.log('volume = '+v);
 console.log('area = '+area);
}
coneAreaAndVolume(3, 5);