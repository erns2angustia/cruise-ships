/*global describe it expects*/
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instatiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    });
    it('has a starting port', () => {
        const ship = new Ship ('Dover');
        expect(ship.startingPort).toBe('Dover');
    });