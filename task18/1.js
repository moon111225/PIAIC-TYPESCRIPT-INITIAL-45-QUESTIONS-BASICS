"use strict";
let places = ["MAKKAH", "MADINAH", "SHAM", "BAGHDAD", "NAJAF"];
console.log(places);
console.log("\n");
let ascendingorder = places.sort();
console.log(`alphbetic order: ${ascendingorder}`);
console.log("\n");
console.log(places); // why its not printing actual array?
console.log("\n");
let descendingorder = places.sort((a, b) => b.localeCompare(a)); // therer is no direct method for descending order
console.log(`reverse alphbetic order:${descendingorder}`);
console.log("\n");
console.log(places); // why its not printing actual array?
console.log(places.sort());
