const increment = (function() {
    "use strict";
    return function increment(number=1, value=1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns NaN
