function getNext(){
    let n = document.getElementById('num').value;
    var seq=[+n]

    while(n!=1){
        if(n%2==0) n/=2
        else n=(n*3)+1

        seq.push(n)
    }
    let result = document.getElementById('result');
    result.textContent = seq.join(' ');
    result.textContent+=' ';
}

