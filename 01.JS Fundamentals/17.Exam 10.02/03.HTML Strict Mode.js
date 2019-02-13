function solve(input) {
    const regex = /(<([\w]+)>)+(.+)<\/\2>/;
    let output = [];
    input.forEach(element => {


        var str = element;

        var res = regex.exec(str)[3];
        output.push(res);

    });
    console.log(output.join(' '));

}
solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>'
])