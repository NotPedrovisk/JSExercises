//calculates age when arguments are given
const getAge = function(birth,death){
    //if no deathdate argument if provided, will use current date as death
    if(!death){
        death = new Date().getFullYear();
    }
    //subtracts birthdate from deathdate to get age
    return (death - birth)
}


const findTheOldest = function(people) {
    return people.reduce((oldest,current)=>{
        //uses getAge to calculate first persons age, that person will become the oldest
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        //on second iteration, will check second person(current)
        //if current persons age is older than oldest, current will become the oldest then will iterate through 
        //array until done
        if(oldestAge < currentAge){
            return current;
        } else{
            return oldest;
        };
        
    })
}


// Do not edit below this line
module.exports = findTheOldest;
