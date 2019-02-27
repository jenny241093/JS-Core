function sortedList() {
    let collection = (()=>{
        let numbers = [];
        let size = 0;
        const add =function(element){
        numbers.push(element);
        numbers.sort((a,b)=>a-b);
        this.size++;
        }
        const remove = function(index){
            validateIndex(index);
            numbers.splice(index,1);
            this.size--;
        }
        const get = (index)=>{
            validateIndex(index);
            return numbers[index];
        }
       const validateIndex = (index)=>{
            if (index<0||index>=numbers.length) {
                throw new RangeError('Index is outside the bounds of the array')
            }
        }
        return{
            add,
            remove,
            get,
            size
        }
    })()
    return collection;
}
let list = sortedList();
list.add(5);
list.add(4);
let atFirstPos = list.get(0);
let size = list.size;
console.log(size);

console.log(`....`);

