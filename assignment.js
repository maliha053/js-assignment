// (1) Function to convert from feet to mile :
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile( /**Remove the text and input number here */ );
console.log(result);





//(2)Function to calculate total amount of wood :
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return 'Invalid Input';
    } else {
        var totalWood = (1 * chair) + (3 * table) + (5 * bed);
    }
    return totalWood;

}
result = woodCalculator( /**Remove the text and input number of chair,table,bed here */ );
console.log(result);





//(3)Function to calculate total number of bricks :       
function brickCalculator(floorNumbers) {
    if (floorNumbers <= 0) {
        return 'Invalid Input';
    } else if (floorNumbers >= 1 && floorNumbers <= 10) {
        var totalBricks = 15 * 1000 * floorNumbers;
    } else if (floorNumbers >= 11 && floorNumbers <= 20) {
        var totalBricks = (15 * 1000 * 10) + (12 * 1000 * (floorNumbers - 10));
    } else {
        var totalBricks = (15 * 1000 * 10) + (12 * 1000 * 10) + (10 * 1000 * (floorNumbers - 20));
    }
    return totalBricks;
}
var result = brickCalculator( /**Remove the text and input number of floors here */ );
console.log(result);





//(4)Function to find name of a friend consisting least number of letters :
var names = ['Tara', 'Sara', 'Zara', 'Zareen', 'Raisa', 'Ria'];
var smallestName = names[0];

function tinyFriend(names) {
    for (i = 0; i < names.length; i++) {
        if (names[i].length < smallestName.length) {
            smallestName = names[i];
        }
    }
    return smallestName;
}
var result = tinyFriend(names);
console.log(result);