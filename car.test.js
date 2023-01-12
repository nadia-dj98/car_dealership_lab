const Car = require('./car');

let nadiasCar; 

beforeEach(() => {
    nadiasCar = new Car("BMW", 200000, "Hybrid");
})

describe('accessing car properties', () => {
   test('can access the manufacturer property', () => {
    expected = "BMW";
    actual = nadiasCar.manufacturer;
    expect(actual).toBe(expected);

    }); 

    test('can access price property', () => {
        expected = 200000;
        actual = nadiasCar.price;
        expect(actual).toBe(expected);
    })

    test('can access engineType property', () => {
        expected = "Hybrid";
        actual = nadiasCar.engineType;
        expect(actual).toBe(expected);
    })
});
