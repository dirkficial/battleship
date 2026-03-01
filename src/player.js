import Gameboard from "./gameboard.js";

export default class Player {
    constructor(playerType) {
        this.gameboard = new Gameboard();
        this.playerType = playerType;
    }

    attackEnemy(x, y, enemyBoard) {
        enemyBoard.receiveAttack(x, y);
    }

    randomAttack(enemyBoard) {
        let isValidTarget = false;
        let randomX;
        let randomY;

        while (isValidTarget === false) {
            randomX = Math.floor(Math.random() * 10);
            randomY = Math.floor(Math.random() * 10);

            const coordinate = randomY * 10 + randomX;

            if (enemyBoard.board[coordinate].isHit === false) {
                isValidTarget = true;
            }
        }

        enemyBoard.receiveAttack(randomX, randomY);
    }
}