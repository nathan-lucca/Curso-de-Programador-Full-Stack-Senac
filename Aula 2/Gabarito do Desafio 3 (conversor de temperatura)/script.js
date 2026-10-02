const celsius = 37;
const fahrenheit = 100;
const emF = (celsius * 9) / 5 + 32;
const emC = ((fahrenheit - 32) * 5) / 9;

console.log(`${celsius}°C equivale a ${emF}°F`);
console.log(`${fahrenheit}°F equivale a ${emC.toFixed(1)}°C`);
