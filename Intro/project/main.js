import { reverse } from "./reverse.js";

// index 2 holds the actual argument from the terminal.
let argument = process.argv[2];
console.log(reverse(argument));
