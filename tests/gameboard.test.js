import Gameboard from "../src/gameboard.js";

describe('Gameboard logic', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard();
    });

    test('places a ship horizontally on the board', () => {
        // place a horizontal ship size 3 coordinate 0 horizontal
        gameboard.placeShip(3, 0, false);

        expect(gameboard.board[0].hasShip).toBe(true);
        expect(gameboard.board[1].hasShip).toBe(true);
        expect(gameboard.board[2].hasShip).toBe(true);
        
        expect(gameboard.board[3].hasShip).toBe(false);
    });
    
    test('places a ship horizontally that moves onto the next row', () => {
        // place a horizontal ship size 3 coordinate 9 horizontal
        // should return false
        expect(gameboard.placeShip(3, 9, false)).toBe(false);

        // make sure the board didn't mutate
        expect(gameboard.board[9].hasShip).toBe(false);
    })
});