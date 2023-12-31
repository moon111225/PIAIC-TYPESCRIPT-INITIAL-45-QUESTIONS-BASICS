"use strict";
let favoriteColor = "blue";
console.log("Is the favorite color 'blue'? I predict True.");
console.log(favoriteColor === 'blue');
console.log("\n");
let userInput = 'Yes';
console.log("Is the user input 'yes' (case-insensitive)? I predict true.");
console.log(userInput.toLowerCase() === 'yes');
console.log("\n");
let age = 25;
let score = 90;
console.log("Is the age equal to 25? I predict True.");
console.log(age === 25);
console.log("Is the score not equal to 85? I predict True.");
console.log(score !== 85);
console.log("Is the age greater than 18? I predict True.");
console.log(age > 18);
console.log("Is the score less than 100? I predict True.");
console.log(score < 100);
console.log("Is the age greater than or equal to 30? I predict False.");
console.log(age >= 30);
console.log("Is the score less than or equal to 80? I predict False.");
console.log(score <= 80);
console.log("\n");
let hasLicense = true;
let hasCar = false;
console.log("Does the person have a license and a car? I predict False.");
console.log(hasLicense && hasCar);
console.log("Does the person have a license or a car? I predict True.");
console.log(hasLicense || hasCar);
let temperature = 25;
let isSunny = true;
console.log("Is it a sunny day and the temperature is above 20°C? I predict True.");
console.log(isSunny && temperature > 20);
console.log("Is it a sunny day or the temperature is above 30°C? I predict True.");
console.log(isSunny || temperature > 30);
let isWeekend = false;
let isHoliday = true;
console.log("Is it a weekend and a holiday? I predict False.");
console.log(isWeekend && isHoliday);
console.log("Is it a weekend or a holiday? I predict True.");
console.log(isWeekend || isHoliday);
console.log("\n");
let colors = ['red', 'green', 'blue'];
let targetColor = 'green';
console.log(`Is ${targetColor} in the array? I predict True.`);
console.log(colors.includes(targetColor)); // .includes() is built in method to find perticular element in the array
console.log("\n");
let animals = ['dog', 'cat', 'elephant', 'lion'];
let searchAnimal = 'giraffe';
console.log(`Is ${searchAnimal} not in the array? I predict false.`);
console.log(animals.includes(searchAnimal));
console.log(!animals.includes(searchAnimal)); //can use ! operator to make it true
