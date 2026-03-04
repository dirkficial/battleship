export function renderBoard(gameboard, boardId) {
    const board = document.getElementById(boardId); 
    board.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.dataset.index = i; 
        
        if (gameboard.board[i].hasShip) {
            cell.style.backgroundColor = 'blue';
        }
        
        board.appendChild(cell); 
    }
}