//converting object into JSON String------------------>
var notesObject ={
  name:"Sudhanshu",  //it can be in single quotes 'Sudhanshu' but only in js not in JSON
  age:25
};

var JSONstring=JSON.stringify(notesObject);
console.log(JSONstring);
console.log(typeof JSONstring);

//converting JSON string into object--------------------->
var personString='{"name":"Sudhanshu","age":24}';
var person=JSON.parse(personString);
console.log("Name: "+person.name);
console.log("Age: "+person.age);

//To make a file, store the content and read the content--------------->
const fs=require('fs');
fs.writeFileSync("notes.json",JSONstring);

var notesString=fs.readFileSync('notes.json');
var note=JSON.parse(notesString);
console.log("Fetching json file.....");
console.log("Name: "+note.name);
console.log("Age: "+note.age);
