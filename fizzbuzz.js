console.log('file required!')

debugger

 function FizzBuzz() {

 }

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}


FizzBuzz.prototype._isDivisibleBy = function(divisor, theNumber) {
  if (theNumber % divisor === 0) {
    return true;
  } else {
    return false;
  }
}


var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
