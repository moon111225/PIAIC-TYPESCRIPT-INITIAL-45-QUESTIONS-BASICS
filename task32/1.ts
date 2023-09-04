let current_users =["abid","ali","shakeel","rehman","rizwan"]
let new_users =["abid","ali","javed","siddiqui","usama"]

for (let newUsername of new_users) {
    let isTaken = false; // to track whether the current new username is already taken.

    for (let currentUser of current_users) {
        if (newUsername.toLowerCase() === currentUser.toLowerCase()) {
            isTaken = true; //If a match is found
            break; //to stop the iteration if found
        }
    }

    if (isTaken) {
        console.log(`\n`)
        console.log(`The username '${newUsername}' is not available. Please enter a new username.`);
    } else {
        console.log(`\n`)
        console.log(`The username '${newUsername}' is available.`);
    }
}