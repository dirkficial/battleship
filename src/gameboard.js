import Ship from "./ship.js";

export default class Gameboard {
    constructor() {
        this.board = [];
        for (let i = 0; i < 100; i++) {
            this.board.push({hasShip: false, isHit: false});
        }
        this.ships = [];
    }

    placeShip(size, coordinate, isVertical) {
        const indicies = []
        if (isVertical) {
            for (let i = coordinate; i < coordinate + size*10; i += 10) {
                indicies.push(i);
            }
        } 
        if (!isVertical) {
            if ((coordinate % 10) + size > 10) {
                    return false;
            }
            for (let i = coordinate; i < coordinate + size; i++) {
                indicies.push(i);
            }
        }

        for (const idx of indicies) {
            if (idx > 99 || idx < 0) {
                return false;
            }

            if (this.board[idx].hasShip === true) {
                return false;
            }
        };
        
        const ship = new Ship(size);
        this.ships.push(ship);
        indicies.forEach(idx => {
            this.board[idx].hasShip = true;
            this.board[idx].ship = ship;
        })
    }

    receiveAttack(x, y) {
        const coordinate = y*10 + x;
        if (this.board[coordinate].isHit === true) {
            return false;
        }

        if (coordinate < 100 && coordinate >= 0) {
            if (this.board[coordinate].hasShip) {
                this.board[coordinate].ship.hit();
                this.board[coordinate].isHit = true;
            }
        } 
    }

    isGameOver() {
        return this.ships.every(ship => ship.isSunk());
    }
}