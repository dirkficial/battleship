export function renderBoard(gameboard, boardId, onCellClick) {
    const board = document.getElementById(boardId); 
    board.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.dataset.index = i; 
        
        if (gameboard.board[i].hasShip) {
            cell.style.backgroundColor = 'blue';
        }
        
        if (boardId === "computer-board") {
            cell.addEventListener('click', () => {
                onCellClick(i);
            })
        }

        if (gameboard.board[i].isHit) {
            if (gameboard.board[i].hasShip) {
                cell.style.backgroundColor = 'red'; 
            } else {
                cell.style.backgroundColor = 'grey'; 
            }
        }

        board.appendChild(cell); 
    }
}