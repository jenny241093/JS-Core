function boxes(bottles,boxCapacity) {
    let neededBoxes = bottles/boxCapacity;

    return neededBoxes*boxCapacity>=bottles?Math.ceil(neededBoxes)
    :Math.ceil(neededBoxes)+1;
}
console.log(boxes(15, 7));