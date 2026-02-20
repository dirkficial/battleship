import Ship from "../src/ship.js";

describe('ship functions', () => {
    testCarrier = new Ship(5);
    test('accepts a hit', () => {
        testCarrier.hit();
        expect(testCarrier.hits).toEqual(1);
    });

    test('sinks when fully hit', () => {
        testCarrier.hit(); testCarrier.hit(); testCarrier.hit();
        testCarrier.hit(); testCarrier.hit();
        expect(testCarrier.isSunk()).toBeFalsy();
    })
})