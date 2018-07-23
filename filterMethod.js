const filterMethod = [-2,9.5,6,10.90,3,7,undefined,-5,8,4,5];

let evenNumbers = filterMethod.filter(x => (x % 2==0 ));
console.log(evenNumbers);
 
let oddNumbers = filterMethod.filter(x => (x % 2==1 ));
console.log(oddNumbers);

let greaterThanFive = filterMethod.filter((x) => x>5);
console.log(greaterThanFive);

let filterUndefined = filterMethod.filter(x => x !== undefined);
console.log(filterUndefined);
//let filterUndefined = filterMethod.filter(x => x);filter undefined
//let filterUndefined = filterMethod.filter(x => !x);filter not undefined

let evenNumbers1 = filterMethod.filter(x => !(x % 2));
console.log(evenNumbers1);



