const removeFromArray = function(currentArray, ...toRemove) {

let array = (currentArray);

let newArray = array.filter(n =>!toRemove.includes(n))


return newArray
};


// Do not edit below this line
module.exports = removeFromArray;
