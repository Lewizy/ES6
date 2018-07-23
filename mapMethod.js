const mapMethod = [-2,9.56,6,10.90];

let fractionsToIntegers = mapMethod.map(Math.floor);
console.log(fractionsToIntegers);//transform to integers

let absoluteMath = mapMethod.map(Math.abs);
console.log(absoluteMath);//no negetives

let maxNum = mapMethod.map(Math.ceil);
console.log(maxNum);//round up to max integer

let multiplyArray = mapMethod.map(x => x*15);
console.log(multiplyArray);//multiplying 

let randomIntegers = mapMethod.map(x => Math.floor(Math.random()*10));
console.log(randomIntegers);

let tenRandomNumbers = new Array(10).fill(0).map(x => Math.floor(Math.random()*5));
console.log(tenRandomNumbers);
