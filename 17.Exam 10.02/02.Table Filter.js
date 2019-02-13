function solve(matrix, command) {
    let params = command.split(' ');
    let firstParam = params[1];
    let value = params[2];
    let filterIndex = 0;

    if (params[0] == `sort`) {
        console.log(matrix[0].join(' | '));
        delete matrix[0];
        matrix.sort(sortFunction);

        for (let index = 0; index < matrix.length; index++) {
            if (matrix[index] != undefined) {
                console.log(matrix[index].join(' | '));
            }

        }

        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0;
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }
    } else if (params[0] == `hide`) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[index].shift();
        }
        for (let index = 0; index < matrix.length; index++) {
            console.log(matrix[index].join(' | '));
        }
    } else if (params[0] == `filter`) {
        var searchedStr = params[2];
        var i = 0,
            k = 0,
            indx = [],
            msg;
        for (i = 1; i < matrix.length; i++) {
            for (k = 1; k < matrix[i].length; k++) {
                if (matrix[i][k] === searchedStr) { indx = [i, k]; break; }
            }
        }
        if (typeof indx[0] == "undefined" || typeof indx[1] == "undefined") { msg = ("Not found"); } else { msg = "i= " + indx[0] + " k= " + indx[1]; }

        filterIndex = indx[0];

        console.log(matrix[0].join(' | '));
        console.log(matrix[filterIndex].join(' | '));
    }

}
solve([
        ['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']
    ],
    'sort name'

)