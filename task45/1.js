"use strict";
function createCar(manufacturer, model, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
const car = createCar("Toyota", "Camry", "color", "blue", "year", 2022);
console.log(car);
