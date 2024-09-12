let colors = require("colors")
let {format, parse} = require("@formkit/tempo")

const readable = format(new Date(), "full")

console.log("Hola".red);
console.log(parse(readable, "full"));
