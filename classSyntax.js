//ES6: Use class Syntax to Define a Constructor Function

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
var marooz = new SpaceShuttle('Mars');
console.log(zeus);
console.log(marooz);

class SpaceShuttle2 {
  constructors(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const plutonis = new SpaceShuttle('Pluto');
console.log(plutonis);

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
      constructor(name){
    this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

function createYourOwnClassSyntax (){
  "use strict";
   class FavoriteCereals{
     constructor (name,size){
       this.name = name;
       this.size = size;
     }
   }
  return FavoriteCereals;
}
const FavoriteCereals = createYourOwnClassSyntax();
const nameOfFavCereal = new FavoriteCereals("Oreos",15+" inches");
console.log(nameOfFavCereal);
