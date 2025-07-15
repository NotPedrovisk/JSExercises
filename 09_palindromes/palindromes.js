const palindromes = function (arr) {
    const ALPHANUMERICAL = "abcdefghijklmnopqrstuvwxyz0123456789";

    let filteredString = arr.toLowerCase()
    .split("")
    .filter((character)=>ALPHANUMERICAL.includes(character))
    .join("");
    

    console.log(filteredString);

    let reversedString = filteredString.split("")
    .reverse()
    .join("");

    return filteredString === reversedString;
}

// Do not edit below this line
module.exports = palindromes;
