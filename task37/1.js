"use strict";
function make_shirt(size, message, color, sleeves) {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}.in ${color} color with ${sleeves} sleeves."`);
}
make_shirt("large", "I love TS");
make_shirt("medium", "I love TS");
make_shirt("small", "I love TS", "blue", "full");
