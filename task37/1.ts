function make_shirt(size: string, message: string, color: string, sleeves: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}.in ${color} color with ${sleeves} sleeves."`);
}

make_shirt("large","I love TS")

make_shirt("medium","I love TS")

make_shirt("small","I love TS","blue","full")