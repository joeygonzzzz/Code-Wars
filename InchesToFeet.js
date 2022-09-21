// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.


function inchesToFeet(inches) {
    if (inches < 12) {
      return Math.floor(inches / 12);
    } else {
      return inches / 12;
    }
  }
