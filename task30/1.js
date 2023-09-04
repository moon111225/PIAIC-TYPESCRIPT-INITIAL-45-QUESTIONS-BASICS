"use strict";
let usernames = ["admin", "eric", "mark", "cindy", "ever", "alex"];
for (let person of usernames) {
    if (person === "admin") {
        console.log(`Hello ${person}, would you like to see a status report?`);
    }
    else {
        console.log(`\n`);
        console.log(`hello ${person}, thank you for logging in again.`);
    }
}
