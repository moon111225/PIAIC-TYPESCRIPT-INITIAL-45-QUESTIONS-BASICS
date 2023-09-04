function orderSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with:");
    for (let item of items) {
        console.log("- " + item); // - to create a bullet point
    }
    console.log("Enjoy your sandwich!\n");
}

orderSandwich("Turkey", "Lettuce", "Tomato");
orderSandwich("Ham", "Cheese");
orderSandwich("Chicken", "Bacon", "Avocado", "Onion");