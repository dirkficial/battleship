export default class Ship {
    constructor(length) {
        this.life = length;
        this.sunk = false;
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        if (this.hits === this.life) {
            this.sunk = true;
        }
        return this.sunk;
    }
}