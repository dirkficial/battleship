export function renderBoard(gameboard, boardId, listeners = {}) {
    const board = document.getElementById(boardId);
    board.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = "cell";
        cell.dataset.index = i;

        if (listeners.onClick) {
            cell.addEventListener('click', () => listeners.onClick(i));
        }

        if (listeners.onHover) {
            cell.addEventListener('mouseover', () => listeners.onHover(i));
        }

        if (listeners.onLeave) {
            cell.addEventListener('mouseleave', () => listeners.onLeave(i));
        }

        if (gameboard.board[i].hasShip && boardId === "player-board") {
            cell.style.backgroundColor = 'blue';
        }

        if (listeners.onRightClick) {
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                listeners.onRightClick();
            });
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