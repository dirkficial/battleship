import Gameboard from "./gameboard.js";

export default class Player {
    constructor(playerType) {
        this.gameboard = new Gameboard();
        this.playerType = playerType;
    }

    attackEnemy(coordinate, enemyBoard) {
        enemyBoard.receiveAttack(coordinate);
    }

    randomAttack(enemyBoard) {
        let isValidTarget = false;
        let coordinate;

        while (isValidTarget === false) {
            coordinate = Math.floor(Math.random() * 100);


            if (enemyBoard.board[coordinate].isHit === false) {
                isValidTarget = true;
            }
        }

        enemyBoard.receiveAttack(coordinate);
    }
}