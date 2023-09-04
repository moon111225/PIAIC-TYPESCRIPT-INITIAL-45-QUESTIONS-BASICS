function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];

console.log("Original magician names:");
show_magicians(magicianNames);

make_great(magicianNames); // Modify magician names

console.log("\n Magician names after adding 'the Great':");
show_magicians(magicianNames); // Print modified names
