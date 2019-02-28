function solve(input) {



    function getRectangle(width, height) {

        return {
            width,
            height,
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(other) {
                if (other.area() - this.area() !== 0) {
                    return other.area() - this.area();
                }
                return other.width - this.width;
            }
        };
    }
    let rectangles = [];
    for (const [width, height] of input) {
        let rect = getRectangle(width, height);
        rectangles.push(rect);
    }
    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;
}
solve([
    [10, 5],
    [3, 20],
    [5, 12]
]);