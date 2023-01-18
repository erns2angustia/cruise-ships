class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };
    addShip(ship) {
        this.ships.push(ship);
    };
    removeShip(ship) {
        const index = this.ships.indexOf(ship);
        if (index !== -1) {
            this.ships.splice(index, 1);
            return this.ship;
        }
    }
}
module.exports = Port;