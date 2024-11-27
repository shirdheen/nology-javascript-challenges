// Challenge #1 - Calculating Moon Orbits

function moonOrbits(earthDays) {
  const orbits = Math.round(earthDays / 27.32);
  return orbits;
}

console.log(moonOrbits(365));

// Challenge #2 - Working with Circles

function circleArea(r) {
  area = Math.PI * r ** 2;
  return area;
}

function circlePerimeter(r) {
  perimeter = 2 * Math.PI * r;
  return perimeter;
}

console.log(circleArea(10));
console.log(circlePerimeter(10));

// Challenge #3 - Years to Days & Seconds

function ageInDays(age) {
  days = age * 365;
  return days;
}

function ageinSeconds(age) {
  seconds = age * 365 * 24 * 60 * 60;
  return seconds;
}

console.log(ageInDays(32));
console.log(ageinSeconds(32));

// Challenge #4 - Return the Remainder for Two Numbers

function remainder(num1, num2) {
  rem = num1 % num2;
  return rem;
}

console.log(remainder(-9, 45));

// Challenge #5 - Basketball Points

function basketballPoints(twoP, threeP) {
  score = 2 * twoP + 3 * threeP;
  return score;
}
console.log(basketballPoints(2, 3));

// Challenge #6 - Less than 100?

function lessThan100(num1, num2) {
  const sum = num1 + num2;
  if (sum < 100) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(lessThan100(83, 34));
