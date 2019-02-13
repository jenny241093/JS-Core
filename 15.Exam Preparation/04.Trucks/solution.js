function solve() {
    let buttons = document.getElementsByTagName('button');

    let obj = {
        'backupTireSets': []
    };

    let fieldSets = document.getElementsByTagName('fieldset');
    let output = document.querySelector('textarea');
    buttons[0].addEventListener('click', addNewTruck);
    buttons[1].addEventListener('click', addNewTires);
    buttons[2].addEventListener('click', work);
    buttons[3].addEventListener('click', endOfShift);

    function addNewTruck() {
        let plateNum = document.getElementById('newTruckPlateNumber').value;
        let tires = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);
        if (!obj[plateNum]) {
            obj[plateNum] = {
                tires,
                'distance': 0
            }
            let currentTruck = createElement('div', plateNum, 'truck');
            let parentTruck = fieldSets[4].lastElementChild;
            parentTruck.appendChild(currentTruck);
        }

    }

    function addNewTires() {
        let tires = document.getElementById('newTiresCondition').value.split(' ').map(Number);

        obj.backupTireSets.push(tires);
        let currentTireSet = createElement('div', tires.join(' '), 'tireSet');
        let parentTruck = fieldSets[3].lastElementChild;
        parentTruck.appendChild(currentTireSet);


    }

    function work() {
        let plateNum = document.getElementById('workPlateNumber').value;
        let distance = Number(document.getElementById('distance').value);
        console.log('backup', obj.backupTireSets.length);
        console.log('BACKUPSET', obj.backupTireSets[0]);
        if (obj.hasOwnProperty(plateNum)) {
            let results = areTiresGoodEnough(obj[plateNum].tires, distance);
            if (results.finalResult) {
                obj[plateNum].distance += distance;
                obj[plateNum].tires = results.testedTires;
            } else if (obj.backupTireSets.length > 0) {
                let backupSet = obj.backupTireSets[0];
                console.log(backupSet);
                let results = areTiresGoodEnough(backupSet, distance);

                if (results.finalResult) {
                    obj[plateNum].distance += distance;
                    obj[plateNum].tires = results.testedTires;
                    obj.backupTireSets.shift();
                }

                let truckHolder = fieldSets[3].lastElementChild;
                let usedTires = document.querySelector('div.tireSet');
                usedTires.remove();
            }

        }


    }

    function endOfShift() {
        Object.keys(obj).filter((plateNumber) => plateNumber !== 'backupTireSets').forEach((plate) => {
            output.value += `Truck ${plate} has traveled ${obj[plate].distance}.\n`
        })
        output.value += `You have ${obj.backupTireSets.length} sets of tires left.\n`;
    }

    function areTiresGoodEnough(tires, distance) {
        let dist = distance / 1000;
        let result = {
            'testedTires': [],
            'finalResult': false
        };
        tires.forEach((tire) => {
            result.testedTires.push(tire - dist);
        });

        if (result.testedTires.every((e) => e >= 0)) {
            result.finalResult = true;
        }
        return result;
    }

    function createElement(type, text, className) {
        let element = document.createElement(type);
        element.textContent = text;
        element.classList.add(className);
        return element;
    }

}