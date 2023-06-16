

// const fs = require("fs"); 

// console.log("hello I started"); 

// fs.writeFile("message.txt","hello I am using writeFile function from fs module",(err=> {
//     if (err) throw err;
//     console.log("The file has been saved properly");
// }));


// -------------------------------------------------------------------------------------------------------------------------------------

// fs.readFile("./message.txt","utf-8",(err,data)=> {
//     if (err) throw err;
//     console.log(data);
// }  );


// ====================================================================================================================================

// var generateName = require("sillyname");  // created function called generateName();

import generateName from "sillyname";

var createName = generateName();  //called that function and value got saved in createName;

console.log('My name is '+ createName+ ".");  // it will print any random name.

// =================================================================================================================================

import superheroes from "superheroes";

var superHeroName =  superheroes.random();

console.log(" i am "+ superHeroName);






