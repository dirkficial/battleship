import Player from "./player.js";
import { renderBoard } from "./ui.js";

export default function startGame() {

    const player = new Player('real');
    const comp = new Player('computer');

    player.gameboard.placeShip(2, 1, false);
    player.gameboard.placeShip(3, 5, false);
    player.gameboard.placeShip(3, 12, false);
    player.gameboard.placeShip(4, 24, false);
    player.gameboard.placeShip(5, 52, false);

    comp.gameboard.placeShip(2, 1, false);
    comp.gameboard.placeShip(3, 5, false);
    comp.gameboard.placeShip(3, 12, false);
    comp.gameboard.placeShip(4, 24, false);
    comp.gameboard.placeShip(5, 52, false);

    const playTurn = (clickedIndex) => {
   
        if (comp.gameboard.isGameOver() || player.gameboard.isGameOver()) {
            return;
        }

        if (comp.gameboard.board[clickedIndex].isHit === true) {
            return;
        } else {
            player.attackEnemy(clickedIndex, comp.gameboard);
            renderBoard(comp.gameboard, "computer-board", playTurn);
        }
        
        if (comp.gameboard.isGameOver()) {
            return;
        }

        comp.randomAttack(player.gameboard);
        renderBoard(player.gameboard, "player-board", playTurn);
        
        if (player.gameboard.isGameOver()) {
            return;
        }
    }

    renderBoard(player.gameboard, "player-board", playTurn);
    renderBoard(comp.gameboard, "computer-board", playTurn);    
    
}

