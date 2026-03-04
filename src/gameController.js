import Player from "./player.js";
import { renderBoard } from "./ui.js";

const player = new Player('real');
const comp = new Player('computer');

renderBoard(player.gameboard, "player-board")
renderBoard(comp.gameboard, "computer-board")

player.gameboard.placeShip(2, 1, false);
player.gameboard.placeShip(3, 5, false);
player.gameboard.placeShip(3, 12, false);
player.gameboard.placeShip(4, 24, false);
player.gameboard.placeShip(5, 52, false);

renderBoard(player.gameboard, "player-board")
renderBoard(comp.gameboard, "computer-board")