let age = 25;
let temperature = 20;
let isRaining = true;
let hasPermission = false;
let fruit = 'apple';

console.log("test01")

console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18); 
console.log("\n")

console.log("test02")
console.log("Is temperature less than 10 degrees Celsius? I predict False.");
console.log(temperature < 10);
console.log("\n")

console.log("test03")
console.log("Is it raining and the temperature is below 15 degrees? I predict True.");
console.log(isRaining && temperature < 15); 
console.log("\n")


console.log("test04")
console.log("Does the user have permission? I predict False.");
console.log(hasPermission); //
console.log("\n")

console.log("test05")
console.log("Is the fruit 'banana' or 'orange'? I predict False.");
console.log(fruit === 'banana' || fruit === 'orange'); 
console.log("\n")

console.log("test06")
console.log("Is age not equal to 30? I predict True.");
console.log(age !== 30); 
console.log("\n")

console.log("test07")
console.log("Is fruit an empty string? I predict False.");
console.log(fruit === ''); 
console.log("\n")

console.log("test08")
console.log("Is temperature between 15 and 25 degrees? I predict True.");
console.log(temperature > 15 && temperature < 25); 
console.log("\n")

console.log("test09")
console.log("Does age + temperature equal 45? I predict true.");
console.log(age + temperature === 45); 
console.log("\n")

console.log("test10")
console.log("Is age less than 21 or has permission? I predict false.");
console.log(age < 21 || hasPermission); 