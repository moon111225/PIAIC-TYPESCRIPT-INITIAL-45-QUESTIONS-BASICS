let usernames = ["admin", "eric", "mark", "cindy", "ever", "alex"]; //Q31 point 2. blank array is answer ←
let age = 32;

if (usernames.length === 0) {
    console.log("We need to find some users!"); // Q31. point 1. answer ←
} else {
    if (age < 2) {
        console.log("The person is a baby.");
    }
    if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    }
    if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    }
    if (age >= 65) {
        console.log("The person is an elder.");
    }
}
