let userInput: unknown; //we can store any value;
let userName: string;

userInput = 5;
userInput = "halil";
// userName = userInput; if we use any at first line, this line wouldnt gives an error
// any unknown un bir ust kumesi

if (typeof userInput === "string") {
  userName = userInput; // if we use if check then no error
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("an Error!", 332);
