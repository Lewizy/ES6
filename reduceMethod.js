let reduceMethod = [1,2,3,4,5,6,7,8,9,10,11];
let ini = 0;

for(let i=0;i<reduceMethod.length;i++){
  ini+= reduceMethod[i];
}console.log(ini);//10

let ini2 = 0;
for (let theArray of reduceMethod){
  ini2 += theArray;  
}console.log(ini2);//10


var result = reduceMethod.reduce((initilizer,myArray) => initilizer+myArray);
console.log(result);//10

let greaterThanFive = reduceMethod.reduce((a,b) => b>a?b:a);
console.log(greaterThanFive);

