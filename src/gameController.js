import Player from "./player.js";
import { renderBoard } from "./ui.js";

export default function startGame() {

    const player = new Player('real');
    const comp = new Player('computer');

    const ships = [5, 4, 3, 3, 2];
    let isVertical = true;
    let isPlacing = true;


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
            renderBoard(comp.gameboard, "computer-board", { onClick: playTurn });
        }
        
        if (comp.gameboard.isGameOver()) {
            return;
        }

        comp.randomAttack(player.gameboard);
        renderBoard(player.gameboard, "player-board");
        
        if (player.gameboard.isGameOver()) {
            return;
        }
    }

    const toggleVertical = () => {
        isVertical = !isVertical;
    }

    const handleHoverLeave = (idx) => {
        const cells = document.querySelectorAll('.cell')

        for (const cell of cells) {
            cell.classList.remove("hover-valid");
            cell.classList.remove("hover-invalid");
        }
    }

    const handleHover = (startIdx) => {
        if (!isPlacing) {
            return;
        }

        const indicies = createCoordinates(startIdx);

        if (!indicies) {
            return;
        }

        for (const idx of indicies) {
            
            const cell = document.querySelector(`[data-index="${idx}"]`)
            
            if (idx > 99 || idx < 0 || player.gameboard.board[idx].hasShip === true) {
                return;
            }
            else {
                cell.classList.add("hover-valid");
            }
        };
    }

    const handleCellClick = (idx) => {
        if (!isPlacing) {
            return;
        }

        const currentShipSize = ships[0];

        const isPlacementSuccessful = player.gameboard.placeShip(currentShipSize, idx, isVertical);

        if (isPlacementSuccessful === false) {
            return;
        }

        ships.shift();

        renderBoard(player.gameboard, "player-board", {
            onClick: handleCellClick,
            onHover: handleHover,
            onLeave: handleHoverLeave,
            onRightClick: toggleVertical
        }); 
    
        if (ships.length === 0) {
            isPlacing = false;
            const playerBoardDOM = document.getElementById("player-board");
            playerBoardDOM.classList.remove("is-placing");

            renderBoard(comp.gameboard, "computer-board", { onClick: playTurn });
        }
    }


    const createCoordinates = (startIdx) => {
        const indicies = []
        if (isVertical) {
            for (let i = startIdx; i < startIdx + ships[0]*10; i += 10) {
                indicies.push(i);
            }
        } 
        if (!isVertical) {
            if ((startIdx % 10) + ships[0] > 10) {
                    return null;
            }
            for (let i = startIdx; i < startIdx + ships[0]; i++) {
                indicies.push(i);
            }
        }
        return indicies;
    }

    renderBoard(comp.gameboard, "computer-board", { onClick: playTurn });   
    
    renderBoard(player.gameboard, "player-board", {
    onClick: handleCellClick,
    onHover: handleHover,
    onLeave: handleHoverLeave,
    onRightClick: toggleVertical
    });

    const playerBoardDOM = document.getElementById("player-board");
    playerBoardDOM.classList.add("is-placing");
}

