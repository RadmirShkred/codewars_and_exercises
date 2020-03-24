const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft - distanceToPump >= 0;
};

console.log(zeroFuel(100, 50, 1));