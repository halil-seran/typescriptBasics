function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // void means this func doesnt have return statement
  console.log("Result: " + num);
}

function printResult2(num: number): undefined {
  // this is very rare, almost same with upside func.
  //
  console.log("Result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

//let value: undefined; // undefined is also an variable

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
// burada combineValuesi ozellestirdik yani bir func atayabiliriz fakar bu func variable ismi farketmeksizin
// 2 parametre alicak number olucak bunlar, sonra returnu de number olucak; boyle bir func olmak zorunda

combineValues = add;
// combineValues = printResult; burada hata veriyor cunku number return u yok;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
