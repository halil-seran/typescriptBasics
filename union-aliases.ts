type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // we can add more than two | boolean | obj vs vs
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result; //+result = parseFloat(result);
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(30, 25, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "25", "as-number");
console.log(combineStringAges);

const combineNames = combine("Halil", "Ummuhan", "as-text");
console.log(combineNames);
