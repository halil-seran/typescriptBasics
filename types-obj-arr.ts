// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Halil",
//   age: 24,
//   hobbies: ["sport", "reading"],
//   role: [2, "author"],
// };

// in Tuple 
// person.role.push("admin");  ts bu hatayi yakalayamiyor 
// person.role[1] = 21; hatali izin vermiyor
// person.role[1] = "doctor" buna izin var
// parson.role = [1,"engineer"] buna da izin var

enum Role { ADMIN, READ_ONLY, AUTHOR }; //admin 0 , readonly 1 author 2 ye esit oldu
// eger sifirdan baslamasini istemiyorsak ilk elemente yani admin = 4 yazabiliriz 
// 4 ten baslar sirayla 5 ve 6 olur, eger istersek hepsine custom value atayabiliriz. 
//hatta text bile yazabiliriz admin = "adm" gibi

const person = {
    name: "Halil",
    age: 24,
    hobbies: ["sport", "reading"],
    role: Role.ADMIN,
  };


let favouriteActivities: string[]; //if array mixed any types, you can use any[]

favouriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //touppercase de hata vermedi cunku ts hobbynin bir string oldugunu biliyor
}
