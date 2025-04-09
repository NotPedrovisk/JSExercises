const convertToCelsius = function(fah) {
  let convertedCel = (fah - 32) * 5/9;
  let roundedCel = Math.round(convertedCel * 10)/10
  return roundedCel
};

const convertToFahrenheit = function(cel) {
  let convertedFah = ((cel * 9/5) + 32);
  let roundedFah = Math.round(convertedFah * 10)/10
  return roundedFah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
