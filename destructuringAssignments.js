// //ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// //Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
const singleNums = {a:1,b:2,c:3};
const oddNumbers = {oddNum1:5,oddNum2:7,oddNum3:9};
const evenNumsArr = [4,6,8];

function destructuredParameters ({a,b,c},{max,min},{oddNum1,oddNum2,oddNum3}){

  //ES6: Use Destructuring Assignment to Assign Variables from Objects
  const voxel = {a:10,b:11,c:12,}; console.log(voxel.a,voxel.b,voxel.c);
  const {a:ten,b:eleven,c:twelve} = voxel; console.log(ten,eleven,twelve);
  
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
  
  console.log((a+b+c));//6
  const {a:numberOne,b:numberTwo,c:numberThree} = singleNums;
  console.log(numberOne); //1
  console.log("max&min: "+(max+min)/2);//28.015
  console.log("fourth :"+max+a);//56.781
  console.log("oddX3: "+oddNum3+numberThree);
  [x,y,z] = evenNumsArr;
  console.log("evenNumsArr :"+ (x+y));
  let restOperatorArr; 
  [...restOperatorArr]=[11,22,33,44,55];
  console.log("restOpeArr :"+restOperatorArr[3]*oddNum1);

  const half = (function() {
  "use strict"; // do not change this line
  return function half({max,min}) {
    return (max +min) / 2.0;
  };
  })();
  console.log(stats); // should be object
  console.log(half(stats));

  function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow: {max:maxOfTomorrow}} = forecast; 
  return maxOfTomorrow;
  }
  console.log("forecast: "+getMaxOfTmrw(LOCAL_FORECAST)); // 84.6

  function getLength(str) {
  "use strict";
  const {length:len} = str;
  return len;
  }
  console.log("length: "+getLength('codingIsAwesome'));
}
destructuredParameters(singleNums,stats,oddNumbers,evenNumsArr);//6
//destructuredObjParameters(stats);



