const Car = require("./car");

const Dealership = function(name, maxNumberOfCars) {
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.cars = [];
} 



Dealership.prototype.addCars = function (car) {
     this.cars.push(car);   
     return car;
}


Dealership.prototype.countCars = function () {
    return this.cars.length;

}


nadiasCar = new Car("BMW", 200000, "Hybrid");
bobsCar = new Car("Tesla", 90000, "Electric");
michaelsCar = new Car("Tesla", 5000, "Petrol");
nadiasDealership = new Dealership("BMW Warehouse", 15);
nadiasDealership.addCars(bobsCar);
nadiasDealership.addCars(michaelsCar);



Dealership.prototype.carsManufacturers = function() {
    return this.cars.map(car => car.manufacturer)
}


Dealership.prototype.filterManufacturer = function (manufacturer) {
    return this.cars.filter((car) => car.manufacturer === manufacturer);
}


Dealership.prototype.totalStockValue = function () {
    return this.cars.reduce((reducer, car) => reducer + car.price, 0);

}

const totalVal = nadiasDealership.totalStockValue();
console.log(totalVal);


// console.log(carWarehouse);
// Dealership.prototype.addCarToStock = function(addCarToStock) {
//     this.car = 
// }




module.exports = Dealership;