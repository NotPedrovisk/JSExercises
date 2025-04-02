const sumAll = function(num1,num2) {

    let minNumber = Math.min(num1,num2)
    let maxNumber = Math.max(num1,num2)

    let total = 0
    if((typeof (num1 && num2) != "number")||((num1 || num2)< 0)||((num1 || num2)%1 !=0)){
        return "ERROR"
        
    }
    else{
        
        for(let n = minNumber; n < maxNumber+1; n++){
                total += n
            }
    }
    
    console.log(minNumber, maxNumber)
    return total
};

// Do not edit below this line
module.exports = sumAll;
