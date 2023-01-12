const Dealership = require('./dealership')
const Car = require('./car')


let nadiasCar; 
let nadiasDealership;

beforeEach(() => {
    nadiasCar = new Car("Tesla", 200000, "Hybrid");
    bobsCar = new Car("Tesla", 90000, "Electric");
    michaelsCar = new Car("Hoyonda", 5000, "Petrol");
    nadiasDealership = new Dealership("BMW Warehouse", 15);
    nadiasDealership.addCars(nadiasCar);
    nadiasDealership.addCars(bobsCar);
    
});

describe('testing dealership methods', () => {

    test('can add car', () => {
        expected = michaelsCar;
        actual = nadiasDealership.addCars(michaelsCar);
        expect(actual).toBe(expected);
    });

    test('can count cars', () => {
        actual = 2;
        expected = nadiasDealership.countCars();
        expect(actual).toBe(expected);
    });


    test('Can return new array of car manufacturers', () => {
        expected = [ 'Tesla', 'Tesla' ];
        actual = nadiasDealership.carsManufacturers();
        expect(actual).toStrictEqual(expected);
    });

    test('Can return filtered array of specific car manufacturer', () => {
        expected = [
         { manufacturer: 'Tesla', price: 90000, engineType: 'Electric' },
         { manufacturer: 'Tesla', price: 5000, engineType: 'Petrol' }
      ];
        actual = nadiasDealership.filterManufacturer("Tesla");
        expect(actual.length).toBe(expected.length);

    })

    test('Can return total value of cars in stock in the dealership', () => {
        actual = 290000;
        expected = nadiasDealership.totalStockValue();
        expect(actual).toBe(expected);
    })


} )