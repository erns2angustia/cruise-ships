/*global describe it expects*/
const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instatiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a current port name', () => {
        const port = new Port('name');
        expect(port.name).toBe('name');
    });
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic]);
    });
    });
