/*global describe it expects*/
const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instatiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a current port name', () => {
        const port = new Port('name');
        expect(port.name).toBe('name');
    })
    });
