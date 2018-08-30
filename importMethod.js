"use strict";
capitalizeString("hello!");
import { capitalizeString } from "string_functions";

let log = console.log;

// "use strict";
// capitalizeString("hello!");
// import { capitalizeString } from "string_functions";

// //

// "use strict";
// import * as myCapString from "capitalize_strings";

// //

//Export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

export default function add(x,y) {
  return x + y;
}
add(7,8); log(add);

// "use strict";
import subtract from "math_functions";
subtract(7,4);


