const convertToCelsius = function(temperature) {
  temperature=(temperature-32)*5/9;
  // temperature=Math.round(temperature);
  temperature=parseFloat(temperature.toFixed(1))
  return temperature;
};

const convertToFahrenheit = function(temperature) {
  temperature=(temperature*(9/5)+32);
  // temperature=Math.round(temperature);
  temperature=parseFloat(temperature.toFixed(1));
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
