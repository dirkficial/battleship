import Player from "./player.js";
import { renderBoard } from "./ui.js";

const player = new Player('real');
const comp = new Player('computer');

renderBoard(player.gameboard, "player-board")
renderBoard(computer.gameboard, "computer-board")