"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
let magicianNames = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];
console.log("Original magician names:");
show_magicians(magicianNames);
let greatMagicians = make_great([...magicianNames]); // Create a copy and modify by spread operator
console.log("\nMagician names after adding 'the Great':");
show_magicians(greatMagicians); // Print modified names
console.log("\n Original magician names remain unchanged:");
show_magicians(magicianNames); // Print original names
