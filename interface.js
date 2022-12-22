document.addEventListener('DOMContentLoaded', () => {

    let square = document.querySelectorAll(".square")

    square.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(" Jogador " + playerTime + " ganhou ");
        }, 10);

    };

    updateSquare(position);

}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function restartGame() {

    square = document.querySelectorAll(".square")

    square.forEach((square) => {
        position = square.id;
        symbol = board[position];
        if (symbol != ``) {
            square.innerHTML = '';
        }
    })
    playerTime = 0;
    gameOver = false;
    board = ['', '', '', '', '', '', '', '', '',];
}