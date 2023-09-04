function createCar(manufacturer: string, model: string, ...options: any[]): object {
    let carInfo: any = {
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
