//ES6: Use Destructuring Assignment to Assign Variables from Objects
//reassigning values
const voxel = {a:10,b:11,c:12,};
//console.log(voxel.a,voxel.b,voxel.c);

//Assingning values from voxel to other values
const {a:ten,b:eleven,c:twelve} = voxel;
//console.log(ten,eleven,twelve);

//Use destructuring to obtain the length of the input string str, and //assign the length to len in line.
function getLength(str) {
  "use strict";
  const {length:len} = str;
  return len;
}
console.log("length: "+getLength('FreeCodeCamp'));
/////////////////////////////////////////////////////////////

//ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow: {max:maxOfTomorrow}} = forecast; 
  return maxOfTomorrow;
}
console.log("forecast: "+getMaxOfTmrw(LOCAL_FORECAST)); // 84.6
//////////////////////////////////////////////////////////////

let arrNumbers = [56,4,3,66,8];
[a, b] = arrNumbers;
console.log("arrNumbers: "+a,b);


let number1,number2,restOfNumbers;

[number1,number2,...restOfNumbers] = [44,55,66,77,88,99];
console.log("#1:"+number1+", #2:"+number2);//44,55
console.log("rest: "+restOfNumbers);//66,77,88,99

({...randomNumbers} = {a:13,b:242,c:37,d:45,e:-99});
const {...randomNumbers2} = {a:13,b:242,c:37,d:45,e:-99};
const {...randomNumbers3} = [13,242,37,45,-99];

console.log(randomNumbers);
console.log(randomNumbers2);
console.log(randomNumbers3);


///////////////////////////////////////////////////////////////
