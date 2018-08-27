const log = console.log;

//The old way
let someGuy = {name:"Aaron",age:25,}

function displaySomeGuy (p){
  
  var name = p.name;
  var age = p.age;
  log(name); //Aaron
  log(someGuy); //displays the object
}
displaySomeGuy(someGuy);

//Newer way 

function newWayOfdisplayingSomeGuy (p){
  
  let {name,age} = p;
  log(`new way: ${name} is ${age}`);
  
}
newWayOfdisplayingSomeGuy(someGuy);

//Newest Way

function newestWayOfdisplayingSomeGuy ({name,age}){
  log(`newest way: ${name} and ${age}`);
}
newestWayOfdisplayingSomeGuy(someGuy);


let arrowFunctionWay = ({name,age})=>{
  log(`arrowFunction: ${name} and ${age}`);
}
arrowFunctionWay(someGuy);

