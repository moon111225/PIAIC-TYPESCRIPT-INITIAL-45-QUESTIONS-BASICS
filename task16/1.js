"use strict";
let guestlist = ["Ismat", "Abdurrauf", "Shakeel"];
console.log(`I invite you for special dinner ${guestlist[0]}.`);
console.log(`I invite you for special dinner ${guestlist[1]}.`);
console.log(`I invite you for special dinner ${guestlist[2]}.`);
console.log("\n");
console.log(`I am sorry to hear that Miss ismat is very ill so she cant join us in the dinner`);
console.log("\n");
guestlist.splice(0, 1, "Rizwan");
console.log(guestlist);
console.log("\n");
console.log(`I invite you for special dinner ${guestlist[0]}.`);
console.log(`I invite you for special dinner ${guestlist[1]}.`);
console.log(`I invite you for special dinner ${guestlist[2]}.`);
console.log("\n");
console.log(`hey guise glad to tell you i found bigger table for dinner so now i can invite more friends.`);
guestlist.unshift("Arisha");
guestlist.splice(3, 0, "Toqeer");
guestlist.push("usama");
console.log(guestlist);
console.log(`I invite you for special dinner ${guestlist[0]}.`);
console.log(`I invite you for special dinner ${guestlist[1]}.`);
console.log(`I invite you for special dinner ${guestlist[2]}.`);
console.log(`I invite you for special dinner ${guestlist[3]}.`);
console.log(`I invite you for special dinner ${guestlist[4]}.`);
console.log(`I invite you for special dinner ${guestlist[4]}.`);