const removeFromArray = function(currentArray, toRemove) {

      //for loop maybe
      //for every item in array, check if it's the same as number to remove
      //if it is, remove number and return new array
    const beforeArray = currentArray
    const removable = toRemove

    //for every item in the array
    for(number of beforeArray){

        //if the current cheched item is equal to the variable passed on the function
        if(number == removable){

            //gets the index of the item to remove
            numberIndex = beforeArray.indexOf(number);
            //splice removes one item at the index of the item to remove, removing the item from array
            beforeArray.splice(numberIndex, 1)
            return beforeArray
        }
    }

};

// Do not edit below this line
module.exports = removeFromArray;
