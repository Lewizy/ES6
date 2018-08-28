//ES6 Getters and Setters

//Getter functions are meant to simply return (get) the value of an object's private variable to the user 
//without the user directly accessing the private variable.

//Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
//This change could involve calculations, or even overwriting the previous value completely.

// //ES6: Use getters and setters to Control Access to an Object

const log = console.log; 

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
log(lol.writer);  // anonymous
lol.writer = 'wut';
log(lol.writer);  // wut

// /////////////////////////////////////////////////////////////////////////////////////////

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{

    constructor (Fahrenheit){
      this.Fahrenheit = Fahrenheit; 
    }
    get temperature(){
      return 5/9 * (this.Fahrenheit - 32);
    }
    set temperature(Celcius){
      this.Fahrenheit = Celcius * 9.0/5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

////////////////////////////////////////////////////////////////////////////////////////////////////////



const nickelodeonCharacter = {
  firstName:"",
  lastName:"",
  get fullName (){
    return `${firstName} ${lastName}`;
  },
  set fullName (value){
    let joinEm = value.split(" ");
    this.firstName = joinEm[0];
    this.lastName = joinEm[1];
  }
};
let Jhonny = nickelodeonCharacter.fullName = "Jhonny Bravoski";
log(Jhonny);
