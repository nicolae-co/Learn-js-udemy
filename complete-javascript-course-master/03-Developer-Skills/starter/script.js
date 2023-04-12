// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));


// PROBLEM 1:
// We work for a company building smart home thermometer. Our most recent task is : "Given an array of temperatures of one day, calculate the pemperature amplitude. keep in mid that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temperature

// 1) Undersatnding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge the two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

*/

// Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    //value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurment);

  // console.log(measurment.value);
  // console.warn(measurment.value);
  // console.error(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) INDETIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);
