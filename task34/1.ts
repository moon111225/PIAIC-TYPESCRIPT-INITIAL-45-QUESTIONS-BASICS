let favoritePizzas: string[] = ['pepperoni', 'margherita', 'hawaiian'];

// Using a for loop to print the name of each pizza
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\n");

// Modifying the loop to print a sentence for each pizza
for (let pizza of favoritePizzas) {
    console.log("\n");
    console.log(`I like ${pizza} pizza.`);
}